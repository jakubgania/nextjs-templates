import SectionTitleHeader from "./section-title-header"
import DescriptionOfSection from "./description-of-section"

export default function ExperienceSection() {
  const experience = [
    {
      "id": "3",
      "time_range": "10/2020 - 06/2023",
      "company_name": "Company Name 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "projects": [
        {
          "id": "11",
          "description": "Project description 1"
        },
        {
          "id": "22",
          "description": "Project description 2"
        },
        {
          "id": "33",
          "description": "Project description 3"
        }
      ]
    },
    {
      "id": "2",
      "time_range": "04/2018 - 08/2020",
      "company_name": "Company Name 2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "projects": [
        {
          "id": "44",
          "description": "Project description 1"
        },
        {
          "id": "55",
          "description": "Project description 2"
        },
        {
          "id": "66",
          "description": "Project description 3"
        }
      ]
    },
    {
      "id": "1",
      "time_range": "04/2016 - 02/2018",
      "company_name": "Company Name 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "projects": [
        {
          "id": "77",
          "description": "Project description 1"
        },
        {
          "id": "88",
          "description": "Project description 2"
        },
        {
          "id": "99",
          "description": "Project description 3"
        }
      ]
    }
  ]

  return (
    <div className="mb-12">
      <SectionTitleHeader title="Experience" />
      <DescriptionOfSection description="Below is a description of my professional experience along with individual tasks and a breakdown by years." />
      <ul className="list-inside lg:list-outside list-disc text-gray-200">
        {experience.map((item) => (
          <li key={item.id} className="mb-10">
            <span>{item.time_range}</span> <br className="block sm:hidden" /><span className="text-blue-600 pl-4 sm:pl-0">{`>>`}</span> {item.company_name}
            <p className="mt-3">
              {item.description}
            </p>
            <p className="mt-3">
              Tasks && projects:
            </p>
            <ul className="list-disc ml-8 mt-4">
              {item.projects.map((project) => (
                 <li key={project.id}>
                  {project.description}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}