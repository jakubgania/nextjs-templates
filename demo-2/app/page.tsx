'use client'

import { useState } from 'react'

import ThemeSwitcher from '../app/theme-switcher'
import FontSizeSwitcher from '../app/font-size-switcher'

import MenuTab from './menu-tab'
import DataTab from './data-tab'

export default function Home() {
  const [show, setShow] = useState('menu')
  const [tabName, setTabName] = useState('VUE')
  const [fontSize, setFontSize] = useState('base')

  const toggleTab = (param: string) => {
    setShow(param)
    param === 'menu' ? setTabName('VUE') : setTabName('JSON')
  }

  const showTab = (tab: string) => {
    return tab === 'menu' ? <MenuTab /> : <DataTab />
  }

  const iconSize = (font: string) => {
    switch (font) {
      case 'xs':
        return 12
      case 'sm':
        return 14
      case 'base':
        return 16
      case 'lg':
        return 18

      default:
        return 16
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
      <div className="w-[800px]">
        <ThemeSwitcher />
        <FontSizeSwitcher setFontSize={setFontSize} fontSize={fontSize} />
        <div className={`rounded-xl shadow-2xl shadow-slate-600/60 dark:shadow-blue-600/80 dark:text-gray-200 ${ 'text-' + fontSize }`}>
          <div className="top-bar flex w-full rounded-t-xl h-10 leading-10 bg-no-repeat dark:bg-gray-700">
            <button
              onClick={() => toggleTab('menu')}
              className={`w-fit flex items-center px-5 ml-[85px] mr-[2px] ${ show === 'menu' ? 'bg-slate-100 dark:bg-gray-900' : 'bg-slate-50 dark:bg-gray-800' }`}
            >
              <img src="/vue-icon.png" width={iconSize(fontSize)} height={iconSize(fontSize)} className="mr-2" />
              menu.vue
            </button>
            <button
              onClick={() => toggleTab('data')}
              className={`w-fit px-5 ${ show === 'data' ? 'bg-slate-100 dark:bg-gray-900' : 'bg-slate-50 dark:bg-gray-800' }`}
            >
              <span className="text-yellow-400 mr-2 font-semibold">&#123; &#125;</span>
              data.json
            </button>
          </div>
          <div className="container px-3.5 py-2 bg-slate-100 dark:bg-gray-900">
            {showTab(show)}
          </div>
          <div className="flex justify-between px-3.5 py-1 rounded-b-xl text-white bg-blue-600 dark:text-gray-200">
            <div className="flex">
              <img src="/icons8-code-fork-50-2.png" width={iconSize(fontSize)} height={iconSize(fontSize)} style={{objectFit: "contain"}} className="mr-2" />
              <span>development</span>
            </div>
            <div>
              <span className="mr-2">{tabName}</span>
              <span>UTF-8</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
