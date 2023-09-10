"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"

const PromptCard = ({prompt, handleTagClick, handleDelete, handleEdit}) => {  
  const [copied, setCopied] = useState(false)
  const {data: session} = useSession()
  const router = useRouter()
  const pathName = usePathname()

  const handleCopy = () => {
    setCopied(prompt.prompt)
    navigator.clipboard.writeText(prompt.prompt)
    setTimeout(() => {
        setCopied("")
    }, 2500);
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Link href={session?.user.id === prompt.creator._id ? "/profile" : `/profile/${prompt.creator._id}`}>
            <Image src={prompt.creator.image} alt={"user_image"} height={40} width={40} className="rounded-full object-contain"/>
          </Link>
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">{prompt.creator.username}</h3>
            <p className="font-inter text-sm text-gray-500">{prompt.creator.email}</p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image alt="imagee" width={15} height={15} src={copied === prompt.prompt ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}/>
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{prompt.prompt}</p>
      <p className="font-inter text-sm blue_gradient cursor-pointer" onClick={() => handleTagClick && handleTagClick(prompt.tag)}>{prompt.tag}</p>
      {session?.user.id === prompt.creator._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-5 border-gray-200 border-t pt-3">
          <p onClick={() => handleEdit(prompt)} className="font-inter text-sm green_gradient cursor-pointer">Edit</p>
          <p onClick={() => handleDelete(prompt)} className="font-inter text-sm green_gradient cursor-pointer">Delete</p>
        </div>
      )}
    </div>  
  )
}

export default PromptCard
