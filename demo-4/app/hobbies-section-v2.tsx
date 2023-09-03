import SectionTitleHeader from "./section-title-header"
import DescriptionOfSection from "./description-of-section"

export default function HobbiesSectionV2() {
  const hobbies = [
    {
      "underline_color": "#a3e635",
      "label": "Sport"
    },
    {
      "underline_color": "#fbbf24",
      "label": "Mountain biking"
    },
    {
      "underline_color": "#38bdf8",
      "label": "New technologies"
    },
    {
      "underline_color": "#f87171",
      "label": "YouTube"
    },
    {
      "underline_color": "#4ade80",
      "label": "Video recording and processing"
    },
    {
      "underline_color": "#c084fc",
      "label": "Photography"
    },
    {
      "underline_color": "#f87171",
      "label": "Netflix"
    },
    {
      "underline_color": "#60a5fa",
      "label": "Food"
    },
    {
      "underline_color": "#2dd4bf",
      "label": "Personal development"
    }
  ]

  return (
    <div className="mb-12">
      <SectionTitleHeader title="Hobbies and Interests" />
      <DescriptionOfSection description="My hobbies and interests." />
      <div className="text-base text-slate-400 font-medium cursor-default">
        {hobbies.map((hobby, index) => (
          <>
            <span
              key={hobby.label}
              style={{ textDecorationColor: `${hobby.underline_color}` }}
              className="underline decoration-2"
            >
              {hobby.label}
            </span>
            { index < hobbies.length - 1 ? ', ' : ''}
          </>
        ))}
      </div>
    </div>
  )
}