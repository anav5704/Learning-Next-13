"use client" // client side rendered

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"

const Nav = () => {
    const user = true
  return (
    <nav className="flex-between w-full mb-16 pt-5">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" alt="Promptopia logo" width={30} height={30} className="object-contain"/>
        <p className="logo_text">Promptopia</p>
      </Link>
      <div className="sm:flex hidden">
        { user ? (
            <div className="flex gap-5">
                <Link href="/create-promts" className="black_btn">Create Prompt</Link>
                <button type="button" onClick={signOut} className="outline_btn">Log Out</button>
                <Link href="/profile">                                    {/*Make 👇 37 if needed*/}
                <Image src="/assets/images/logo.svg" alt="Promptopia logo" width={30} height={30} className="roinded-full object-contain"/>
                </Link>
            </div>
        ) : ( <></> )}
      </div>
    </nav>
  )
}

export default Nav
