import { startDB } from "@utils/databse"
import Prompt from "@models/PromptModel"

export const POST = async (req) => {
    const { userId, prompt, tag } = await req.json()

    try {
        // WTF IS THIS BULLSHIT 🤷‍♂️
        await startDB()
        const newPrompt = new Prompt({creator: userId, prompt, tag})    
        await newPrompt.save()
        return new Response(JSON.stringify(newPrompt), {status: 201})
    } catch (error) {
        return new Response("Failed to create new prompt", {status: 500})

    }
}