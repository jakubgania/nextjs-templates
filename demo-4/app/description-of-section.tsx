export default function DescriptionOfSection({description} : {description: string}) {
  return (
    <div className="text-base mb-4 text-gray-200">
      {description}
    </div>
  )
}