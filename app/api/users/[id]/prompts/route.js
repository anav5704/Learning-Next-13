import { startDB } from "@utils/databse"
import Prompt from "@models/PromptModel"

export const GET = async (req, {params}) => {
    try {
        // WTF IS THIS BULLSHIT 🤷‍♂️
        await startDB()
        const prompts = await Prompt.find({creator: params.id}).populate("creator")
         return new Response(JSON.stringify(prompts), {status: 200})
    } catch (error) {
        return new Response("Failed to fetch prompts", {status: 500})

    }
}