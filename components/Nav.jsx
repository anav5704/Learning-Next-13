"use client" // client side rendered

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
 
const Nav = () => {
  const [providers, setProviders] = useState(null)
  const [toggle, setToggle] = useState(false)
  const {data: session} = useSession()

  useEffect(() => {
    const setUpProviders = async() => { 
      const response = await getProviders()
      setProviders(response)
    }
    setUpProviders()
  }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-5">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" alt="Promptopia logo" width={30} height={30} className="object-contain"/>
        <p className="logo_text">Promptopia</p>
      </Link>
      <div className="sm:flex hidden">
        { session?.user ? (
            <div className="flex gap-5">
                <Link href="/create-prompt" className="black_btn">Create Prompt</Link>
                <button type="button" onClick={signOut} className="outline_btn">Log Out</button>
                <Link href="/profile">                                    {/*Make 👇 37 if needed*/}
                <Image src={session?.user.image} alt="Promptopia logo" width={37} height={37} className="rounded-full object-contain"/>
                </Link>
            </div>
        ) : ( 
        <>
          {providers && 
          Object.values(providers).map(provider => <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">Sign In</button>)
          }
        </> 
        )}
      </div>

      <div className="sm:hidden flex relative">
          { session?.user ? (
            <div className="flex" onClick={() => setToggle((prev) => !prev)}>
              <Image src={session?.user.image} alt="Promptopia logo" width={37} height={37} className="rounded-full object-contain"/>
              { toggle && (
                <div className="dropdown">
                  <Link href="/profile" className="dropdown_link" onClick={() => setToggle(false)}>My Profile</Link>
                  <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggle(false)}>Create Prompt</Link>
                  <button className="mt-5 w-full black_btn" type="button" onClick={() => {
                    signOut()
                    setToggle(false)
                    }}>
                      Log Out
                    </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers && 
              Object.values(providers).map(provider => <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">Sign In</button>)
              }
          </> 
          )}
      </div>
    </nav>
  )
}

export default Nav
