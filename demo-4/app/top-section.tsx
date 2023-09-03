import Image from "next/image"

import ProfileImg from '../public/icons8-metamask-logo-96.png'

export default function TopSection() {
  return (
    <div className="my-16 sm:my-24 md:my-32">
      <div className="flex items-center justify-end">
        <div className="mr-4 sm:mr-8 text-right">
          <span className="text-2xl sm:text-3xl md:text-4xl text-slate-300 font-bold tracking-wide">
            Example Name
          </span>
          <p className="text-sm sm:text-base text-slate-500">
            Software Developer
          </p>
        </div>
        <div>
          <Image
            src={ProfileImg}
            alt="Profile image"
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}