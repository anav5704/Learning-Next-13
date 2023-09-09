import Link from "next/link"

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full  max-w-full flex-start flex-col">
      <h1 className="head_text text-left"><span className="blue_gradient">{type}</span> post</h1>
      <p className="desc text-left max-w-md">{type} and Share amzing prompts with the world, and let your imagination run wild with any AI-powered platform.</p>
      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
      <label htmlFor="">
        <span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>
        <textarea required className="form_textarea" placeholder="Write your prompt here..." value={post.prompt} onChange={(e) => setPost({...post, prompt: e.target.value})}/>
      </label>
      <label htmlFor="">
        <span className="font-satoshi font-semibold text-base text-gray-700">Tags {" "} <span className="font-normal">#Code, #Food</span></span>
        <input required className="form_input" placeholder="#Tag" value={post.tag} onChange={(e) => setPost({...post, tag: e.target.value})}/>
      </label>
      <div className="flex-end mx-3 mb-5 gap-5">
        <Link href="/" className="text-sm text-gray-500">Cancel</Link>
        <button className="px-5 py-2 text-sm bg-primary-orange rounded-full text-white" disabled={submitting} type="submit" >{ submitting ? `${type}ing...` : type }</button>
      </div> 
      </form>
    </section>
  )
}

export default Form
