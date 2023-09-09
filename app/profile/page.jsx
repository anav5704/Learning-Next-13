"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import Profile from "@components/Profile"

const MyProfile = () => {
    const [prompts, setPrompts] = useState([])
    const {data: session} = useSession()
    const router = useRouter()

    const handleEdit = () => {
        router.push("")
    }

    const handleDelete = async() => {

    }

    useEffect(() => { 
        const fetchPrompts = async() => {
          const response = await fetch(`/api/users/${session?.user.id}/prompts`)
          const data = await response.json()
          setPrompts(data)
         }
        fetchPrompts()
      }, [])

  return (
    <Profile 
        name="My"
        desc="Welcome to your personalized profile page."
        data={prompts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default MyProfile


