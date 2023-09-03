import SectionTitleHeader from "./section-title-header"
import DescriptionOfSection from "./description-of-section"

export default function LinksSection() {
  const links = [
    {
      "url": "https://github.com/jakubgania",
      "icon_path": "/link-thumb-1.webp",
      "label": "Example website - 1"
    },
    {
      "url": "https://github.com/jakubgania",
      "icon_path": "/link-thumb-2.webp",
      "label": "Example website - 2"
    },
    {
      "url": "https://github.com/jakubgania",
      "icon_path": "/link-thumb-3.webp",
      "label": "Example website - 3"
    },
    {
      "url": "https://github.com/jakubgania",
      "icon_path": "/link-thumb-4.webp",
      "label": "Example website - 4"
    }
  ]

  return (
    <div className="mb-12">
      <SectionTitleHeader title="Links" />
      <DescriptionOfSection description="Check out my other sites and resources." />
      <div>
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            className="
              flex
              items-center
              w-full
              rounded-xl
              p-1.5
              mb-2 
              bg-slate-900
              group 
              hover:bg-slate-800
              transition-shadow
              duration-150
            "
          >
            <div className="flex w-full text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 items-center flex">
                <img
                  src={link.icon_path}
                  className="p-0.5 group-hover:-rotate-[20deg] transition-all ease-in-out duration-150"
                />
              </div>
              <h2
                className="
                  flex
                  justify-center
                  items-center
                  font-bold
                  w-full
                  text-sm
                  text-gray-200
                  -ml-10
                  group-hover:tracking-widest
                  ease-in-out
                  duration-150
                "
              >
                {link.label}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}