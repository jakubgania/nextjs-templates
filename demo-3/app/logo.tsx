import Image from "next/image"

import logo from '../public/logo.png'

export default function Logo() {

  return (
    <Image src={logo} alt="logo" className="w-12 md:w-16 lg:w-[120px]" />
  )
}