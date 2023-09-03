export default function SectionTitleHeader({title}: {title: string}) {
  return (
    <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-gray-600">
      {title}
    </h2>
  )
}