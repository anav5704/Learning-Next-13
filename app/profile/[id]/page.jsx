"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter, useParams } from "next/navigation"
import Profile from "@components/Profile"

const UserProfile = () => {
    const [prompts, setPrompts] = useState([])
    const [userName, setUserName] = useState("")
    const {data: session} = useSession()
    const {id} = useParams()
    const router = useRouter()

    const handleEdit = (prompt) => {
        router.push(`/update-prompt?id=${prompt._id}`)
    }

    const handleDelete = async(prompt) => {
      const hasConfirm = confirm("Are you sure you want to delete this prompt?")
      if(hasConfirm){
        try {
            await fetch(`/api/prompt/${prompt._id.toString()}`, {
              method: "DELETE"
            })
            const filteredPrompts = prompts.filter(p => p._id !== prompt._id)
            setPrompts(filteredPrompts)
        } catch (error) {
          console.log(error)
        }
      }
    } 

    useEffect(() => { 
        const fetchPrompts = async() => {
          const response = await fetch(`/api/users/${id}/prompts`)
          const data = await response.json()
          setPrompts(data)
          setUserName(data[0]?.creator.username)
          console.log(data)
         }
        fetchPrompts()
        console.log(id)
      }, [])

  return (
    <Profile 
        name={`${userName}'s`}
        desc={`Welcome to ${userName}'s profile page.`}
        data={prompts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default UserProfile


