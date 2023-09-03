'use client'

import { useEffect, useState } from "react"

export default function PrivacyAlert() {
  const [confirmation, setConfirmation] = useState(false)

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('confirmation', null)
    setConfirmation(storedCookieConsent)

    if (storedCookieConsent == null) {
      switchScrollbar('hidden')
    }
  })
  
  const getLocalStorage = (key: string, defaultValue: any) => {
    const storageValue = localStorage.getItem(key)

    return (storageValue !== null && storageValue !== 'undefined')
      ? JSON.parse(storageValue)
      : defaultValue
  }

  const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const switchScrollbar = (value: string) => {
    document.getElementsByTagName('html')[0].style.overflow = value
  }

  const accept = () => {
    setConfirmation(true)
    setLocalStorage('confirmation', true)
    switchScrollbar('auto')
  }

  return (
    <div className={`absolute w-full h-screen bg-gray-800/60 z-[99999] ${ confirmation != null ? 'hidden' : 'inline' }`}>
      <div className="absolute bottom-0 bg-white w-full opacity-100 z-[999999]">
        <div className="max-w-screen-xl mx-auto pl-10 pr-10 py-24">
          <p className="sm:text-xl md:text-2xl lg:text-3xl font-bold pb-6">
            Privacy policy
          </p>
          <div className="sm:block md:block lg:flex items-center">
            <div>
              <p className="text-sm mb-6 lg:mb-0 lg:text-base tracking-wide mr-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div>
              <button onClick={() => accept()} className="w-full text-center md:w-fit md:mx-auto py-2 uppercase lg:py-4 rounded-md pl-16 pr-16 text-sm font-semibold text-black shadow-lg shadow-blue-500/50 cursor-default hover:text-white hover:tracking-wider hover:bg-blue-600 ease-in duration-75">
                accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}