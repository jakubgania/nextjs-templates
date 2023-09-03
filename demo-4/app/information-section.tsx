import SectionTitleHeader from "./section-title-header"

export default function InformationSection() {
  const information = [
    {
      "label": "name",
      "value": "Example Name"
    },
    {
      "label": "birthday",
      "value": "1 January 1990"
    },
    {
      "label": "country",
      "value": "Germany"
    },
    {
      "label": "city",
      "value": "Dortmund"
    },
    {
      "label": "languages",
      "value": "German, English"
    },
    {
      "label": "experience",
      "value": "10 years"
    },
    {
      "label": "status",
      "value": "Open to challenges"
    }
  ]

  return (
    <div className="mb-12">
      <SectionTitleHeader title="Information" />
      <div className="text-gray-200 cursor-default">
        {information.map((item) => (
          <div key={item.label}>
            <div className="flex flex-row mb-4">
              <div className="basis-1/3">
                <p>
                  <span className="text-blue-600 font-black">_</span>{item.label}
                </p>
              </div>
              <div className="basis-2/3">
                <p>{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}