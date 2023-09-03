import { GradientProps } from "@/utils/types"


export default function Gradient({gradient, text}: GradientProps) {
  return (
    <div className={`h-[16rem] md:h-[20rem] lg:h-[28rem] flex items-center ${gradient}`}>
      <div className="max-w-screen-2xl mx-auto text-black">
        <span className="2xl:text-7xl xl:text-5xl lg:text-4xl text-3xl md:font-black font-bold tracking-wide">{text}</span>
      </div>
    </div>
  )
}