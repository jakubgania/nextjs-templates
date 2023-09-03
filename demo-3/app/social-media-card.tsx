import Image from "next/image"

import { SocialMediaCardProps } from "@/utils/types"


export default function SocialMediaCard(props: SocialMediaCardProps) {

  const {
    url,
    iconPath,
    iconAlt,
    title
  } = props

  return (
    <a href={url} target="_blank">
      <div className="rounded-2xl bg-slate-50 hover:bg-slate-100 ease-in duration-100 text-center group">
        <div className="py-8">
          <div className="flex justify-center mb-4">
            <Image src={iconPath} alt={iconAlt} width={100} height={100} className="w-16 md:w-20 lg:w-[100px] group-hover:scale-105 group-hover:-rotate-12 ease-in duration-100" />
          </div>
          <span className="text-base md:text-xl font-bold group-hover:tracking-wider ease-in duration-100">
            {title}
          </span>
        </div>
      </div>
    </a>
  )
}