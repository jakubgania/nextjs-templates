import SectionTitleHeader from "./section-title-header"
import DescriptionOfSection from "./description-of-section"

export default function HobbiesSection() {
  return (
    <div className="mb-12">
      <SectionTitleHeader title="Hobbies and Interests" />
      <DescriptionOfSection description="My hobbies and interests." />
      <div className="text-base text-slate-400 font-medium cursor-default">
        <span className="underline decoration-2 decoration-lime-400">Sport</span>,
        <span className="underline decoration-2 decoration-amber-400">Mountain biking</span>,
        <span className="underline decoration-2 decoration-sky-400">New technologies</span>,
        <span className="underline decoration-2 decoration-red-400">YouTube</span>,
        <span className="underline decoration-2 decoration-green-400">Video recording and processing</span>,
        <span className="underline decoration-2 decoration-purple-400">Photography</span>,
        <span className="underline decoration-2 decoration-red-400">Netflix</span>,
        <span className="underline decoration-2 decoration-blue-400">Food</span>,
        <span className="underline decoration-2 decoration-teal-400">Personal development</span>
      </div>
    </div>
  )
}