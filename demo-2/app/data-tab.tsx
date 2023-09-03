import information from '../info.json'

export default function DataTab() {

  const getComma = (param: number) => {
    return param + 1 < information.data.length ? "," : ""
  }

  return (
    <div>
      <div>
        <span className="text-slate-400 font-semibold">&nbsp;1</span>
        <span>&nbsp;&#123;</span>
      </div>

      <div>
        <span className="text-slate-400 font-semibold">&nbsp;2</span>
        <span className="text-blue-950 dark:text-blue-500">&nbsp;&nbsp;&nbsp;"information":&nbsp;</span>
        <span className="text-blue-700">&#123;</span>
      </div>

      {information.data.map((item, index) => (
        <div key={item.id}>
          <span className="text-slate-400 font-semibold">&nbsp;{index + 3}</span>
          <span className="text-sky-500">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.label}:&nbsp;</span>
          <span className="text-yellow-500">"{item.description}"</span>
          {getComma(index)}
        </div>
      ))}

      <div>
        <span className="text-slate-400 font-semibold">&nbsp;7</span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="text-blue-700">&#125;</span>
      </div>

      <div>
        <span className="text-slate-400 font-semibold">&nbsp;8</span>
        <span>&nbsp;&#125;</span>
      </div>
    </div>
  )
}