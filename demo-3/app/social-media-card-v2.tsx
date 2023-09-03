import Image from "next/image"

import { SocialMediaCardv2Props } from "@/utils/types"


export default function SocialMediaCardv2(props: SocialMediaCardv2Props) {

  const {
    url,
    iconPath,
    iconAlt,
    title,
    description
  } = props

  return (
    <a href={url} target="_blank" className="py-4 md:py-8 pl-4 md:pl-8 bg-slate-50 rounded-2xl group">
      <div className="flex items-center cursor-default">
        <div className="w-10 md:w-16">
          <Image src={iconPath} alt={iconAlt} width={96} height={96} className="group-hover:-rotate-12 ease-in duration-100" />
        </div>
        <div className="ml-4 md:ml-8">
          <p className="text-base md:text-xl lg:text-2xl font-bold tracking-wide group-hover:pl-1 delay-75 ease-in duration-100">
            {title}    
          </p>
          <p className="tracking-wide group-hover:pl-1 delay-150 ease-in duration-100">
            {description}
          </p>
        </div>
      </div>
    </a>
  )
}