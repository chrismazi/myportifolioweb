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
    title: 'AI-Powered Agricultural Solutions: Transforming Farming in Africa',
    excerpt: 'How artificial intelligence is revolutionizing agriculture across the African continent, from crop prediction to smart irrigation systems.',
    content: `Agriculture is a big part of life in Africa. Many people grow crops not just for food but also to earn money and support their families. But farming today is not easy. Farmers face problems like unpredictable weather, poor soil, plant diseases, and lack of access to markets.

Now, something powerful is starting to help—Artificial Intelligence (AI). AI uses computers to study data like weather, soil, or satellite images and gives helpful advice to farmers. This can change how farming is done across Africa.

In this article, we look at how AI is already helping farmers in Rwanda and how young people and researchers are building real solutions that work.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">What is AI Doing in African Farming?</h2>

AI is being used in many ways:

• Predicting weather to help farmers know when to plant
• Giving crop advice based on soil and climate  
• Detecting plant diseases using photos or cameras
• Helping manage irrigation so water isn't wasted
• Connecting farmers to transport or markets

These solutions don't need huge machines. Many work on phones or small devices and can be used by farmers in rural areas.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Rwanda: Real Examples of Smart Farming</h2>

In Rwanda, some of these AI tools are already in use—and making a difference.

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Smart Fertilizer Advice</h3>
The government, along with researchers, created the Smart Nkunganire System. It helps farmers know the right fertilizer to use and how much, based on the crop and the soil. It's being used for crops like maize, beans, potatoes, and cassava. This system helps prevent waste and boosts harvests.

There's still room for improvement—like making sure stock is tracked better and ensuring the app is easy to use. But updates are on the way.

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Remote-Controlled Irrigation</h3>
In Kibagabaga, Rwandan engineers developed a smart irrigation system that works remotely. It uses sensors to know when crops need water and can turn irrigation on or off automatically. Farmers can control it from a phone or laptop. This saves water and supports better crop growth. The system was showcased at the 2025 National Agriculture Show and is currently being tested in greenhouses.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Research at CMU-Africa: Real Tools for Real Farmers</h2>

Carnegie Mellon University Africa, based in Kigali, is training young Africans to solve local problems using AI and data science. Here are some of the tools they've built:

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Predicting Rainfall in Rwanda</h3>
Stephen Augustine, a student at CMU-Africa, developed a tool to predict rainfall up to four weeks ahead. He grouped Rwanda's regions into weather zones and used weather data to make predictions. The system is about 75–88% accurate and helps farmers decide the best time to plant. It also supports planning at the government level.

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Using Satellites to Help Agriculture</h3>
CMU-Africa has partnered with the Rwanda Space Agency and Germany's space agency to teach students how to use satellite data and AI in agriculture. Some of these students are already working on tools to predict soil health and improve farm management. Over 40 people have been trained so far.

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Helping Farmers with Transport</h3>
In a 2025 hackathon, CMU-Africa students built Hinga Transit, a chatbot that connects farmers with truck drivers after harvest. Transport is a big challenge for many farmers, and poor logistics lead to lost crops and income. This project helps solve that problem—and it gained support from Salesforce and the UN's Food and Agriculture Organization (FAO).

<h2 class="text-2xl font-bold text-white mb-4 mt-8">AI Tools Making a Difference</h2>

Here's how AI is helping farmers across Rwanda and other parts of Africa:

<div class="overflow-x-auto my-6">
<table class="w-full border-collapse border border-gray-600">
<thead>
<tr class="bg-gray-800">
<th class="border border-gray-600 px-4 py-3 text-left font-semibold text-white">Problem</th>
<th class="border border-gray-600 px-4 py-3 text-left font-semibold text-white">What AI Does</th>
</tr>
</thead>
<tbody>
<tr class="border-b border-gray-600">
<td class="border border-gray-600 px-4 py-3 text-white/80">Changing weather</td>
<td class="border border-gray-600 px-4 py-3 text-white/80">Predicts rainfall to plan planting</td>
</tr>
<tr class="border-b border-gray-600">
<td class="border border-gray-600 px-4 py-3 text-white/80">Low yields</td>
<td class="border border-gray-600 px-4 py-3 text-white/80">Suggests best crops for the soil and climate</td>
</tr>
<tr class="border-b border-gray-600">
<td class="border border-gray-600 px-4 py-3 text-white/80">Plant diseases</td>
<td class="border border-gray-600 px-4 py-3 text-white/80">Detects problems early with images</td>
</tr>
<tr class="border-b border-gray-600">
<td class="border border-gray-600 px-4 py-3 text-white/80">Wasted water</td>
<td class="border border-gray-600 px-4 py-3 text-white/80">Automates watering using sensors</td>
</tr>
<tr class="border-b border-gray-600">
<td class="border border-gray-600 px-4 py-3 text-white/80">Poor transport</td>
<td class="border border-gray-600 px-4 py-3 text-white/80">Connects farmers to drivers or markets</td>
</tr>
</tbody>
</table>
</div>

One tool, AgWise, offers free advice on what crop to grow, when to plant, and which inputs to use. It works even without internet access. Farmers using AgWise in Rwanda and other countries have reported yield increases of up to 60%, especially in rice and potato farming.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">What is Making All This Work?</h2>

Several factors are driving this AI success in African farming:

• <strong>Training and education</strong>: Young Africans are learning to build tools that solve real problems
• <strong>Government support</strong>: AI is being integrated into national systems like Smart Nkunganire
• <strong>Partnerships</strong>: Universities, tech companies, and development agencies are working together
• <strong>Better digital access</strong>: More people now own smartphones and can use digital tools

<h2 class="text-2xl font-bold text-white mb-4 mt-8">What Still Needs to Happen?</h2>

Even with progress, there's more to do:

• Make AI tools easier to use, especially on basic phones
• Train more farmers to understand and benefit from the technology
• Improve the quality of data behind AI predictions
• Support more young African innovators who are building these tools

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Final Thoughts</h2>

AI is not here to take over farms. It's here to help farmers make smarter choices. Whether it's predicting rain, choosing the right fertilizer, saving water, or getting crops to market—AI is already transforming agriculture in Rwanda and beyond.

What's powerful is that these innovations are being built by Africans, for Africans. Young students, engineers, researchers, and farmers are coming together to build tools that truly work.

With continued support and collaboration, AI can help make African agriculture more productive, more sustainable, and more profitable for everyone involved.`,
    publishDate: '2024-12-15T00:00:00Z',
    category: 'Agriculture',
    tags: ['AI', 'Agriculture', 'Africa', 'Innovation', 'Technology'],
    image: '/api/placeholder/800/400',
    readingTime: 8,
    slug: 'ai-powered-agricultural-solutions-africa',
    featured: true
  },
  {
    id: '2',
    title: 'Building AI Talent in Africa: Why Education Matters More Than Ever',
    excerpt: 'How education is the key to unlocking Africa\'s AI potential and creating a generation of builders, thinkers, and leaders.',
    content: `
Artificial Intelligence is changing the world. It's already helping in farming, healthcare, banking, and even in how we teach and learn. But for Africa to be part of this change — not just using AI, but building it — we need something simple but powerful: **education**.

We have the talent. We have the ideas. What we need now is the training, the support, and the belief that **Africans can build world-class AI too**.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Why We're Still Behind</h2>

Right now, many schools in Africa don't teach AI or machine learning. Those that do often don't have the tools, the teachers, or the updated material. Many students want to learn, but can't afford laptops, internet, or online courses. Some of our brightest young people leave for other countries. Others give up.

This isn't because we're not smart. It's because the system isn't ready for us yet.

But we can change that. And in many places — we already are.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Great Things Are Already Happening</h2>

In Rwanda, there's a university called **CMU‑Africa**, part of Carnegie Mellon University. They offer a Master's in Artificial Intelligence (MSEAI), and it's training young Africans to become AI engineers, researchers, and leaders. It's backed by the **Mastercard Foundation**, which also gives scholarships to help students who can't afford tuition.

At CMU‑Africa, students are working on real problems — using AI to improve health systems, education, and business. And it's not just in Rwanda. They work with researchers and universities in other African countries too, like Morocco, South Africa, and Botswana.

I was really inspired by students like **Clemence Ingabire**, who wants to use AI to help solve health challenges in Rwanda. Her story shows what's possible when we give young people access to the right programs and support.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Other Great Places Doing the Work</h2>

There's also **AIMS** — the African Institute for Mathematical Sciences. They've trained over 2,000 students and now run the **AMMI program**, which focuses on AI and machine learning. It's supported by Google AI and brings some of the world's best researchers to teach in Africa.

And then we have **ALX**, **Andela**, and **Moringa School**. These places are not traditional universities. They are training young people in software development, data science, and AI in just a few months — and helping them get jobs with local and international companies.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Learning Is Going Online and Into Communities</h2>

Not everyone has access to a university. But many are learning online. Platforms like **Coursera**, **edX**, **DataCamp**, and **Google AI** offer great courses. Even with a slow connection or a basic phone, people are teaching themselves how to code, how to analyze data, and how to build AI systems.

In cities and towns, we see things like **AI Saturdays** — where learners meet every weekend to study together. There are also groups like **Women in AI** that help more girls and women enter the tech world. These spaces are welcoming, local, and full of energy.

You don't need to be rich or connected to learn. You just need access — and community.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">We Still Have Work to Do</h2>

Of course, challenges remain.

We still need better infrastructure — internet, electricity, and access to computers. We still need more teachers and updated curriculums. We need scholarships and support, especially for girls and students in rural areas.

Governments are starting to help. Countries like Kenya, Rwanda, and South Africa have national AI strategies. That's a good start. But policies alone are not enough. **We need action** — in schools, communities, and companies.

Tech companies like Google, Microsoft, and IBM are also investing in Africa. They've opened research labs, supported training programs, and partnered with local institutions. But we want more than investment. **We want real collaboration** — partnerships where Africans lead, build, and own the future of AI.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">This Is Not Just About Jobs — It's About Ownership</h2>

We are not just training people to work for others. We are training people to build **African solutions for African problems**. AI can help us translate our languages, improve healthcare in rural areas, manage traffic in big cities, and so much more.

Look at people like:

• **Joy Buolamwini**, fighting bias in facial recognition.
• **Tejumade Afonja**, who started AI Saturdays in Nigeria.
• **Moustapha Cissé**, who leads AI research at Google in West Africa.

These are Africans leading in AI — and showing us what's possible.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Final Thoughts: The Future Starts with Us</h2>

Building AI talent in Africa starts with one thing: **believing in our people**. It means giving young people the tools to learn, the chance to build, and the support to grow.

AI is not just about machines or code. It's about people. People who are curious, creative, and committed to solving problems.

Africa is full of those people.

If we invest in education — in programs like CMU‑Africa, AIMS, ALX, and in online and local learning spaces — we will create a generation of builders, thinkers, and leaders.

The future of AI in Africa won't come from outside.
It will come from **our own classrooms**, our own communities, our own stories.

And I believe we're just getting started.
    `,
    publishDate: '2024-12-10T00:00:00Z',
    category: 'Education',
    tags: ['AI', 'Education', 'Talent Development', 'Skills', 'Africa'],
    image: '/api/placeholder/800/400',
    readingTime: 10,
    slug: 'building-ai-talent-africa-education',
    featured: true
  },
  {
    id: '3',
    title: 'Introduction to LangGraph',
    excerpt: 'A comprehensive guide to building stateful, multi-actor applications with LangGraph, the framework for creating complex AI workflows.',
    content: `
<h2 class="text-2xl font-bold text-white mb-4 mt-8">What is LangGraph?</h2>

LangGraph is a library for building stateful, multi-actor applications with LLMs. It extends the LangChain expression language with the ability to coordinate multiple chains (or actors) across multiple steps of computation in a cyclic manner.

Think of it as a way to create **intelligent workflows** where multiple AI agents can work together, share information, and make decisions based on the current state of the system.

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Key Concepts</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">State Management</h3>

LangGraph introduces the concept of a **state** that gets updated as your application runs. This state can contain any information you need to track across multiple steps.

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from typing import TypedDict, Annotated
from langgraph.graph import StateGraph

class AgentState(TypedDict):
    messages: Annotated[list, "The messages in the conversation"]
    next: Annotated[str, "The next agent to call"]
    current_step: Annotated[int, "The current step number"]

# Create a state graph
workflow = StateGraph(AgentState)
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Nodes and Edges</h3>

Nodes represent individual steps in your workflow, while edges define how data flows between them.

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code># Define nodes (functions that process the state)
def research_agent(state: AgentState) -> AgentState:
    # Research logic here
    return state

def writing_agent(state: AgentState) -> AgentState:
    # Writing logic here
    return state

# Add nodes to the graph
workflow.add_node("research", research_agent)
workflow.add_node("writing", writing_agent)

# Define edges (how nodes connect)
workflow.add_edge("research", "writing")
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Building Your First LangGraph Application</h2>

Let's create a simple example that demonstrates the core concepts:

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>import os
from typing import TypedDict, Annotated
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, END
from langgraph.prebuilt import ToolExecutor
from langchain_core.tools import tool

# Define the state
class AgentState(TypedDict):
    messages: Annotated[list, "The messages in the conversation"]
    next: Annotated[str, "The next agent to call"]

# Create tools
@tool
def search_web(query: str) -> str:
    """Search the web for current information."""
    return f"Search results for: {query}"

@tool
def calculate(expression: str) -> str:
    """Calculate a mathematical expression."""
    return f"Result: {eval(expression)}"

# Initialize the model
llm = ChatOpenAI(model="gpt-3.5-turbo")

# Define the agent function
def agent(state: AgentState) -> AgentState:
    messages = state["messages"]
    
    # Get the last message
    last_message = messages[-1]
    
    # Generate response
    response = llm.invoke(messages)
    
    # Add response to messages
    messages.append(response)
    
    return {"messages": messages, "next": "continue"}

# Create the graph
workflow = StateGraph(AgentState)

# Add the agent node
workflow.add_node("agent", agent)

# Set the entry point
workflow.set_entry_point("agent")

# Add conditional edge
def should_continue(state: AgentState) -> str:
    # Continue if the last message is not a goodbye
    last_message = state["messages"][-1].content
    if "goodbye" in last_message.lower():
        return END
    return "agent"

workflow.add_conditional_edges("agent", should_continue)

# Compile the graph
app = workflow.compile()

# Run the application
config = {"configurable": {"thread_id": "1"}}
for event in app.stream({"messages": [{"role": "user", "content": "Hello!"}]}, config):
    print(event)
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Advanced Features</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Multi-Agent Systems</h3>

LangGraph excels at creating systems where multiple specialized agents work together:

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>def research_agent(state: AgentState) -> AgentState:
    """Agent specialized in research tasks."""
    # Research logic
    return state

def writing_agent(state: AgentState) -> AgentState:
    """Agent specialized in writing tasks."""
    # Writing logic
    return state

def review_agent(state: AgentState) -> AgentState:
    """Agent specialized in review tasks."""
    # Review logic
    return state

# Create a multi-agent workflow
workflow = StateGraph(AgentState)

workflow.add_node("research", research_agent)
workflow.add_node("writing", writing_agent)
workflow.add_node("review", review_agent)

# Define the flow
workflow.add_edge("research", "writing")
workflow.add_edge("writing", "review")
workflow.add_edge("review", END)
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Conditional Logic</h3>

You can add conditional logic to control the flow of your application:

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>def router(state: AgentState) -> str:
    """Route to the appropriate agent based on the task."""
    last_message = state["messages"][-1].content.lower()
    
    if "research" in last_message:
        return "research_agent"
    elif "write" in last_message:
        return "writing_agent"
    elif "review" in last_message:
        return "review_agent"
    else:
        return "general_agent"

# Add conditional routing
workflow.add_conditional_edges("router", router)
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Best Practices</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. State Design</h3>

• **Keep it simple**: Only include data that needs to be shared between nodes
• **Use TypedDict**: Provides type safety and better IDE support
• **Document fields**: Use Annotated to provide descriptions

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Error Handling</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>def safe_agent(state: AgentState) -> AgentState:
    try:
        # Your agent logic here
        return state
    except Exception as e:
        # Handle errors gracefully
        error_message = {"role": "system", "content": f"Error: {str(e)}"}
        state["messages"].append(error_message)
        return state
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">3. Testing</h3>

• **Unit test nodes**: Test individual nodes in isolation
• **Integration test workflows**: Test the entire graph
• **Mock external services**: Use mocks for APIs and databases

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Real-World Applications</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Content Creation Pipeline</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code># Content creation workflow
workflow = StateGraph(ContentState)

workflow.add_node("research", research_topic)
workflow.add_node("outline", create_outline)
workflow.add_node("write", write_content)
workflow.add_node("edit", edit_content)
workflow.add_node("publish", publish_content)

# Define the flow
workflow.add_edge("research", "outline")
workflow.add_edge("outline", "write")
workflow.add_edge("write", "edit")
workflow.add_edge("edit", "publish")
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Customer Support System</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code># Customer support workflow
workflow = StateGraph(SupportState)

workflow.add_node("classify", classify_ticket)
workflow.add_node("research", research_solution)
workflow.add_node("respond", generate_response)
workflow.add_node("escalate", escalate_to_human)

# Conditional routing based on ticket complexity
def route_ticket(state: SupportState) -> str:
    complexity = state["ticket_complexity"]
    if complexity == "simple":
        return "respond"
    elif complexity == "complex":
        return "research"
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

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Environment Setup</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>export OPENAI_API_KEY="your-api-key-here"
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>

LangGraph is a powerful framework for building complex, stateful AI applications. By understanding the core concepts of state management, nodes, and edges, you can create sophisticated workflows that coordinate multiple AI agents.

The key to success with LangGraph is:
• **Start simple**: Begin with basic workflows and gradually add complexity
• **Design good state**: Think carefully about what data needs to be shared
• **Test thoroughly**: Ensure your workflows work as expected
• **Monitor performance**: Keep track of how your applications perform

Whether you're building content creation pipelines, customer support systems, or research assistants, LangGraph provides the tools you need to create intelligent, multi-step AI applications.

Ready to start building? Check out the official documentation and join the LangGraph community to learn from others and share your experiences!
    `,
    publishDate: '2024-12-05T00:00:00Z',
    category: 'AI Development',
    tags: ['LangGraph', 'LangChain', 'AI', 'Workflows', 'Multi-Agent Systems'],
    image: '/api/placeholder/800/400',
    readingTime: 15,
    slug: 'introduction-to-langgraph'
  },
  {
    id: '4',
    title: 'LangChain & Vector Databases in Production',
    excerpt: 'A deep dive into building production-ready applications with LangChain and vector databases for efficient information retrieval and AI-powered search.',
    content: `
<h2 class="text-2xl font-bold text-white mb-4 mt-8">Introduction to Vector Databases</h2>

Vector databases are specialized databases designed to store and retrieve high-dimensional vector embeddings. They're essential for building AI applications that need to understand semantic relationships between data.

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">Why Vector Databases?</h3>

Traditional databases excel at exact matches, but AI applications often need to find **semantically similar** content. Vector databases solve this by:

• **Semantic Search**: Find content based on meaning, not just keywords
• **Similarity Matching**: Identify related documents, images, or concepts
• **Recommendation Systems**: Suggest relevant items based on user preferences
• **Question Answering**: Retrieve contextually relevant information

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Popular Vector Databases</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Pinecone</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>import pinecone
from langchain_pinecone import PineconeVectorStore
from langchain_openai import OpenAIEmbeddings

# Initialize Pinecone
pinecone.init(api_key="your-api-key", environment="your-environment")

# Create embeddings
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

# Initialize Weaviate client
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

# Persist the database
vectorstore.persist()

# Load existing database
vectorstore = Chroma(
    persist_directory="./chroma_db",
    embedding_function=embeddings
)
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Building a Production RAG System</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Document Processing Pipeline</h3>

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
        
        # Split documents
        splits = self.text_splitter.split_documents(documents)
        
        # Add to vector store
        self.vectorstore.add_documents(splits)
        
        return len(splits)
    
    def search_documents(self, query: str, k: int = 5):
        """Search for relevant documents."""
        return self.vectorstore.similarity_search(query, k=k)
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Advanced Retrieval Strategies</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import LLMChainExtractor
from langchain.retrievers import EnsembleRetriever
from langchain.retrievers import BM25Retriever

class AdvancedRetriever:
    def __init__(self, vectorstore):
        self.vectorstore = vectorstore
        
        # Create different retrievers
        self.vector_retriever = vectorstore.as_retriever(
            search_type="similarity",
            search_kwargs={"k": 10}
        )
        
        self.mmr_retriever = vectorstore.as_retriever(
            search_type="mmr",
            search_kwargs={"k": 10, "fetch_k": 20}
        )
        
        # Create ensemble retriever
        self.ensemble_retriever = EnsembleRetriever(
            retrievers=[self.vector_retriever, self.mmr_retriever],
            weights=[0.7, 0.3]
        )
        
        # Create contextual compression
        llm = ChatOpenAI(temperature=0)
        compressor = LLMChainExtractor.from_llm(llm)
        self.compression_retriever = ContextualCompressionRetriever(
            base_retriever=self.ensemble_retriever,
            base_compressor=compressor
        )
    
    def retrieve(self, query: str, use_compression: bool = True):
        """Retrieve documents using advanced strategies."""
        if use_compression:
            return self.compression_retriever.get_relevant_documents(query)
        else:
            return self.ensemble_retriever.get_relevant_documents(query)
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Production Considerations</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Performance Optimization</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>import asyncio
from concurrent.futures import ThreadPoolExecutor
from typing import List

class OptimizedVectorStore:
    def __init__(self, vectorstore):
        self.vectorstore = vectorstore
        self.executor = ThreadPoolExecutor(max_workers=4)
    
    async def batch_search(self, queries: List[str]):
        """Perform batch search operations."""
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
    
    def precompute_embeddings(self, texts: List[str]):
        """Precompute embeddings for better performance."""
        embeddings = OpenAIEmbeddings()
        return embeddings.embed_documents(texts)
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Caching Strategies</h3>

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
        """Generate cache key for query."""
        return hashlib.md5(query.encode()).hexdigest()
    
    @lru_cache(maxsize=1000)
    def search_with_cache(self, query: str, k: int = 5):
        """Search with Redis caching."""
        cache_key = f"search:{self._get_cache_key(query)}:{k}"
        
        # Check cache first
        cached_result = self.redis_client.get(cache_key)
        if cached_result:
            return json.loads(cached_result)
        
        # Perform search
        results = self.vectorstore.similarity_search(query, k=k)
        
        # Cache results (expire in 1 hour)
        self.redis_client.setex(
            cache_key,
            3600,
            json.dumps([doc.dict() for doc in results])
        )
        
        return results
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">3. Monitoring and Logging</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>import logging
import time
from typing import Dict, Any

class MonitoredVectorStore:
    def __init__(self, vectorstore):
        self.vectorstore = vectorstore
        self.logger = logging.getLogger(__name__)
    
    def search_with_monitoring(self, query: str, k: int = 5) -> Dict[str, Any]:
        """Search with performance monitoring."""
        start_time = time.time()
        
        try:
            results = self.vectorstore.similarity_search(query, k=k)
            
            # Log metrics
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

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Real-World Applications</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Document Q&A System</h3>

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
        """Ask a question and return sources."""
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

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Semantic Search API</h3>

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
async def semantic_search(request: SearchRequest):
    try:
        # Perform search
        docs = vectorstore.similarity_search(request.query, k=request.k)
        
        # Format results
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

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Best Practices</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Data Management</h3>

• **Chunking Strategy**: Choose appropriate chunk sizes based on your use case
• **Metadata**: Include relevant metadata for filtering and organization
• **Versioning**: Implement version control for your vector database
• **Backup**: Regular backups of your vector database

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Security</h3>

• **Access Control**: Implement proper authentication and authorization
• **Data Encryption**: Encrypt sensitive data at rest and in transit
• **API Security**: Use API keys and rate limiting
• **Audit Logging**: Log all access and modifications

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">3. Scalability</h3>

• **Horizontal Scaling**: Use distributed vector databases
• **Load Balancing**: Distribute queries across multiple instances
• **Caching**: Implement multi-level caching strategies
• **Monitoring**: Track performance metrics and resource usage

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>

Vector databases are essential for building production-ready AI applications. By combining LangChain with vector databases like Pinecone, Weaviate, or Chroma, you can create powerful retrieval-augmented generation (RAG) systems.

Key takeaways:
• **Choose the right vector database** for your use case and scale
• **Implement proper chunking strategies** for optimal retrieval
• **Use advanced retrieval techniques** like MMR and ensemble methods
• **Monitor and optimize performance** for production workloads
• **Implement proper security and backup** strategies

The combination of LangChain and vector databases opens up endless possibilities for building intelligent applications that can understand and retrieve information semantically. Start with simple implementations and gradually add complexity as your needs grow.
    `,
    publishDate: '2024-11-30T00:00:00Z',
    category: 'AI Development',
    tags: ['LangChain', 'Vector Databases', 'RAG', 'AI', 'Production'],
    image: '/api/placeholder/800/400',
    readingTime: 18,
    slug: 'langchain-vector-databases-production'
  },
  {
    id: '5',
    title: 'Building Ambient Agents with LangGraph',
    excerpt: 'Learn how to create intelligent ambient agents that work seamlessly in the background, monitoring and responding to events in real-time.',
    content: `
<h2 class="text-2xl font-bold text-white mb-4 mt-8">What are Ambient Agents?</h2>

Ambient agents are AI systems that operate continuously in the background, monitoring their environment and taking actions when specific conditions are met. Unlike traditional chatbots that require explicit user interaction, ambient agents are **always on** and **contextually aware**.

Think of them as intelligent assistants that:
• **Monitor continuously** without being intrusive
• **Act proactively** based on context and events
• **Learn from patterns** to improve their responses
• **Integrate seamlessly** with existing systems

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Core Components of Ambient Agents</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Event Monitoring</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from typing import Dict, Any, List
from datetime import datetime
import asyncio

class EventMonitor:
    def __init__(self):
        self.event_handlers = {}
        self.running = False
    
    def register_handler(self, event_type: str, handler):
        """Register a handler for a specific event type."""
        if event_type not in self.event_handlers:
            self.event_handlers[event_type] = []
        self.event_handlers[event_type].append(handler)
    
    async def emit_event(self, event_type: str, data: Dict[str, Any]):
        """Emit an event to all registered handlers."""
        if event_type in self.event_handlers:
            for handler in self.event_handlers[event_type]:
                try:
                    await handler(data)
                except Exception as e:
                    print(f"Error in event handler: {e}")
    
    async def start_monitoring(self):
        """Start the event monitoring loop."""
        self.running = True
        while self.running:
            # Monitor for events (implement your specific monitoring logic)
            await self.check_for_events()
            await asyncio.sleep(1)  # Check every second
    
    async def check_for_events(self):
        """Override this method to implement specific event detection."""
        pass
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. State Management</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from typing import TypedDict, Annotated
from langgraph.graph import StateGraph
import json

class AmbientState(TypedDict):
    current_context: Annotated[Dict[str, Any], "Current environmental context"]
    user_preferences: Annotated[Dict[str, Any], "User preferences and settings"]
    recent_events: Annotated[List[Dict[str, Any]], "Recent events that occurred"]
    agent_memory: Annotated[Dict[str, Any], "Agent's memory and learned patterns"]
    pending_actions: Annotated[List[Dict[str, Any]], "Actions waiting to be executed"]

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
        """Update the current environmental context."""
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
        """Add an action to the pending actions list."""
        self.state["pending_actions"].append(action)
    
    def get_state(self) -> AmbientState:
        """Get the current state."""
        return self.state
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Building the Ambient Agent with LangGraph</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Agent Architecture</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>from langgraph.graph import StateGraph, END
from langchain_openai import ChatOpenAI
from typing import Dict, Any

class AmbientAgent:
    def __init__(self):
        self.llm = ChatOpenAI(temperature=0.1)
        self.state_manager = AmbientStateManager()
        self.event_monitor = EventMonitor()
        self.workflow = self._create_workflow()
    
    def _create_workflow(self) -> StateGraph:
        """Create the LangGraph workflow for the ambient agent."""
        workflow = StateGraph(AmbientState)
        
        # Add nodes
        workflow.add_node("analyze_context", self._analyze_context)
        workflow.add_node("decide_action", self._decide_action)
        workflow.add_node("execute_action", self._execute_action)
        workflow.add_node("update_memory", self._update_memory)
        
        # Define the flow
        workflow.add_edge("analyze_context", "decide_action")
        workflow.add_edge("decide_action", "execute_action")
        workflow.add_edge("execute_action", "update_memory")
        workflow.add_edge("update_memory", END)
        
        return workflow.compile()
    
    async def _analyze_context(self, state: AmbientState) -> AmbientState:
        """Analyze the current context and recent events."""
        context = state["current_context"]
        recent_events = state["recent_events"]
        
        # Create a prompt for context analysis
        prompt = f"""
        Analyze the current context and recent events:
        
        Current Context: {json.dumps(context, indent=2)}
        Recent Events: {json.dumps(recent_events[-5:], indent=2)}
        
        What patterns do you observe? What might be important for the user?
        """
        
        response = self.llm.invoke(prompt)
        
        # Update state with analysis
        state["agent_memory"]["last_analysis"] = response.content
        
        return state
    
    async def _decide_action(self, state: AmbientState) -> AmbientState:
        """Decide what action to take based on the analysis."""
        analysis = state["agent_memory"].get("last_analysis", "")
        context = state["current_context"]
        
        prompt = f"""
        Based on this analysis: {analysis}
        
        Current context: {json.dumps(context, indent=2)}
        
        Should I take any action? If yes, what action should I take?
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
            print("Failed to parse action decision")
        
        return state
    
    async def _execute_action(self, state: AmbientState) -> AmbientState:
        """Execute pending actions."""
        for action in state["pending_actions"]:
            await self._perform_action(action)
        
        # Clear pending actions
        state["pending_actions"] = []
        
        return state
    
    async def _update_memory(self, state: AmbientState) -> AmbientState:
        """Update the agent's memory with new learnings."""
        # Store important patterns and learnings
        state["agent_memory"]["last_update"] = datetime.now().isoformat()
        
        return state
    
    async def _perform_action(self, action: Dict[str, Any]):
        """Perform a specific action."""
        action_type = action.get("action")
        
        if action_type == "send_notification":
            await self._send_notification(action.get("parameters", {}))
        elif action_type == "adjust_environment":
            await self._adjust_environment(action.get("parameters", {}))
        elif action_type == "log_event":
            await self._log_event(action.get("parameters", {}))
    
    async def _send_notification(self, params: Dict[str, Any]):
        """Send a notification to the user."""
        message = params.get("message", "Ambient agent notification")
        # Implement your notification logic here
        print(f"Notification: {message}")
    
    async def _adjust_environment(self, params: Dict[str, Any]):
        """Adjust the environment based on parameters."""
        # Implement your environment adjustment logic here
        print(f"Adjusting environment: {params}")
    
    async def _log_event(self, params: Dict[str, Any]):
        """Log an event for future reference."""
        # Implement your logging logic here
        print(f"Logging event: {params}")
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Event-Driven Architecture</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>class AmbientAgentWithEvents(AmbientAgent):
    def __init__(self):
        super().__init__()
        self._setup_event_handlers()
    
    def _setup_event_handlers(self):
        """Setup event handlers for different types of events."""
        self.event_monitor.register_handler("user_activity", self._handle_user_activity)
        self.event_monitor.register_handler("environment_change", self._handle_environment_change)
        self.event_monitor.register_handler("time_event", self._handle_time_event)
        self.event_monitor.register_handler("system_alert", self._handle_system_alert)
    
    async def _handle_user_activity(self, data: Dict[str, Any]):
        """Handle user activity events."""
        self.state_manager.update_context({
            "last_user_activity": data.get("activity_type"),
            "user_location": data.get("location"),
            "user_mood": data.get("mood", "neutral")
        })
        
        self.state_manager.add_event({
            "type": "user_activity",
            "data": data
        })
        
        # Trigger workflow
        await self._trigger_workflow()
    
    async def _handle_environment_change(self, data: Dict[str, Any]):
        """Handle environment change events."""
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
        """Handle system alert events."""
        self.state_manager.add_event({
            "type": "system_alert",
            "data": data,
            "priority": "high"
        })
        
        # High priority events trigger immediate workflow
        await self._trigger_workflow()
    
    async def _trigger_workflow(self):
        """Trigger the LangGraph workflow."""
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
        
        # Start event monitoring in background
        asyncio.create_task(self.event_monitor.start_monitoring())
        
        # Start periodic context updates
        asyncio.create_task(self._periodic_context_update())
        
        print("Ambient agent started successfully!")
    
    async def _periodic_context_update(self):
        """Periodically update context even without events."""
        while True:
            await asyncio.sleep(60)  # Update every minute
            
            # Update time-based context
            now = datetime.now()
            self.state_manager.update_context({
                "current_time": now.isoformat(),
                "day_of_week": now.strftime("%A"),
                "is_work_hours": 9 <= now.hour <= 17
            })
            
            # Trigger workflow for periodic updates
            await self._trigger_workflow()
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Real-World Applications</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Smart Home Assistant</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>class SmartHomeAgent(AmbientAgentWithEvents):
    def __init__(self):
        super().__init__()
        self._setup_smart_home_handlers()
    
    def _setup_smart_home_handlers(self):
        """Setup handlers specific to smart home functionality."""
        self.event_monitor.register_handler("motion_detected", self._handle_motion)
        self.event_monitor.register_handler("door_opened", self._handle_door)
        self.event_monitor.register_handler("temperature_change", self._handle_temperature)
        self.event_monitor.register_handler("light_level_change", self._handle_lighting)
    
    async def _handle_motion(self, data: Dict[str, Any]):
        """Handle motion detection events."""
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
        """Handle door opening/closing events."""
        door_id = data.get("door_id")
        action = data.get("action")  # "opened" or "closed"
        
        self.state_manager.add_event({
            "type": "door_event",
            "door_id": door_id,
            "action": action,
            "time": datetime.now().isoformat()
        })
        
        await self._trigger_workflow()
    
    async def _perform_action(self, action: Dict[str, Any]):
        """Override to handle smart home specific actions."""
        action_type = action.get("action")
        
        if action_type == "adjust_lighting":
            await self._adjust_lighting(action.get("parameters", {}))
        elif action_type == "adjust_temperature":
            await self._adjust_temperature(action.get("parameters", {}))
        elif action_type == "send_security_alert":
            await self._send_security_alert(action.get("parameters", {}))
        else:
            await super()._perform_action(action)
    
    async def _adjust_lighting(self, params: Dict[str, Any]):
        """Adjust home lighting based on context."""
        brightness = params.get("brightness", 50)
        location = params.get("location", "living_room")
        
        # Implement your smart lighting control here
        print(f"Adjusting lighting in {location} to {brightness}%")
    
    async def _adjust_temperature(self, params: Dict[str, Any]):
        """Adjust home temperature based on context."""
        temperature = params.get("temperature", 22)
        
        # Implement your smart thermostat control here
        print(f"Setting temperature to {temperature}°C")
    
    async def _send_security_alert(self, params: Dict[str, Any]):
        """Send security alerts."""
        alert_type = params.get("alert_type", "general")
        location = params.get("location", "unknown")
        
        # Implement your security alert system here
        print(f"Security alert: {alert_type} at {location}")
</code></pre>
</div>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Productivity Assistant</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code>class ProductivityAgent(AmbientAgentWithEvents):
    def __init__(self):
        super().__init__()
        self._setup_productivity_handlers()
    
    def _setup_productivity_handlers(self):
        """Setup handlers for productivity monitoring."""
        self.event_monitor.register_handler("app_usage", self._handle_app_usage)
        self.event_monitor.register_handler("calendar_event", self._handle_calendar)
        self.event_monitor.register_handler("email_received", self._handle_email)
        self.event_monitor.register_handler("focus_session", self._handle_focus)
    
    async def _handle_app_usage(self, data: Dict[str, Any]):
        """Handle application usage events."""
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
    
    async def _perform_action(self, action: Dict[str, Any]):
        """Override to handle productivity specific actions."""
        action_type = action.get("action")
        
        if action_type == "send_productivity_reminder":
            await self._send_productivity_reminder(action.get("parameters", {}))
        elif action_type == "adjust_notifications":
            await self._adjust_notifications(action.get("parameters", {}))
        elif action_type == "suggest_break":
            await self._suggest_break(action.get("parameters", {}))
        else:
            await super()._perform_action(action)
    
    async def _send_productivity_reminder(self, params: Dict[str, Any]):
        """Send productivity reminders."""
        message = params.get("message", "Time to focus!")
        reminder_type = params.get("type", "general")
        
        # Implement your notification system here
        print(f"Productivity reminder ({reminder_type}): {message}")
    
    async def _adjust_notifications(self, params: Dict[str, Any]):
        """Adjust notification settings based on context."""
        enable_notifications = params.get("enable", True)
        notification_level = params.get("level", "normal")
        
        # Implement your notification control here
        print(f"Adjusting notifications: {enable_notifications}, level: {notification_level}")
    
    async def _suggest_break(self, params: Dict[str, Any]):
        """Suggest taking a break."""
        break_duration = params.get("duration", 5)
        reason = params.get("reason", "You've been working for a while")
        
        # Implement your break suggestion system here
        print(f"Break suggestion: {reason}. Take a {break_duration}-minute break.")
</code></pre>
</div>

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Best Practices</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Privacy and Security</h3>

• **Data Minimization**: Only collect and store necessary data
• **Local Processing**: Process sensitive data locally when possible
• **Encryption**: Encrypt data at rest and in transit
• **User Control**: Give users control over what data is collected
• **Transparency**: Be clear about what the agent is doing

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">2. Performance Optimization</h3>

• **Event Filtering**: Only process relevant events
• **Batch Processing**: Batch similar events together
• **Caching**: Cache frequently accessed data
• **Async Operations**: Use async/await for non-blocking operations
• **Resource Management**: Monitor and manage resource usage

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">3. User Experience</h3>

• **Unobtrusive**: Don't interrupt the user unnecessarily
• **Contextual**: Provide relevant information at the right time
• **Learnable**: Allow users to teach the agent their preferences
• **Transparent**: Show users what the agent is doing
• **Controllable**: Give users easy ways to control the agent

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Deployment Considerations</h2>

<h3 class="text-xl font-semibold text-emerald-300 mb-3 mt-6">1. Infrastructure</h3>

<div class="bg-gray-800 p-4 rounded-lg my-4">
<pre class="text-emerald-300"><code># Docker configuration for ambient agent
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

# Metrics
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

<h2 class="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>

Building ambient agents with LangGraph opens up exciting possibilities for creating intelligent, context-aware systems that work seamlessly in the background. By combining event-driven architecture with LangGraph's workflow capabilities, you can create agents that:

• **Monitor continuously** without being intrusive
• **Learn and adapt** to user preferences and patterns
• **Take proactive actions** based on context
• **Integrate seamlessly** with existing systems

The key to success is:
• **Start simple**: Begin with basic event monitoring and gradually add complexity
• **Focus on user experience**: Ensure the agent is helpful, not annoying
• **Respect privacy**: Be transparent about data collection and usage
• **Test thoroughly**: Monitor performance and user feedback
• **Iterate continuously**: Improve the agent based on real-world usage

Ambient agents represent the future of AI assistants—intelligent, contextual, and always ready to help when needed. With LangGraph, you have the tools to build these sophisticated systems that truly understand and adapt to their environment.
    `,
    publishDate: '2024-11-25T00:00:00Z',
    category: 'AI Development',
    tags: ['LangGraph', 'Ambient Agents', 'AI', 'Event-Driven', 'Automation'],
    image: '/api/placeholder/800/400',
    readingTime: 20,
    slug: 'building-ambient-agents-langgraph'
  }
];

export const getBlogPosts = () => blogPosts;

export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);

export const getPostBySlug = (slug: string) => blogPosts.find(post => post.slug === slug);

export const getPostsByCategory = (category: string) => blogPosts.filter(post => post.category === category);

export const getPostsByTag = (tag: string) => blogPosts.filter(post => post.tags.includes(tag)); 