import Image from "next/image"

import navigation from '../navigation.json'

import { MobileMenuProps } from "@/utils/types"


export default function MobileMenu({menuState, toggleMenu}: MobileMenuProps) {

  const closeMenu = (value?: string) => {
    toggleMenu(value)
  }

  return (
    <div className={`absolute top-0 bg-white w-full h-screen z-50 px-8 cursor-default ${ menuState ? 'inline' : 'hidden' }`}>
      <div className="flex h-16 items-center justify-between">
        <p className="text-xl tracking-wide font-semibold">
          Menu
        </p>
        <button onClick={() => closeMenu()}>
          <Image src="/icons8-close-96.png" alt="close icon" width={34} height={34} />
        </button>
      </div>
      <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-7xl font-black text-gray-100">
          your
        </div>
        <div className="text-7xl font-black text-gray-100">
          sample
        </div>
        <div className="text-7xl font-black text-gray-100">
          text
        </div>
      </div>
      <div className="mt-10">
        <ul className="w-full">
          {navigation.data.map((item) => (
            <li key={item.id} onClick={() => toggleMenu(item.section_id)} className="pb-6">
              <p className="text-xl font-black tracking-wide text-gray-700">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}