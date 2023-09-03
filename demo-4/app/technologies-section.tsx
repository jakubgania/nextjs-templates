import SectionTitleHeader from "./section-title-header"
import DescriptionOfSection from "./description-of-section"
import Image from "next/image"

export default function TechnologiesSection() {
  const technologies = [
    {
      "icon_path": "/amazon-web-services-96.png",
      "label": "AWS"
    },
    {
      "icon_path": "/angularjs-96.png",
      "label": "Angular"
    },
    {
      "icon_path": "/bash-96.png",
      "label": "Bash"
    },
    {
      "icon_path": "/bitbucket-96.png",
      "label": "Bitbucket"
    },
    {
      "icon_path": "/css3-96.png",
      "label": "CSS 3"
    },
    {
      "icon_path": "/docker-96.png",
      "label": "Docker"
    },
    {
      "icon_path": "/flutter-96.png",
      "label": "Flutter"
    },
    {
      "icon_path": "/github-96.png",
      "label": "GitHub"
    },
    {
      "icon_path": "/html-5-96-2.png",
      "label": "HTML 5"
    },
    {
      "icon_path": "/javascript-96.png",
      "label": "JavaScript"
    },
    {
      "icon_path": "/nuxt-jc-96.png",
      "label": "NuxtJS"
    },
    {
      "icon_path": "/python-96.png",
      "label": "Python"
    },
    {
      "icon_path": "/react-native-96.png",
      "label": "React"
    },
    {
      "icon_path": "/tailwindcss-96.png",
      "label": "Tailwind CSS"
    },
    {
      "icon_path": "/typescript-96.png",
      "label": "TypeScript"
    },
    {
      "icon_path": "/vue-js-96.png",
      "label": "VueJS"
    }
  ]

  return (
    <div className="mb-12">
      <SectionTitleHeader title="Technologies and Tools" />
      <DescriptionOfSection description="Technologies and tools that I use in my projects." />
      <div className="flex flex-wrap">
        {technologies.map((item) => (
          <div key={item.label} className="
              flex
              py-1
              sm:py-1.5
              px-2
              sm:px3
              md:px-4
              mr-2
              mb-2 
            bg-slate-900
              rounded-xl
              items-center
              group
              duration-150
            "
          >
            <Image
              src={item.icon_path}
              alt={`Technology icon - ${item.label}`}
              width={40}
              height={40}
              className="
                w-10
                h-10
                sm:w-12
                sm:h-12
                p-1
                group-hover:-rotate-[20deg]
                transition-all
                ease-in-out
                duration-150
              "
            />
            <span className="ml-2 sm:ml-3 md:ml-4 text-gray-200 text-sm tracking-wide font-bold cursor-default">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}