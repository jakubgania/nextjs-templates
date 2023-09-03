import SectionTitleHeader from "./section-title-header"
import DescriptionOfSection from "./description-of-section"
import Image from "next/image"

import WebsiteIcon from '../public/icons8-website-96.png'
import CompareIcon from '../public/compare-git-96.png'

export default function ProjectsSection() {
  const projects = [
    {
      "id": "1",
      "thumbnail": "/amazing-background.webp",
      "name": "Project Name 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "live_link": "https://jakubgania.github.io/one-page-templates/template-2/src/index.html",
      "github_link": "https://github.com/jakubgania/one-page-templates"
    },
    {
      "id": "2",
      "thumbnail": "/amazing-background.webp",
      "name": "Project Name 2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "live_link": "https://jakubgania.github.io/one-page-templates/template-2/src/index.html",
      "github_link": "https://github.com/jakubgania/one-page-templates"
    },
    {
      "id": "3",
      "thumbnail": "/amazing-background.webp",
      "name": "Project Name 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "live_link": "https://jakubgania.github.io/one-page-templates/template-2/src/index.html",
      "github_link": "https://github.com/jakubgania/one-page-templates"
    }
  ]
  
  return (
    <div className="mb-12">
      <SectionTitleHeader title="Projects" />
      <DescriptionOfSection description="Some of my most important open source projects." />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2">
        {projects.map((project) => (
          <div key={project.id} className="bg-slate-900 rounded-xl">
            <div
              style={{ backgroundImage: `url('${project.thumbnail}')`}}
              className="bg-no-repeat bg-cover bg-center rounded-tl-xl rounded-tr-xl relative"
            >
              <div className="aspect-video bg-gradient-to-b from-transparent to-black">
                <div className="absolute bottom-0 left-0">
                  <h3 className="text-xl font-bold text-gray-200 m-2 group-hover:invisible">
                    {project.name}
                  </h3>
                </div>
              </div>
            </div>
            <div className="m-2">
              <div className="mb-4">
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex flex-row">
                <div className="basis-1/2 flex">
                  <a
                    href={project.live_link}
                    target="_blank"
                    className="
                      bg-gray-800
                      w-full
                      flex
                      items-center
                      justify-center
                      text-center
                      py-3
                      rounded-lg
                      mr-1
                      hover:bg-gray-700
                      transition
                      ease-in-out
                      duration-100
                    "
                  >
                    <Image
                      src={WebsiteIcon}
                      alt="Website icon"
                      width={26}
                      height={26}
                      quality={100}
                    />
                    <span className="text-sm font-normal text-gray-200 tracking-wide ml-3">Live</span>
                  </a>
                </div>
                <div className="basis-1/2 flex">
                  <a
                    href={project.github_link}
                    target="_blank"
                    className="
                      bg-gray-800
                      w-full
                      flex
                      items-center
                      justify-center
                      text-center
                      py-3
                      rounded-lg
                      mr-1 
                      hover:bg-gray-700
                      transition
                      ease-in-out
                      duration-100
                    "
                  >
                    <Image
                      src={CompareIcon}
                      alt="Compare icon"
                      width={26}
                      height={26}
                      quality={100}
                    />
                    <span className="text-sm font-normal text-gray-200 tracking-wide ml-3">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}