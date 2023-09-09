"use client"

import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="prompt_layout mt-16">
      {data.map(prompt => <PromptCard key={prompt._id} prompt={prompt} handleTagClick={handleTagClick}/>)}
    </div>  
  )
}

const Feed = () => {
  const [query, setQuery] = useState("")
  const [prompts, setPrompts] = useState([])

  useEffect(() => { 
    const fetchPrompts = async() => {
      const response = await fetch("/api/prompt")
      const data = await response.json()
      setPrompts(data)
    }
    fetchPrompts()
  }, [])

  const handeSearch = (e) => {
    console.log("hey")
  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center" action="">
        <input className="search_input peer" type=" text" placeholder="Search prompts" value={query} onChange={handeSearch}/>
      </form>
      <PromptCardList data={prompts} handleTagClick={() => {}}/>
    </section>
  )
}

export default Feed
