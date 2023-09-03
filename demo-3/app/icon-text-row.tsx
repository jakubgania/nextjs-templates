import Image from "next/image"

import { IconTextRowProps } from "@/utils/types"


export default function IconTextRow(props: IconTextRowProps) {

  const {
    reverse,
    icon,
    iconAlt,
    title,
    descriptionFirst,
    descriptionSecond
  } = props

  return (
    <div className={`flex ${ reverse ? 'flex-row-reverse' : 'flex-row' } mx-8 md:mx-6 lg:mx-4 2xl:my-60 lg:my-40 md:my-32 my-24`}>
      <div className="basis-1/2 flex items-center justify-center">
        <Image src={icon} alt={iconAlt} className="w-12 md:w-16 lg:w-[120px]" />
      </div>
      <article className="basis-1/2">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide">
          {title}
        </h3>
        <p className="text-base md:text-lg tracking-wide mb-5 mt-5">
          {descriptionFirst}
        </p>
        <p className="text-base md:text-lg tracking-wide">
          {descriptionSecond}
        </p>
      </article>
    </div>
  )
}