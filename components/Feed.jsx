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
  const [searchQuery, setSearchQuery] = useState("")
  const [prompts, setPrompts] = useState([])
  const [filteredPromtps, setFilteredPrompts] = useState([])

  useEffect(() => { 
    const fetchPrompts = async() => {
      const response = await fetch("/api/prompt")
      const data = await response.json()
      setFilteredPrompts(data)
      setPrompts(data)
    }
    fetchPrompts()
  }, [])

  const handeSearch = (e) => {``
    const query = e.target.value
     setSearchQuery(query)
    const filteredPromtps = prompts.filter((prompt) => prompt.prompt.toLowerCase().includes(query.toLocaleLowerCase()) || prompt.tag.toLowerCase().includes(query.toLocaleLowerCase()) || prompt.creator.username.toLowerCase().includes(query.toLocaleLowerCase()))
    setFilteredPrompts(filteredPromtps)
  }
  
  return (
    <section className="feed">
      <div className="relative w-full flex-center">
        <input className="search_input peer" type=" text" placeholder="Search prompts" value={searchQuery} onChange={handeSearch}/>
      </div>
      <PromptCardList data={filteredPromtps} handleTagClick={() => {}}/>
    </section>
  )
}

export default Feed
