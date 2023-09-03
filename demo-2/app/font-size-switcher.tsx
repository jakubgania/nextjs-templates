
type Props = {
  setFontSize: (val: string) => void,
  fontSize: string
}

export default function FontSizeSwitcher({setFontSize, fontSize}: Props) {
  const data = ['xs', 'sm', 'base', 'lg']

  const changeFontSize = (size: string) => {
    setFontSize(size)
  }

  return (
    <div className="mb-20">
      <p className="mb-4 text-slate-600 dark:text-slate-400">
        The current font is: <span className="text-green-500">{fontSize}</span>
      </p>
      <div className="flex gap-2">
        {data.map((item) => (
          <div key={item} className="w-1/4">
            <button
              key={item}
              onClick={() => changeFontSize(item)}
              className="p-4 rounded-xl w-full text-slate-500 bg-slate-100 hover:bg-slate-200 dark:text-slate-400 dark:bg-gray-900 dark:hover:bg-gray-800"
            >
              {"text-" + item}
            </button>
          </div>
        ))}
      </div>
      {/* <div className="flex gap-2">
          <div className="w-1/4">
            <button
              onClick={() => changeFontSize('xs')}
              className="p-4 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-500 w-full dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-slate-400"
            >
              text-xs
            </button>
          </div>
          <div className="w-1/4">
            <button
              onClick={() => changeFontSize('sm')}
              className="p-4 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-500 w-full dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-slate-400"
            >
              text-sm
            </button>
          </div>
          <div className="w-1/4">
            <button
              onClick={() => changeFontSize('base')}
              className="p-4 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-500 w-full dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-slate-400"
            >
              text-base
            </button>
          </div>
          <div className="w-1/4">
            <button
              onClick={() => changeFontSize('lg')}
              className="p-4 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-500 w-full dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-slate-400"
            >
              text-lg
            </button>
          </div>
        </div> */}
    </div>
  )
}