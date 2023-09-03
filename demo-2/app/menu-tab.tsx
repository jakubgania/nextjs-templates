import Link from 'next/link'
import information from '../info.json'

export default function MenuTab() {

  const calcOutput = (index: number, param: number) => {
    return ((index + 1) * 3) + param
  }

  const calcNumber = (index: number, param: number) => {
    if (calcOutput(index, param) >= 10) {
      return <span className="text-slate-400 font-semibold">{calcOutput(index, param)}</span>
    }

    return <span className="text-slate-400 font-semibold">&nbsp;{calcOutput(index, param)}</span>
  }

  const calcLastNumber = (param: number) => {
    return (information.menu.length * 3 + 3) + param
  }

  return (
    <div>
      
      <div>
        <span className="text-slate-400 font-semibold">&nbsp;1</span>
        <span className="text-red-500">&nbsp;data</span>
        <span> ()</span>
        <span className="text-teal-600">&nbsp;&#123;</span>
      </div>

      <div>
        <span className="text-slate-400 font-semibold">&nbsp;2</span>
        <span className="text-blue-600">&nbsp;&nbsp;&nbsp;return</span>
        <span className="text-purple-800">&nbsp;&#123;</span>
      </div>

      <div>
        <span className="text-slate-400 font-semibold">&nbsp;3</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;items:</span>
        <span className="text-amber-500"> [</span>
      </div>

      {information.menu.map((item, index) => (
        <div key={item.id}>
          <div>
            {calcNumber(index, 1)}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="text-zinc-500">&#123;</span>
          </div>
          <div>
            {calcNumber(index, 2)}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="text-blue-600">page: </span>
            <Link href={item.path} target="_blank">
              <span className="hover:text-teal-500">"{item.name}"</span>
            </Link>
          </div>
          <div>
            {calcNumber(index, 3)}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span className="text-zinc-500">&#125;,</span>
          </div>
        </div>
      ))}

      <div>
        <span className="text-slate-400 font-semibold">{calcLastNumber(1)}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <span className="text-amber-500">]</span>
      </div>

      <div>
        <span className="text-slate-400 font-semibold">{calcLastNumber(2)}</span>
        <span>&nbsp;&nbsp;&nbsp;</span>
        <span className="text-purple-800">&#125;</span>
      </div>

      <div>
        <span className="text-slate-400 font-semibold">{calcLastNumber(3)}</span>
        <span>&nbsp;</span>
        <span className="text-teal-600">&#125;</span>
      </div>

    </div>
  )
}