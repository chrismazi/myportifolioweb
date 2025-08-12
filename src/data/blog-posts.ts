export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishDate: string;
  category: string;
  tags: string[];
  image: string;
  readingTime: number;
  slug: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Ambient Agents with LangGraph',
    excerpt: 'Learn how to create smart helpers that work in the background, watching and responding to events automatically.',
    content: `
<h2 class="text-2xl font-bold text-white mb-4 mt-8">What are Ambient Agents?</h2>

Ambient agents are smart helpers that work quietly in the background, watching what's happening and taking action when needed. Unlike regular chatbots that wait for you to talk to them, ambient agents are <strong>always working</strong> and <strong>aware of what's going on</strong>.

Think of them as smart assistants that:
• <strong>Watch continuously</strong> without bothering you
• <strong>Act automatically</strong> based on what's happening
• <strong>Learn from patterns</strong> to get better over time
• <strong>Work smoothly</strong> with your existing systems

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Main Parts of Ambient Agents</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Watching for Events</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from typing import Dict, Any, List
from datetime import datetime
import asyncio

class EventWatcher:
    def __init__(self):
        self.event_handlers = {}
        self.running = False
    
    def register_handler(self, event_type: str, handler):
        """Register a handler for a specific event type."""
        if event_type not in self.event_handlers:
            self.event_handlers[event_type] = []
        self.event_handlers[event_type].append(handler)
    
    async def emit_event(self, event_type: str, data: Dict[str, Any]):
        """Tell all handlers about an event."""
        if event_type in self.event_handlers:
            for handler in self.event_handlers[event_type]:
                try:
                    await handler(data)
                except Exception as e:
                    print(f"Error in event handler: {e}")
    
    async def start_watching(self):
        """Start watching for events."""
        self.running = True
        while self.running:
            # Check for events (add your specific checking logic here)
            await self.check_for_events()
            await asyncio.sleep(1)  # Check every second
    
    async def check_for_events(self):
        """Override this method to check for specific events."""
        pass
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Remembering Information</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from typing import TypedDict, Annotated
from langgraph.graph import StateGraph
import json

class AmbientState(TypedDict):
    current_context: Annotated[Dict[str, Any], "What's happening right now"]
    user_preferences: Annotated[Dict[str, Any], "What the user likes and wants"]
    recent_events: Annotated[List[Dict[str, Any]], "Recent things that happened"]
    agent_memory: Annotated[Dict[str, Any], "What the agent has learned"]
    pending_actions: Annotated[List[Dict[str, Any]], "Actions waiting to be done"]

class AmbientStateManager:
    def __init__(self):
        self.state = AmbientState(
            current_context={},
            user_preferences={},
            recent_events=[],
            agent_memory={},
            pending_actions=[]
        )
    
    def update_context(self, context: Dict[str, Any]):
        """Update what's happening right now."""
        self.state["current_context"].update(context)
    
    def add_event(self, event: Dict[str, Any]):
        """Add a new event to the recent events list."""
        self.state["recent_events"].append({
            **event,
            "timestamp": datetime.now().isoformat()
        })
        # Keep only the last 100 events
        if len(self.state["recent_events"]) > 100:
            self.state["recent_events"] = self.state["recent_events"][-100:]
    
    def add_pending_action(self, action: Dict[str, Any]):
        """Add an action to the waiting list."""
        self.state["pending_actions"].append(action)
    
    def get_state(self) -> AmbientState:
        """Get the current state."""
        return self.state
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Building the Ambient Agent with LangGraph</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Agent Structure</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from langgraph.graph import StateGraph, END
from langchain_openai import ChatOpenAI
from typing import Dict, Any

class AmbientAgent:
    def __init__(self):
        self.llm = ChatOpenAI(temperature=0.1)
        self.state_manager = AmbientStateManager()
        self.event_watcher = EventWatcher()
        self.workflow = self._create_workflow()
    
    def _create_workflow(self) -> StateGraph:
        """Create the LangGraph workflow for the ambient agent."""
        workflow = StateGraph(AmbientState)
        
        # Add steps
        workflow.add_node("analyze_context", self._analyze_context)
        workflow.add_node("decide_action", self._decide_action)
        workflow.add_node("execute_action", self._execute_action)
        workflow.add_node("update_memory", self._update_memory)
        
        # Set up the flow
        workflow.add_edge("analyze_context", "decide_action")
        workflow.add_edge("decide_action", "execute_action")
        workflow.add_edge("execute_action", "update_memory")
        workflow.add_edge("update_memory", END)
        
        return workflow.compile()
    
    async def _analyze_context(self, state: AmbientState) -> AmbientState:
        """Look at what's happening and recent events."""
        context = state["current_context"]
        recent_events = state["recent_events"]
        
        # Create a prompt for analysis
        prompt = f"""
        Look at what's happening and recent events:
        
        Current Situation: {json.dumps(context, indent=2)}
        Recent Events: {json.dumps(recent_events[-5:], indent=2)}
        
        What patterns do you see? What might be important for the user?
        """
        
        response = self.llm.invoke(prompt)
        
        # Save the analysis
        state["agent_memory"]["last_analysis"] = response.content
        
        return state
    
    async def _decide_action(self, state: AmbientState) -> AmbientState:
        """Decide what action to take based on the analysis."""
        analysis = state["agent_memory"].get("last_analysis", "")
        context = state["current_context"]
        
        prompt = f"""
        Based on this analysis: {analysis}
        
        Current situation: {json.dumps(context, indent=2)}
        
        Should I do anything? If yes, what should I do?
        Respond with JSON format:
        {{
            "should_act": true/false,
            "action": "action_name",
            "parameters": {{}},
            "priority": "high/medium/low"
        }}
        """
        
        response = self.llm.invoke(prompt)
        
        try:
            action_decision = json.loads(response.content)
            if action_decision.get("should_act", False):
                state["pending_actions"].append(action_decision)
        except json.JSONDecodeError:
            print("Failed to understand action decision")
        
        return state
    
    async def _execute_action(self, state: AmbientState) -> AmbientState:
        """Do the waiting actions."""
        for action in state["pending_actions"]:
            await self._do_action(action)
        
        # Clear waiting actions
        state["pending_actions"] = []
        
        return state
    
    async def _update_memory(self, state: AmbientState) -> AmbientState:
        """Update what the agent has learned."""
        # Save important patterns and learnings
        state["agent_memory"]["last_update"] = datetime.now().isoformat()
        
        return state
    
    async def _do_action(self, action: Dict[str, Any]):
        """Do a specific action."""
        action_type = action.get("action")
        
        if action_type == "send_notification":
            await self._send_notification(action.get("parameters", {}))
        elif action_type == "adjust_environment":
            await self._adjust_environment(action.get("parameters", {}))
        elif action_type == "log_event":
            await self._log_event(action.get("parameters", {}))
    
    async def _send_notification(self, params: Dict[str, Any]):
        """Send a message to the user."""
        message = params.get("message", "Ambient agent notification")
        # Add your notification logic here
        print(f"Notification: {message}")
    
    async def _adjust_environment(self, params: Dict[str, Any]):
        """Change the environment based on parameters."""
        # Add your environment control logic here
        print(f"Adjusting environment: {params}")
    
    async def _log_event(self, params: Dict[str, Any]):
        """Write down an event for later reference."""
        # Add your logging logic here
        print(f"Logging event: {params}")
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Event-Driven System</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>class AmbientAgentWithEvents(AmbientAgent):
    def __init__(self):
        super().__init__()
        self._setup_event_handlers()
    
    def _setup_event_handlers(self):
        """Set up handlers for different types of events."""
        self.event_watcher.register_handler("user_activity", self._handle_user_activity)
        self.event_watcher.register_handler("environment_change", self._handle_environment_change)
        self.event_watcher.register_handler("time_event", self._handle_time_event)
        self.event_watcher.register_handler("system_alert", self._handle_system_alert)
    
    async def _handle_user_activity(self, data: Dict[str, Any]):
        """Handle when the user does something."""
        self.state_manager.update_context({
            "last_user_activity": data.get("activity_type"),
            "user_location": data.get("location"),
            "user_mood": data.get("mood", "neutral")
        })
        
        self.state_manager.add_event({
            "type": "user_activity",
            "data": data
        })
        
        # Start the workflow
        await self._trigger_workflow()
    
    async def _handle_environment_change(self, data: Dict[str, Any]):
        """Handle when the environment changes."""
        self.state_manager.update_context({
            "temperature": data.get("temperature"),
            "lighting": data.get("lighting"),
            "noise_level": data.get("noise_level")
        })
        
        self.state_manager.add_event({
            "type": "environment_change",
            "data": data
        })
        
        await self._trigger_workflow()
    
    async def _handle_time_event(self, data: Dict[str, Any]):
        """Handle time-based events."""
        self.state_manager.update_context({
            "current_time": data.get("time"),
            "day_of_week": data.get("day_of_week"),
            "is_work_hours": data.get("is_work_hours", False)
        })
        
        self.state_manager.add_event({
            "type": "time_event",
            "data": data
        })
        
        await self._trigger_workflow()
    
    async def _handle_system_alert(self, data: Dict[str, Any]):
        """Handle system alerts."""
        self.state_manager.add_event({
            "type": "system_alert",
            "data": data,
            "priority": "high"
        })
        
        # High priority events start workflow immediately
        await self._trigger_workflow()
    
    async def _trigger_workflow(self):
        """Start the LangGraph workflow."""
        current_state = self.state_manager.get_state()
        
        try:
            # Run the workflow
            result = await self.workflow.ainvoke(current_state)
            
            # Update state with result
            self.state_manager.state = result
            
        except Exception as e:
            print(f"Error in workflow execution: {e}")
    
    async def start(self):
        """Start the ambient agent."""
        print("Starting ambient agent...")
        
        # Start event watching in background
        asyncio.create_task(self.event_watcher.start_watching())
        
        # Start regular context updates
        asyncio.create_task(self._regular_context_update())
        
        print("Ambient agent started successfully!")
    
    async def _regular_context_update(self):
        """Update context regularly even without events."""
        while True:
            await asyncio.sleep(60)  # Update every minute
            
            # Update time-based context
            now = datetime.now()
            self.state_manager.update_context({
                "current_time": now.isoformat(),
                "day_of_week": now.strftime("%A"),
                "is_work_hours": 9 <= now.hour <= 17
            })
            
            # Start workflow for regular updates
            await self._trigger_workflow()
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Real Examples</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Smart Home Helper</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>class SmartHomeAgent(AmbientAgentWithEvents):
    def __init__(self):
        super().__init__()
        self._setup_smart_home_handlers()
    
    def _setup_smart_home_handlers(self):
        """Set up handlers for smart home events."""
        self.event_watcher.register_handler("motion_detected", self._handle_motion)
        self.event_watcher.register_handler("door_opened", self._handle_door)
        self.event_watcher.register_handler("temperature_change", self._handle_temperature)
        self.event_watcher.register_handler("light_level_change", self._handle_lighting)
    
    async def _handle_motion(self, data: Dict[str, Any]):
        """Handle when motion is detected."""
        location = data.get("location")
        time_of_day = data.get("time_of_day")
        
        # Update context
        self.state_manager.update_context({
            "motion_detected": True,
            "motion_location": location,
            "time_of_day": time_of_day
        })
        
        # Add event
        self.state_manager.add_event({
            "type": "motion_detected",
            "location": location,
            "time": datetime.now().isoformat()
        })
        
        await self._trigger_workflow()
    
    async def _handle_door(self, data: Dict[str, Any]):
        """Handle when doors open or close."""
        door_id = data.get("door_id")
        action = data.get("action")  # "opened" or "closed"
        
        self.state_manager.add_event({
            "type": "door_event",
            "door_id": door_id,
            "action": action,
            "time": datetime.now().isoformat()
        })
        
        await self._trigger_workflow()
    
    async def _do_action(self, action: Dict[str, Any]):
        """Override to handle smart home specific actions."""
        action_type = action.get("action")
        
        if action_type == "adjust_lighting":
            await self._adjust_lighting(action.get("parameters", {}))
        elif action_type == "adjust_temperature":
            await self._adjust_temperature(action.get("parameters", {}))
        elif action_type == "send_security_alert":
            await self._send_security_alert(action.get("parameters", {}))
        else:
            await super()._do_action(action)
    
    async def _adjust_lighting(self, params: Dict[str, Any]):
        """Adjust home lighting based on context."""
        brightness = params.get("brightness", 50)
        location = params.get("location", "living_room")
        
        # Add your smart lighting control here
        print(f"Adjusting lighting in {location} to {brightness}%")
    
    async def _adjust_temperature(self, params: Dict[str, Any]):
        """Adjust home temperature based on context."""
        temperature = params.get("temperature", 22)
        
        # Add your smart thermostat control here
        print(f"Setting temperature to {temperature}°C")
    
    async def _send_security_alert(self, params: Dict[str, Any]):
        """Send security alerts."""
        alert_type = params.get("alert_type", "general")
        location = params.get("location", "unknown")
        
        # Add your security alert system here
        print(f"Security alert: {alert_type} at {location}")
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Work Helper</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>class WorkHelperAgent(AmbientAgentWithEvents):
    def __init__(self):
        super().__init__()
        self._setup_work_handlers()
    
    def _setup_work_handlers(self):
        """Set up handlers for work-related events."""
        self.event_watcher.register_handler("app_usage", self._handle_app_usage)
        self.event_watcher.register_handler("calendar_event", self._handle_calendar)
        self.event_watcher.register_handler("email_received", self._handle_email)
        self.event_watcher.register_handler("focus_session", self._handle_focus)
    
    async def _handle_app_usage(self, data: Dict[str, Any]):
        """Handle when apps are used."""
        app_name = data.get("app_name")
        duration = data.get("duration")
        activity_type = data.get("activity_type")  # "productive", "distracting", "neutral"
        
        self.state_manager.update_context({
            "current_app": app_name,
            "app_activity_type": activity_type
        })
        
        self.state_manager.add_event({
            "type": "app_usage",
            "app_name": app_name,
            "duration": duration,
            "activity_type": activity_type
        })
        
        await self._trigger_workflow()
    
    async def _handle_calendar(self, data: Dict[str, Any]):
        """Handle calendar events."""
        event_title = data.get("title")
        event_time = data.get("time")
        event_duration = data.get("duration")
        
        self.state_manager.update_context({
            "current_calendar_event": event_title,
            "event_time": event_time
        })
        
        self.state_manager.add_event({
            "type": "calendar_event",
            "title": event_title,
            "time": event_time,
            "duration": event_duration
        })
        
        await self._trigger_workflow()
    
    async def _do_action(self, action: Dict[str, Any]):
        """Override to handle work-specific actions."""
        action_type = action.get("action")
        
        if action_type == "send_work_reminder":
            await self._send_work_reminder(action.get("parameters", {}))
        elif action_type == "adjust_notifications":
            await self._adjust_notifications(action.get("parameters", {}))
        elif action_type == "suggest_break":
            await self._suggest_break(action.get("parameters", {}))
        else:
            await super()._do_action(action)
    
    async def _send_work_reminder(self, params: Dict[str, Any]):
        """Send work reminders."""
        message = params.get("message", "Time to focus!")
        reminder_type = params.get("type", "general")
        
        # Add your notification system here
        print(f"Work reminder ({reminder_type}): {message}")
    
    async def _adjust_notifications(self, params: Dict[str, Any]):
        """Adjust notification settings based on context."""
        enable_notifications = params.get("enable", True)
        notification_level = params.get("level", "normal")
        
        # Add your notification control here
        print(f"Adjusting notifications: {enable_notifications}, level: {notification_level}")
    
    async def _suggest_break(self, params: Dict[str, Any]):
        """Suggest taking a break."""
        break_duration = params.get("duration", 5)
        reason = params.get("reason", "You've been working for a while")
        
        # Add your break suggestion system here
        print(f"Break suggestion: {reason}. Take a {break_duration}-minute break.")
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Good Practices</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Privacy and Safety</h3>

• <strong>Minimize Data</strong>: Only collect and store necessary information
• <strong>Local Processing</strong>: Process sensitive data on your own computer when possible
• <strong>Encrypt Data</strong>: Protect data with encryption
• <strong>User Control</strong>: Let users control what data is collected
• <strong>Be Transparent</strong>: Tell users what the agent is doing

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Make It Fast</h3>

• <strong>Filter Events</strong>: Only process important events
• <strong>Batch Processing</strong>: Group similar events together
• <strong>Remember Results</strong>: Save frequently accessed data
• <strong>Use Async</strong>: Use non-blocking operations
• <strong>Watch Resources</strong>: Monitor how much resources are used

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">3. User Experience</h3>

• <strong>Don't Bother</strong>: Don't interrupt the user unnecessarily
• <strong>Be Relevant</strong>: Provide helpful information at the right time
• <strong>Learn</strong>: Allow users to teach the agent their preferences
• <strong>Be Clear</strong>: Show users what the agent is doing
• <strong>Give Control</strong>: Let users easily control the agent

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Deployment</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Infrastructure</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code># Docker setup for ambient agent
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["python", "-m", "ambient_agent"]
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Monitoring</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>import logging
import prometheus_client
from prometheus_client import Counter, Histogram, Gauge

# Track metrics
EVENT_COUNTER = Counter('ambient_events_total', 'Total events processed', ['event_type'])
ACTION_COUNTER = Counter('ambient_actions_total', 'Total actions executed', ['action_type'])
WORKFLOW_DURATION = Histogram('workflow_duration_seconds', 'Workflow execution time')
ACTIVE_AGENTS = Gauge('active_agents', 'Number of active ambient agents')

class MonitoredAmbientAgent(AmbientAgentWithEvents):
    def __init__(self):
        super().__init__()
        self.logger = logging.getLogger(__name__)
    
    async def _handle_event(self, event_type: str, data: Dict[str, Any]):
        """Handle events with monitoring."""
        EVENT_COUNTER.labels(event_type=event_type).inc()
        
        start_time = time.time()
        try:
            await super()._handle_event(event_type, data)
        except Exception as e:
            self.logger.error(f"Error handling event {event_type}: {e}")
        finally:
            duration = time.time() - start_time
            WORKFLOW_DURATION.observe(duration)
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Summary</h2>

Building ambient agents with LangGraph opens up exciting possibilities for creating smart, aware systems that work quietly in the background. By combining event-driven systems with LangGraph's workflow capabilities, you can create agents that:

• <strong>Watch continuously</strong> without being annoying
• <strong>Learn and adapt</strong> to user preferences and patterns
• <strong>Take action automatically</strong> based on context
• <strong>Work smoothly</strong> with existing systems

The key to success is:
• <strong>Start simple</strong>: Begin with basic event watching and add more later
• <strong>Focus on user experience</strong>: Make sure the agent is helpful, not annoying
• <strong>Respect privacy</strong>: Be clear about data collection and usage
• <strong>Test thoroughly</strong>: Watch performance and user feedback
• <strong>Improve continuously</strong>: Make the agent better based on real usage

Ambient agents represent the future of AI agents—smart, aware, and always ready to help when needed. With LangGraph, you have the tools to build these sophisticated systems that truly understand and adapt to their environment.
    `,
    publishDate: '2024-12-20T00:00:00Z',
    category: 'AI Development',
    tags: ['LangGraph', 'Ambient Agents', 'AI', 'Event-Driven', 'Automation'],
    image: '/src/assets/images/ai4impact.png',
    readingTime: 20,
    slug: 'building-ambient-agents-langgraph',
    featured: true
  },
  {
    id: '2',
    title: 'LangChain & Vector Databases in Production',
    excerpt: 'A simple guide to building apps that can find and understand information using LangChain and vector databases.',
    content: `
Artificial Intelligence is changing the world. It's already helping in farming, healthcare, banking, and even in how we teach and learn. But for Africa to be part of this change — not just using AI, but building it — we need something simple but powerful: <strong>education</strong>.

We have the talent. We have the ideas. What we need now is the training, the support, and the belief that <strong>Africans can build world-class AI too</strong>.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Why We're Still Behind</h2>

Right now, many schools in Africa don't teach AI or machine learning. Those that do often don't have the tools, the teachers, or the updated material. Many students want to learn, but can't afford laptops, internet, or online courses. Some of our brightest young people leave for other countries. Others give up.

This isn't because we're not smart. It's because the system isn't ready for us yet.

But we can change that. And in many places — we already are.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Great Things Are Already Happening</h2>

In Rwanda, there's a university called <strong>CMU‑Africa</strong>, part of Carnegie Mellon University. They offer a Master's in Artificial Intelligence (MSEAI), and it's training young Africans to become AI engineers, researchers, and leaders. It's backed by the <strong>Mastercard Foundation</strong>, which also gives scholarships to help students who can't afford tuition.

At CMU‑Africa, students are working on real problems — using AI to improve health systems, education, and business. And it's not just in Rwanda. They work with researchers and universities in other African countries too, like Morocco, South Africa, and Botswana.

I was really inspired by students like <strong>Clemence Ingabire</strong>, who wants to use AI to help solve health challenges in Rwanda. Her story shows what's possible when we give young people access to the right programs and support.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Other Great Places Doing the Work</h2>

There's also <strong>AIMS</strong> — the African Institute for Mathematical Sciences. They've trained over 2,000 students and now run the <strong>AMMI program</strong>, which focuses on AI and machine learning. It's supported by Google AI and brings some of the world's best researchers to teach in Africa.

And then we have <strong>ALX</strong>, <strong>Andela</strong>, and <strong>Moringa School</strong>. These places are not traditional universities. They are training young people in software development, data science, and AI in just a few months — and helping them get jobs with local and international companies.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Learning Is Going Online and Into Communities</h2>

Not everyone has access to a university. But many are learning online. Platforms like <strong>Coursera</strong>, <strong>edX</strong>, <strong>DataCamp</strong>, and <strong>Google AI</strong> offer great courses. Even with a slow connection or a basic phone, people are teaching themselves how to code, how to analyze data, and how to build AI systems.

In cities and towns, we see things like <strong>AI Saturdays</strong> — where learners meet every weekend to study together. There are also groups like <strong>Women in AI</strong> that help more girls and women enter the tech world. These spaces are welcoming, local, and full of energy.

You don't need to be rich or connected to learn. You just need access — and community.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">We Still Have Work to Do</h2>

Of course, challenges remain.

We still need better infrastructure — internet, electricity, and access to computers. We still need more teachers and updated curriculums. We need scholarships and support, especially for girls and students in rural areas.

Governments are starting to help. Countries like Kenya, Rwanda, and South Africa have national AI strategies. That's a good start. But policies alone are not enough. <strong>We need action</strong> — in schools, communities, and companies.

Tech companies like Google, Microsoft, and IBM are also investing in Africa. They've opened research labs, supported training programs, and partnered with local institutions. But we want more than investment. <strong>We want real collaboration</strong> — partnerships where Africans lead, build, and own the future of AI.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">This Is Not Just About Jobs — It's About Ownership</h2>

We are not just training people to work for others. We are training people to build <strong>African solutions for African problems</strong>. AI can help us translate our languages, improve healthcare in rural areas, manage traffic in big cities, and so much more.

Look at people like:

• <strong>Joy Buolamwini</strong>, fighting bias in facial recognition.
• <strong>Tejumade Afonja</strong>, who started AI Saturdays in Nigeria.
• <strong>Moustapha Cissé</strong>, who leads AI research at Google in West Africa.

These are Africans leading in AI — and showing us what's possible.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Final Thoughts: The Future Starts with Us</h2>

Building AI talent in Africa starts with one thing: <strong>believing in our people</strong>. It means giving young people the tools to learn, the chance to build, and the support to grow.

AI is not just about machines or code. It's about people. People who are curious, creative, and committed to solving problems.

Africa is full of those people.

If we invest in education — in programs like CMU‑Africa, AIMS, ALX, and in online and local learning spaces — we will create a generation of builders, thinkers, and leaders.

The future of AI in Africa won't come from outside.
It will come from <strong>our own classrooms</strong>, our own communities, our own stories.

And I believe we're just getting started.
    `,
    publishDate: '2024-11-30T00:00:00Z',
    category: 'AI Development',
    tags: ['LangChain', 'Vector Databases', 'RAG', 'AI', 'Production'],
    image: '/src/assets/images/smart.png',
    readingTime: 18,
    slug: 'langchain-vector-databases-production'
  },
  {
    id: '3',
    title: 'Introduction to LangGraph',
    excerpt: 'A simple guide to building smart apps that can work together and share information using LangGraph.',
    content: `
<h2 class="text-2xl font-bold text-white mb-4 mt-8">What is LangGraph?</h2>

LangGraph is a tool that helps you build smart apps where multiple AI agents can work together. Think of it like a team of workers who can talk to each other and share information to get things done.

Instead of having one AI that does everything, LangGraph lets you create <strong>multiple AI agents</strong> that each have a specific job. They can work together, share information, and make decisions based on what's happening.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Main Ideas</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Keeping Track of Information</h3>

LangGraph uses something called <strong>state</strong> to remember what's happening in your app. This is like a notebook where you write down important information that your AI agents need to remember.

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from typing import TypedDict, Annotated
from langgraph.graph import StateGraph

class AgentState(TypedDict):
    messages: Annotated[list, "The messages in the conversation"]
    next: Annotated[str, "The next helper to call"]
    current_step: Annotated[int, "Which step we are on"]

# Create a workflow
workflow = StateGraph(AgentState)
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Workers and Connections</h3>

<strong>Workers</strong> (called nodes) are the individual steps in your app. <strong>Connections</strong> (called edges) show how information flows between these workers.

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code># Define workers (functions that do specific jobs)
def research_helper(state: AgentState) -> AgentState:
    # This helper does research
    return state

def writing_helper(state: AgentState) -> AgentState:
    # This helper does writing
    return state

# Add workers to the workflow
workflow.add_node("research", research_helper)
workflow.add_node("writing", writing_helper)

# Connect the workers
workflow.add_edge("research", "writing")
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Building Your First LangGraph App</h2>

Let's create a simple example that shows how LangGraph works:

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>import os
from typing import TypedDict, Annotated
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, END
from langchain_core.tools import tool

# Define what information we want to remember
class AgentState(TypedDict):
    messages: Annotated[list, "The messages in the conversation"]
    next: Annotated[str, "The next helper to call"]

# Create helpful tools
@tool
def search_web(query: str) -> str:
    """Search the internet for current information."""
    return f"Search results for: {query}"

@tool
def calculate(expression: str) -> str:
    """Do math calculations."""
    return f"Result: {eval(expression)}"

# Set up our AI helper
llm = ChatOpenAI(model="gpt-3.5-turbo")

# Define what our helper does
def helper(state: AgentState) -> AgentState:
    messages = state["messages"]
    
    # Get the last message
    last_message = messages[-1]
    
    # Get a response from the AI
    response = llm.invoke(messages)
    
    # Save the response
    messages.append(response)
    
    return {"messages": messages, "next": "continue"}

# Create the workflow
workflow = StateGraph(AgentState)

# Add our helper
workflow.add_node("helper", helper)

# Set the starting point
workflow.set_entry_point("helper")

# Decide when to stop
def should_continue(state: AgentState) -> str:
    # Stop if the last message says goodbye
    last_message = state["messages"][-1].content
    if "goodbye" in last_message.lower():
        return END
    return "helper"

workflow.add_conditional_edges("helper", should_continue)

# Put everything together
app = workflow.compile()

# Run the app
config = {"configurable": {"thread_id": "1"}}
for event in app.stream({"messages": [{"role": "user", "content": "Hello!"}]}, config):
    print(event)
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Advanced Features</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Multiple Helpers Working Together</h3>

LangGraph is great for creating systems where different helpers each have a specific job:

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>def research_helper(state: AgentState) -> AgentState:
    """Helper that finds information."""
    # Research work here
    return state

def writing_helper(state: AgentState) -> AgentState:
    """Helper that writes content."""
    # Writing work here
    return state

def review_helper(state: AgentState) -> AgentState:
    """Helper that checks the work."""
    # Review work here
    return state

# Create a team of helpers
workflow = StateGraph(AgentState)

workflow.add_node("research", research_helper)
workflow.add_node("writing", writing_helper)
workflow.add_node("review", review_helper)

# Set up the work flow
workflow.add_edge("research", "writing")
workflow.add_edge("writing", "review")
workflow.add_edge("review", END)
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Smart Decision Making</h3>

You can add logic to decide which helper should work next:

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>def choose_helper(state: AgentState) -> str:
    """Choose which helper should work next."""
    last_message = state["messages"][-1].content.lower()
    
    if "research" in last_message:
        return "research_helper"
    elif "write" in last_message:
        return "writing_helper"
    elif "review" in last_message:
        return "review_helper"
    else:
        return "general_helper"

# Add smart routing
workflow.add_conditional_edges("choose", choose_helper)
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Good Practices</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Keep It Simple</h3>

• <strong>Start small</strong>: Begin with simple workflows and add more later
• <strong>Use clear names</strong>: Give your helpers and information clear, simple names
• <strong>Write comments</strong>: Explain what each part does

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Handle Problems</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>def safe_helper(state: AgentState) -> AgentState:
    try:
        # Your helper's work here
        return state
    except Exception as e:
        # Handle problems gracefully
        error_message = {"role": "system", "content": f"Error: {str(e)}"}
        state["messages"].append(error_message)
        return state
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">3. Test Your Work</h3>

• <strong>Test each helper</strong>: Make sure each helper works on its own
• <strong>Test the whole system</strong>: Make sure all helpers work together
• <strong>Use fake data</strong>: Test with simple examples first

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Real Examples</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Content Creation System</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code># Content creation workflow
workflow = StateGraph(ContentState)

workflow.add_node("research", research_topic)
workflow.add_node("outline", create_outline)
workflow.add_node("write", write_content)
workflow.add_node("edit", edit_content)
workflow.add_node("publish", publish_content)

# Set up the work flow
workflow.add_edge("research", "outline")
workflow.add_edge("outline", "write")
workflow.add_edge("write", "edit")
workflow.add_edge("edit", "publish")
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Customer Help System</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code># Customer help workflow
workflow = StateGraph(SupportState)

workflow.add_node("understand", understand_problem)
workflow.add_node("find_solution", find_solution)
workflow.add_node("respond", give_response)
workflow.add_node("escalate", get_human_help)

# Choose what to do based on the problem
def choose_action(state: SupportState) -> str:
    problem_type = state["problem_type"]
    if problem_type == "simple":
        return "respond"
    elif problem_type == "complex":
        return "find_solution"
    else:
        return "escalate"
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Getting Started</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Installation</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>pip install langgraph langchain-openai
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Set Up Your Environment</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>export OPENAI_API_KEY="your-api-key-here"
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Summary</h2>

LangGraph is a powerful tool for building smart apps where multiple AI agents work together. By understanding the basic ideas of information tracking, workers, and connections, you can create sophisticated workflows that coordinate multiple AI agents.

The key to success with LangGraph is:
• <strong>Start simple</strong>: Begin with basic workflows and add more later
• <strong>Plan your information</strong>: Think about what data your helpers need to share
• <strong>Test everything</strong>: Make sure your workflows work as expected
• <strong>Watch performance</strong>: Keep track of how your apps perform

Whether you're building content creation systems, customer help systems, or research assistants, LangGraph gives you the tools to create intelligent, multi-step AI applications.

Ready to start building? Check out the official documentation and join the LangGraph community to learn from others and share your experiences!
    `,
    publishDate: '2024-12-05T00:00:00Z',
    category: 'AI Development',
    tags: ['LangGraph', 'LangChain', 'AI', 'Workflows', 'Multi-Agent Systems'],
    image: '/src/assets/images/memoji-computer.png',
    readingTime: 15,
    slug: 'introduction-to-langgraph'
  },
  {
    id: '4',
    title: 'Building AI Talent in Africa: Why Education Matters More Than Ever',
    excerpt: 'How education is the key to unlocking Africa\'s AI potential and creating a generation of builders, thinkers, and leaders.',
    content: `
<h2 class="text-2xl font-bold text-white mb-4 mt-8">What are Vector Databases?</h2>

Vector databases are special databases that can store and find information based on meaning, not just exact words. Think of them like a smart library where you can ask "find me books about cooking" and it understands you want recipes, food books, and kitchen guides.

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Why Use Vector Databases?</h3>

Regular databases only find exact matches, but AI apps often need to find <strong>similar meaning</strong> content. Vector databases solve this by:

• <strong>Smart Search</strong>: Find content based on meaning, not just keywords
• <strong>Similar Things</strong>: Find related documents, images, or ideas
• <strong>Recommendations</strong>: Suggest things you might like
• <strong>Question Answering</strong>: Find relevant information to answer questions

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Popular Vector Databases</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Pinecone</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>import pinecone
from langchain_pinecone import PineconeVectorStore
from langchain_openai import OpenAIEmbeddings

# Set up Pinecone
pinecone.init(api_key="your-api-key", environment="your-environment")

# Create word embeddings
embeddings = OpenAIEmbeddings()

# Create vector store
vectorstore = PineconeVectorStore.from_texts(
    texts=["Your text here"],
    embedding=embeddings,
    index_name="your-index-name"
)

# Search for similar documents
docs = vectorstore.similarity_search("your query", k=5)
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Weaviate</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from langchain_weaviate import Weaviate
import weaviate

# Connect to Weaviate
client = weaviate.Client("http://localhost:8080")

# Create vector store
vectorstore = Weaviate(
    client=client,
    index_name="Documents",
    text_key="text",
    embedding=OpenAIEmbeddings()
)

# Add documents
vectorstore.add_texts(["Document 1", "Document 2"])

# Search
results = vectorstore.similarity_search("query", k=3)
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">3. Chroma</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings

# Create embeddings
embeddings = OpenAIEmbeddings()

# Create vector store
vectorstore = Chroma.from_texts(
    texts=["Your documents here"],
    embedding=embeddings,
    persist_directory="./chroma_db"
)

# Save the database
vectorstore.persist()

# Load existing database
vectorstore = Chroma(
    persist_directory="./chroma_db",
    embedding_function=embeddings
)
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Building a Smart Search System</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Document Processing</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.document_loaders import PyPDFLoader, TextLoader
from langchain_openai import OpenAIEmbeddings
from langchain_pinecone import PineconeVectorStore

class DocumentProcessor:
    def __init__(self, vector_store_name: str):
        self.embeddings = OpenAIEmbeddings()
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200
        )
        self.vectorstore = PineconeVectorStore(
            index_name=vector_store_name,
            embedding=self.embeddings
        )
    
    def process_document(self, file_path: str):
        """Process a document and add it to the vector store."""
        # Load document
        if file_path.endswith('.pdf'):
            loader = PyPDFLoader(file_path)
        else:
            loader = TextLoader(file_path)
        
        documents = loader.load()
        
        # Split documents into smaller pieces
        splits = self.text_splitter.split_documents(documents)
        
        # Add to vector store
        self.vectorstore.add_documents(splits)
        
        return len(splits)
    
    def search_documents(self, query: str, k: int = 5):
        """Search for relevant documents."""
        return self.vectorstore.similarity_search(query, k=k)
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Smart Search Strategies</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import LLMChainExtractor
from langchain.retrievers import EnsembleRetriever

class SmartSearcher:
    def __init__(self, vectorstore):
        self.vectorstore = vectorstore
        
        # Create different search methods
        self.similarity_searcher = vectorstore.as_retriever(
            search_type="similarity",
            search_kwargs={"k": 10}
        )
        
        self.mmr_searcher = vectorstore.as_retriever(
            search_type="mmr",
            search_kwargs={"k": 10, "fetch_k": 20}
        )
        
        # Combine different search methods
        self.combined_searcher = EnsembleRetriever(
            retrievers=[self.similarity_searcher, self.mmr_searcher],
            weights=[0.7, 0.3]
        )
        
        # Use AI to improve search results
        llm = ChatOpenAI(temperature=0)
        compressor = LLMChainExtractor.from_llm(llm)
        self.smart_searcher = ContextualCompressionRetriever(
            base_retriever=self.combined_searcher,
            base_compressor=compressor
        )
    
    def search(self, query: str, use_smart_search: bool = True):
        """Search for documents using smart strategies."""
        if use_smart_search:
            return self.smart_searcher.get_relevant_documents(query)
        else:
            return self.combined_searcher.get_relevant_documents(query)
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Making It Work Well</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Speed Up Your App</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>import asyncio
from concurrent.futures import ThreadPoolExecutor
from typing import List

class FastVectorStore:
    def __init__(self, vectorstore):
        self.vectorstore = vectorstore
        self.executor = ThreadPoolExecutor(max_workers=4)
    
    async def search_many(self, queries: List[str]):
        """Search for multiple things at the same time."""
        loop = asyncio.get_event_loop()
        
        # Run searches in parallel
        tasks = [
            loop.run_in_executor(
                self.executor,
                self.vectorstore.similarity_search,
                query,
                5
            )
            for query in queries
        ]
        
        results = await asyncio.gather(*tasks)
        return results
    
    def prepare_embeddings(self, texts: List[str]):
        """Prepare embeddings ahead of time for better speed."""
        embeddings = OpenAIEmbeddings()
        return embeddings.embed_documents(texts)
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Remember Search Results</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>import redis
import hashlib
import json
from functools import lru_cache

class CachedVectorStore:
    def __init__(self, vectorstore, redis_url: str = "redis://localhost:6379"):
        self.vectorstore = vectorstore
        self.redis_client = redis.from_url(redis_url)
    
    def _get_cache_key(self, query: str) -> str:
        """Create a unique key for each search."""
        return hashlib.md5(query.encode()).hexdigest()
    
    @lru_cache(maxsize=1000)
    def search_with_cache(self, query: str, k: int = 5):
        """Search with memory to avoid doing the same search twice."""
        cache_key = f"search:{self._get_cache_key(query)}:{k}"
        
        # Check if we already have this result
        cached_result = self.redis_client.get(cache_key)
        if cached_result:
            return json.loads(cached_result)
        
        # Do the search
        results = self.vectorstore.similarity_search(query, k=k)
        
        # Remember the result for 1 hour
        self.redis_client.setex(
            cache_key,
            3600,
            json.dumps([doc.dict() for doc in results])
        )
        
        return results
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">3. Watch How It Works</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>import logging
import time
from typing import Dict, Any

class MonitoredVectorStore:
    def __init__(self, vectorstore):
        self.vectorstore = vectorstore
        self.logger = logging.getLogger(__name__)
    
    def search_with_monitoring(self, query: str, k: int = 5) -> Dict[str, Any]:
        """Search and keep track of how long it takes."""
        start_time = time.time()
        
        try:
            results = self.vectorstore.similarity_search(query, k=k)
            
            # Log how long it took
            duration = time.time() - start_time
            self.logger.info(f"Search completed in {duration:.2f}s")
            
            return {
                "results": results,
                "duration": duration,
                "query": query,
                "k": k,
                "success": True
            }
            
        except Exception as e:
            duration = time.time() - start_time
            self.logger.error(f"Search failed after {duration:.2f}s: {str(e)}")
            
            return {
                "results": [],
                "duration": duration,
                "query": query,
                "k": k,
                "success": False,
                "error": str(e)
            }
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Real Examples</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Document Question Answering</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from langchain.chains import RetrievalQA
from langchain_openai import ChatOpenAI

class DocumentQASystem:
    def __init__(self, vectorstore):
        self.vectorstore = vectorstore
        self.llm = ChatOpenAI(temperature=0)
        self.qa_chain = RetrievalQA.from_chain_type(
            llm=self.llm,
            chain_type="stuff",
            retriever=vectorstore.as_retriever(search_kwargs={"k": 3})
        )
    
    def ask_question(self, question: str) -> str:
        """Ask a question about the documents."""
        return self.qa_chain.run(question)
    
    def ask_with_sources(self, question: str) -> Dict[str, Any]:
        """Ask a question and get the sources used."""
        docs = self.vectorstore.similarity_search(question, k=3)
        answer = self.llm.predict(
            f"Based on the following context, answer the question: {question}\\n\\n"
            f"Context: {' '.join([doc.page_content for doc in docs])}"
        )
        
        return {
            "answer": answer,
            "sources": [doc.metadata for doc in docs]
        }
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Smart Search API</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

app = FastAPI()

class SearchRequest(BaseModel):
    query: str
    k: int = 5
    include_metadata: bool = True

class SearchResponse(BaseModel):
    results: List[dict]
    query: str
    total_results: int

@app.post("/search", response_model=SearchResponse)
async def smart_search(request: SearchRequest):
    try:
        # Do the search
        docs = vectorstore.similarity_search(request.query, k=request.k)
        
        # Format the results
        results = []
        for doc in docs:
            result = {"content": doc.page_content}
            if request.include_metadata:
                result["metadata"] = doc.metadata
            results.append(result)
        
        return SearchResponse(
            results=results,
            query=request.query,
            total_results=len(results)
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Good Practices</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Manage Your Data</h3>

• <strong>Split Smart</strong>: Choose good sizes for your document pieces
• <strong>Add Labels</strong>: Include helpful information about your documents
• <strong>Keep Versions</strong>: Track changes to your database
• <strong>Backup</strong>: Save copies of your database regularly

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Keep It Safe</h3>

• <strong>Control Access</strong>: Only let authorized people use your system
• <strong>Encrypt Data</strong>: Protect your data with encryption
• <strong>Secure API</strong>: Use API keys and limit how often people can search
• <strong>Log Everything</strong>: Keep records of who accessed what

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">3. Make It Fast</h3>

• <strong>Spread the Load</strong>: Use multiple servers to handle more users
• <strong>Balance Work</strong>: Distribute searches across different computers
• <strong>Remember Results</strong>: Save common search results to avoid doing them again
• <strong>Watch Performance</strong>: Keep track of how fast your system is

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Summary</h2>

Vector databases are essential for building smart AI apps. By combining LangChain with vector databases like Pinecone, Weaviate, or Chroma, you can create powerful search systems that understand meaning.

Key things to remember:
• <strong>Choose the right database</strong> for your needs and size
• <strong>Split documents well</strong> for better search results
• <strong>Use smart search methods</strong> to get better results
• <strong>Make it fast</strong> for real users
• <strong>Keep it safe</strong> and backed up

The combination of LangChain and vector databases opens up many possibilities for building intelligent apps that can understand and find information based on meaning. Start with simple implementations and add more features as you need them.
    `,
    publishDate: '2024-12-10T00:00:00Z',
    category: 'Education',
    tags: ['AI', 'Education', 'Talent Development', 'Skills', 'Africa'],
    image: '/src/assets/images/book-cover.png',
    readingTime: 10,
    slug: 'building-ai-talent-africa-education',
    featured: true
  },
  {
    id: '5',
    title: 'AI-Powered Agricultural Solutions: Transforming Farming in Africa',
    excerpt: 'How artificial intelligence is revolutionizing agriculture across the African continent, from crop prediction to smart irrigation systems.',
    content: `
<h2 class="text-2xl font-bold text-white mb-4 mt-8">What are Ambient Agents?</h2>

Ambient agents are smart helpers that work quietly in the background, watching what's happening and taking action when needed. Unlike regular chatbots that wait for you to talk to them, ambient agents are <strong>always working</strong> and <strong>aware of what's going on</strong>.

Think of them as smart assistants that:
• <strong>Watch continuously</strong> without bothering you
• <strong>Act automatically</strong> based on what's happening
• <strong>Learn from patterns</strong> to get better over time
• <strong>Work smoothly</strong> with your existing systems

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Main Parts of Ambient Agents</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Watching for Events</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from typing import Dict, Any, List
from datetime import datetime
import asyncio

class EventWatcher:
    def __init__(self):
        self.event_handlers = {}
        self.running = False
    
    def register_handler(self, event_type: str, handler):
        """Register a handler for a specific event type."""
        if event_type not in self.event_handlers:
            self.event_handlers[event_type] = []
        self.event_handlers[event_type].append(handler)
    
    async def emit_event(self, event_type: str, data: Dict[str, Any]):
        """Tell all handlers about an event."""
        if event_type in self.event_handlers:
            for handler in self.event_handlers[event_type]:
                try:
                    await handler(data)
                except Exception as e:
                    print(f"Error in event handler: {e}")
    
    async def start_watching(self):
        """Start watching for events."""
        self.running = True
        while self.running:
            # Check for events (add your specific checking logic here)
            await self.check_for_events()
            await asyncio.sleep(1)  # Check every second
    
    async def check_for_events(self):
        """Override this method to check for specific events."""
        pass
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Remembering Information</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from typing import TypedDict, Annotated
from langgraph.graph import StateGraph
import json

class AmbientState(TypedDict):
    current_context: Annotated[Dict[str, Any], "What's happening right now"]
    user_preferences: Annotated[Dict[str, Any], "What the user likes and wants"]
    recent_events: Annotated[List[Dict[str, Any]], "Recent things that happened"]
    agent_memory: Annotated[Dict[str, Any], "What the agent has learned"]
    pending_actions: Annotated[List[Dict[str, Any]], "Actions waiting to be done"]

class AmbientStateManager:
    def __init__(self):
        self.state = AmbientState(
            current_context={},
            user_preferences={},
            recent_events=[],
            agent_memory={},
            pending_actions=[]
        )
    
    def update_context(self, context: Dict[str, Any]):
        """Update what's happening right now."""
        self.state["current_context"].update(context)
    
    def add_event(self, event: Dict[str, Any]):
        """Add a new event to the recent events list."""
        self.state["recent_events"].append({
            **event,
            "timestamp": datetime.now().isoformat()
        })
        # Keep only the last 100 events
        if len(self.state["recent_events"]) > 100:
            self.state["recent_events"] = self.state["recent_events"][-100:]
    
    def add_pending_action(self, action: Dict[str, Any]):
        """Add an action to the waiting list."""
        self.state["pending_actions"].append(action)
    
    def get_state(self) -> AmbientState:
        """Get the current state."""
        return self.state
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Building the Ambient Agent with LangGraph</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Agent Structure</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from langgraph.graph import StateGraph, END
from langchain_openai import ChatOpenAI
from typing import Dict, Any

class AmbientAgent:
    def __init__(self):
        self.llm = ChatOpenAI(temperature=0.1)
        self.state_manager = AmbientStateManager()
        self.event_watcher = EventWatcher()
        self.workflow = self._create_workflow()
    
    def _create_workflow(self) -> StateGraph:
        """Create the LangGraph workflow for the ambient agent."""
        workflow = StateGraph(AmbientState)
        
        # Add steps
        workflow.add_node("analyze_context", self._analyze_context)
        workflow.add_node("decide_action", self._decide_action)
        workflow.add_node("execute_action", self._execute_action)
        workflow.add_node("update_memory", self._update_memory)
        
        # Set up the flow
        workflow.add_edge("analyze_context", "decide_action")
        workflow.add_edge("decide_action", "execute_action")
        workflow.add_edge("execute_action", "update_memory")
        workflow.add_edge("update_memory", END)
        
        return workflow.compile()
    
    async def _analyze_context(self, state: AmbientState) -> AmbientState:
        """Look at what's happening and recent events."""
        context = state["current_context"]
        recent_events = state["recent_events"]
        
        # Create a prompt for analysis
        prompt = f"""
        Look at what's happening and recent events:
        
        Current Situation: {json.dumps(context, indent=2)}
        Recent Events: {json.dumps(recent_events[-5:], indent=2)}
        
        What patterns do you see? What might be important for the user?
        """
        
        response = self.llm.invoke(prompt)
        
        # Save the analysis
        state["agent_memory"]["last_analysis"] = response.content
        
        return state
    
    async def _decide_action(self, state: AmbientState) -> AmbientState:
        """Decide what action to take based on the analysis."""
        analysis = state["agent_memory"].get("last_analysis", "")
        context = state["current_context"]
        
        prompt = f"""
        Based on this analysis: {analysis}
        
        Current situation: {json.dumps(context, indent=2)}
        
        Should I do anything? If yes, what should I do?
        Respond with JSON format:
        {{
            "should_act": true/false,
            "action": "action_name",
            "parameters": {{}},
            "priority": "high/medium/low"
        }}
        """
        
        response = self.llm.invoke(prompt)
        
        try:
            action_decision = json.loads(response.content)
            if action_decision.get("should_act", False):
                state["pending_actions"].append(action_decision)
        except json.JSONDecodeError:
            print("Failed to understand action decision")
        
        return state
    
    async def _execute_action(self, state: AmbientState) -> AmbientState:
        """Do the waiting actions."""
        for action in state["pending_actions"]:
            await self._do_action(action)
        
        # Clear waiting actions
        state["pending_actions"] = []
        
        return state
    
    async def _update_memory(self, state: AmbientState) -> AmbientState:
        """Update what the agent has learned."""
        # Save important patterns and learnings
        state["agent_memory"]["last_update"] = datetime.now().isoformat()
        
        return state
    
    async def _do_action(self, action: Dict[str, Any]):
        """Do a specific action."""
        action_type = action.get("action")
        
        if action_type == "send_notification":
            await self._send_notification(action.get("parameters", {}))
        elif action_type == "adjust_environment":
            await self._adjust_environment(action.get("parameters", {}))
        elif action_type == "log_event":
            await self._log_event(action.get("parameters", {}))
    
    async def _send_notification(self, params: Dict[str, Any]):
        """Send a message to the user."""
        message = params.get("message", "Ambient agent notification")
        # Add your notification logic here
        print(f"Notification: {message}")
    
    async def _adjust_environment(self, params: Dict[str, Any]):
        """Change the environment based on parameters."""
        # Add your environment control logic here
        print(f"Adjusting environment: {params}")
    
    async def _log_event(self, params: Dict[str, Any]):
        """Write down an event for later reference."""
        # Add your logging logic here
        print(f"Logging event: {params}")
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Event-Driven System</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>class AmbientAgentWithEvents(AmbientAgent):
    def __init__(self):
        super().__init__()
        self._setup_event_handlers()
    
    def _setup_event_handlers(self):
        """Set up handlers for different types of events."""
        self.event_watcher.register_handler("user_activity", self._handle_user_activity)
        self.event_watcher.register_handler("environment_change", self._handle_environment_change)
        self.event_watcher.register_handler("time_event", self._handle_time_event)
        self.event_watcher.register_handler("system_alert", self._handle_system_alert)
    
    async def _handle_user_activity(self, data: Dict[str, Any]):
        """Handle when the user does something."""
        self.state_manager.update_context({
            "last_user_activity": data.get("activity_type"),
            "user_location": data.get("location"),
            "user_mood": data.get("mood", "neutral")
        })
        
        self.state_manager.add_event({
            "type": "user_activity",
            "data": data
        })
        
        # Start the workflow
        await self._trigger_workflow()
    
    async def _handle_environment_change(self, data: Dict[str, Any]):
        """Handle when the environment changes."""
        self.state_manager.update_context({
            "temperature": data.get("temperature"),
            "lighting": data.get("lighting"),
            "noise_level": data.get("noise_level")
        })
        
        self.state_manager.add_event({
            "type": "environment_change",
            "data": data
        })
        
        await self._trigger_workflow()
    
    async def _handle_time_event(self, data: Dict[str, Any]):
        """Handle time-based events."""
        self.state_manager.update_context({
            "current_time": data.get("time"),
            "day_of_week": data.get("day_of_week"),
            "is_work_hours": data.get("is_work_hours", False)
        })
        
        self.state_manager.add_event({
            "type": "time_event",
            "data": data
        })
        
        await self._trigger_workflow()
    
    async def _handle_system_alert(self, data: Dict[str, Any]):
        """Handle system alerts."""
        self.state_manager.add_event({
            "type": "system_alert",
            "data": data,
            "priority": "high"
        })
        
        # High priority events start workflow immediately
        await self._trigger_workflow()
    
    async def _trigger_workflow(self):
        """Start the LangGraph workflow."""
        current_state = self.state_manager.get_state()
        
        try:
            # Run the workflow
            result = await self.workflow.ainvoke(current_state)
            
            # Update state with result
            self.state_manager.state = result
            
        except Exception as e:
            print(f"Error in workflow execution: {e}")
    
    async def start(self):
        """Start the ambient agent."""
        print("Starting ambient agent...")
        
        # Start event watching in background
        asyncio.create_task(self.event_watcher.start_watching())
        
        # Start regular context updates
        asyncio.create_task(self._regular_context_update())
        
        print("Ambient agent started successfully!")
    
    async def _regular_context_update(self):
        """Update context regularly even without events."""
        while True:
            await asyncio.sleep(60)  # Update every minute
            
            # Update time-based context
            now = datetime.now()
            self.state_manager.update_context({
                "current_time": now.isoformat(),
                "day_of_week": now.strftime("%A"),
                "is_work_hours": 9 <= now.hour <= 17
            })
            
            # Start workflow for regular updates
            await self._trigger_workflow()
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Real Examples</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Smart Home Helper</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>class SmartHomeAgent(AmbientAgentWithEvents):
    def __init__(self):
        super().__init__()
        self._setup_smart_home_handlers()
    
    def _setup_smart_home_handlers(self):
        """Set up handlers for smart home events."""
        self.event_watcher.register_handler("motion_detected", self._handle_motion)
        self.event_watcher.register_handler("door_opened", self._handle_door)
        self.event_watcher.register_handler("temperature_change", self._handle_temperature)
        self.event_watcher.register_handler("light_level_change", self._handle_lighting)
    
    async def _handle_motion(self, data: Dict[str, Any]):
        """Handle when motion is detected."""
        location = data.get("location")
        time_of_day = data.get("time_of_day")
        
        # Update context
        self.state_manager.update_context({
            "motion_detected": True,
            "motion_location": location,
            "time_of_day": time_of_day
        })
        
        # Add event
        self.state_manager.add_event({
            "type": "motion_detected",
            "location": location,
            "time": datetime.now().isoformat()
        })
        
        await self._trigger_workflow()
    
    async def _handle_door(self, data: Dict[str, Any]):
        """Handle when doors open or close."""
        door_id = data.get("door_id")
        action = data.get("action")  # "opened" or "closed"
        
        self.state_manager.add_event({
            "type": "door_event",
            "door_id": door_id,
            "action": action,
            "time": datetime.now().isoformat()
        })
        
        await self._trigger_workflow()
    
    async def _do_action(self, action: Dict[str, Any]):
        """Override to handle smart home specific actions."""
        action_type = action.get("action")
        
        if action_type == "adjust_lighting":
            await self._adjust_lighting(action.get("parameters", {}))
        elif action_type == "adjust_temperature":
            await self._adjust_temperature(action.get("parameters", {}))
        elif action_type == "send_security_alert":
            await self._send_security_alert(action.get("parameters", {}))
        else:
            await super()._do_action(action)
    
    async def _adjust_lighting(self, params: Dict[str, Any]):
        """Adjust home lighting based on context."""
        brightness = params.get("brightness", 50)
        location = params.get("location", "living_room")
        
        # Add your smart lighting control here
        print(f"Adjusting lighting in {location} to {brightness}%")
    
    async def _adjust_temperature(self, params: Dict[str, Any]):
        """Adjust home temperature based on context."""
        temperature = params.get("temperature", 22)
        
        # Add your smart thermostat control here
        print(f"Setting temperature to {temperature}°C")
    
    async def _send_security_alert(self, params: Dict[str, Any]):
        """Send security alerts."""
        alert_type = params.get("alert_type", "general")
        location = params.get("location", "unknown")
        
        # Add your security alert system here
        print(f"Security alert: {alert_type} at {location}")
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Work Helper</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>class WorkHelperAgent(AmbientAgentWithEvents):
    def __init__(self):
        super().__init__()
        self._setup_work_handlers()
    
    def _setup_work_handlers(self):
        """Set up handlers for work-related events."""
        self.event_watcher.register_handler("app_usage", self._handle_app_usage)
        self.event_watcher.register_handler("calendar_event", self._handle_calendar)
        self.event_watcher.register_handler("email_received", self._handle_email)
        self.event_watcher.register_handler("focus_session", self._handle_focus)
    
    async def _handle_app_usage(self, data: Dict[str, Any]):
        """Handle when apps are used."""
        app_name = data.get("app_name")
        duration = data.get("duration")
        activity_type = data.get("activity_type")  # "productive", "distracting", "neutral"
        
        self.state_manager.update_context({
            "current_app": app_name,
            "app_activity_type": activity_type
        })
        
        self.state_manager.add_event({
            "type": "app_usage",
            "app_name": app_name,
            "duration": duration,
            "activity_type": activity_type
        })
        
        await self._trigger_workflow()
    
    async def _handle_calendar(self, data: Dict[str, Any]):
        """Handle calendar events."""
        event_title = data.get("title")
        event_time = data.get("time")
        event_duration = data.get("duration")
        
        self.state_manager.update_context({
            "current_calendar_event": event_title,
            "event_time": event_time
        })
        
        self.state_manager.add_event({
            "type": "calendar_event",
            "title": event_title,
            "time": event_time,
            "duration": event_duration
        })
        
        await self._trigger_workflow()
    
    async def _do_action(self, action: Dict[str, Any]):
        """Override to handle work-specific actions."""
        action_type = action.get("action")
        
        if action_type == "send_work_reminder":
            await self._send_work_reminder(action.get("parameters", {}))
        elif action_type == "adjust_notifications":
            await self._adjust_notifications(action.get("parameters", {}))
        elif action_type == "suggest_break":
            await self._suggest_break(action.get("parameters", {}))
        else:
            await super()._do_action(action)
    
    async def _send_work_reminder(self, params: Dict[str, Any]):
        """Send work reminders."""
        message = params.get("message", "Time to focus!")
        reminder_type = params.get("type", "general")
        
        # Add your notification system here
        print(f"Work reminder ({reminder_type}): {message}")
    
    async def _adjust_notifications(self, params: Dict[str, Any]):
        """Adjust notification settings based on context."""
        enable_notifications = params.get("enable", True)
        notification_level = params.get("level", "normal")
        
        # Add your notification control here
        print(f"Adjusting notifications: {enable_notifications}, level: {notification_level}")
    
    async def _suggest_break(self, params: Dict[str, Any]):
        """Suggest taking a break."""
        break_duration = params.get("duration", 5)
        reason = params.get("reason", "You've been working for a while")
        
        # Add your break suggestion system here
        print(f"Break suggestion: {reason}. Take a {break_duration}-minute break.")
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Good Practices</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Privacy and Safety</h3>

• <strong>Minimize Data</strong>: Only collect and store necessary information
• <strong>Local Processing</strong>: Process sensitive data on your own computer when possible
• <strong>Encrypt Data</strong>: Protect data with encryption
• <strong>User Control</strong>: Let users control what data is collected
• <strong>Be Transparent</strong>: Tell users what the agent is doing

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Make It Fast</h3>

• <strong>Filter Events</strong>: Only process important events
• <strong>Batch Processing</strong>: Group similar events together
• <strong>Remember Results</strong>: Save frequently accessed data
• <strong>Use Async</strong>: Use non-blocking operations
• <strong>Watch Resources</strong>: Monitor how much resources are used

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">3. User Experience</h3>

• <strong>Don't Bother</strong>: Don't interrupt the user unnecessarily
• <strong>Be Relevant</strong>: Provide helpful information at the right time
• <strong>Learn</strong>: Allow users to teach the agent their preferences
• <strong>Be Clear</strong>: Show users what the agent is doing
• <strong>Give Control</strong>: Let users easily control the agent

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Deployment</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Infrastructure</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code># Docker setup for ambient agent
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["python", "-m", "ambient_agent"]
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Monitoring</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>import logging
import prometheus_client
from prometheus_client import Counter, Histogram, Gauge

# Track metrics
EVENT_COUNTER = Counter('ambient_events_total', 'Total events processed', ['event_type'])
ACTION_COUNTER = Counter('ambient_actions_total', 'Total actions executed', ['action_type'])
WORKFLOW_DURATION = Histogram('workflow_duration_seconds', 'Workflow execution time')
ACTIVE_AGENTS = Gauge('active_agents', 'Number of active ambient agents')

class MonitoredAmbientAgent(AmbientAgentWithEvents):
    def __init__(self):
        super().__init__()
        self.logger = logging.getLogger(__name__)
    
    async def _handle_event(self, event_type: str, data: Dict[str, Any]):
        """Handle events with monitoring."""
        EVENT_COUNTER.labels(event_type=event_type).inc()
        
        start_time = time.time()
        try:
            await super()._handle_event(event_type, data)
        except Exception as e:
            self.logger.error(f"Error handling event {event_type}: {e}")
        finally:
            duration = time.time() - start_time
            WORKFLOW_DURATION.observe(duration)
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Summary</h2>

Building ambient agents with LangGraph opens up exciting possibilities for creating smart, aware systems that work quietly in the background. By combining event-driven systems with LangGraph's workflow capabilities, you can create agents that:

• <strong>Watch continuously</strong> without being annoying
• <strong>Learn and adapt</strong> to user preferences and patterns
• <strong>Take action automatically</strong> based on context
• <strong>Work smoothly</strong> with existing systems

The key to success is:
• <strong>Start simple</strong>: Begin with basic event watching and add more later
• <strong>Focus on user experience</strong>: Make sure the agent is helpful, not annoying
• <strong>Respect privacy</strong>: Be clear about data collection and usage
• <strong>Test thoroughly</strong>: Watch performance and user feedback
• <strong>Improve continuously</strong>: Make the agent better based on real usage

Ambient agents represent the future of AI agents—smart, aware, and always ready to help when needed. With LangGraph, you have the tools to build these sophisticated systems that truly understand and adapt to their environment.
    `,
    publishDate: '2024-12-15T00:00:00Z',
    category: 'Agriculture',
    tags: ['AI', 'Agriculture', 'Africa', 'Innovation', 'Technology'],
    image: '/src/assets/images/aipowered.png',
    readingTime: 8,
    slug: 'ai-powered-agricultural-solutions-africa',
    featured: true
  }
];

export const getBlogPosts = () => blogPosts;

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);

export const getPostBySlug = (slug: string) => blogPosts.find(post => post.slug === slug);

export const getPostsByCategory = (category: string) => blogPosts.filter(post => post.category === category);

export const getPostsByTag = (tag: string) => blogPosts.filter(post => post.tags.includes(tag)); 