'use client'

import Image from "next/image"

import Logo from "./logo"
import MobileMenu from "./mobile-menu"
import { useState } from "react"

import navigation from '../navigation.json'

export default function NavigationBar() {
  const [menuState, setMenuState] = useState(false)

  const toggleMenu = (id?: string) => {
    setMenuState(!menuState)
    menuState == true ? 
      document.getElementsByTagName('html')[0].style.overflow = 'auto' :
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'

    if (typeof id !== 'undefined') {
      document.getElementById(id)!.scrollIntoView()
    }
  }

  return (
    <header>
      <nav className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center px-8 2xl:px-0 h-16">
            <div className="basis-1/5">
              <Logo />
            </div>
            <div className="basis-3/5 flex justify-around">
              <ul className="md:flex list-none hidden">
                {navigation.data.map((item) =>(
                  <li key={item.id} className="pr-4 text-sm tracking-wide">
                    <a className="hover:text-gray-700 ease-in duration-100" href={`#${item.section_id}`}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="basis-1/5 flex justify-end">
              <div className="md:flex text-sm hidden">
                <div className="px-1 hover:text-gray-700 ease-in duration-100">
                  EN
                </div>
                <div className="px-1 hover:text-gray-700 ease-in duration-100">
                  DE
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => toggleMenu()}>
                <Image src="/icons8-menu-96.png" alt="close menu icon" width={34} height={34} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu menuState={menuState} toggleMenu={toggleMenu} />
    </header>
  )
}