'use client'

import { themes } from '../../appData'
import useOutsideClick from '../hooks/useOutsideClick'
import { CheckIcon, CloseIcon } from '../../utils/icons'
import { useEffect, useState } from 'react'

const ThemeMenu = () => {
  const [theme, setTheme] = useState('')
  const [showThemeMenu, setShowThemeMenu] = useState(false)
  const menuRef = useOutsideClick(() => setShowThemeMenu(false))

  useEffect(() => {
    const theme=localStorage.getItem('theme');
    document.documentElement.getAttribute('class')?.includes('dark') || theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.toggle('dark', theme === 'dark');
    setTheme('dark');
  },[])


  const changeTheme = (newTheme: string) => {
    const root = document.documentElement;
    if(newTheme===theme) return;
    root.classList.toggle('dark')
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div ref={menuRef} className="fixed right-6 bottom-4 z-50 md:right-11 md:bottom-11">
      <div
        onClick={() => setShowThemeMenu(!showThemeMenu)}
        className="bg-neutral-200 cursor-pointer rounded-full p-1.5 md:p-2">
        <div className="bg-primary grid grid-cols-2 place-content-center gap-0.5 rounded-full p-1.5 md:p-2">
          <div className="w-2 h-2 rounded-t-full rounded-bl-full bg-[#B13753] md:w-2.5 md:h-2.5"></div>
          <div className="w-2 h-2 rounded-t-full rounded-br-full bg-[#BAA32B] md:w-2.5 md:h-2.5"></div>
          <div className="w-2 h-2 rounded-tl-full rounded-b-full bg-[#3178C6] md:w-2.5 md:h-2.5"></div>
          <div className="w-2 h-2 rounded-tr-full rounded-b-full bg-[#50B359] md:w-2.5 md:h-2.5"></div>
        </div>
      </div>

      {showThemeMenu && (
        <div className="bg-white dark:bg-gray-800 animate-fade-in border border-gray-300 dark:border-gray-700 absolute right-0 bottom-full mb-5 space-y-3 rounded-xl p-3 md:space-y-4 md:p-5">
          <div className="flex items-center justify-between border-b border-gray-300 dark:border-gray-700 pb-3 md:pb-4">
            <span className="text-gray-800 dark:text-gray-100 text-sm md:text-base">select-theme</span>
            <CloseIcon
              onClick={() => setShowThemeMenu(false)}
              className="h-3 w-3 cursor-pointer md:h-4 md:w-4 text-gray-800 dark:text-gray-100"
            />
          </div>

          {themes.map(({ name, colors }) => (
            <div
              key={name}
              onClick={() => changeTheme(name.toLowerCase())}
              style={{ background: colors[0], color: colors[1] }}
              className="border flex min-w-[12rem] cursor-pointer items-center justify-between rounded-lg p-2 md:min-w-[15rem] md:rounded-xl md:p-4"
            >
              <div className="flex items-end gap-1.5  ">
                <CheckIcon className={name.toLowerCase() === theme ? 'block' : 'hidden'} />
                <span className="text-sm md:text-base text-gray-900 dark:text-gray-100" style={{ background: colors[0], color: colors[1] }}>{name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ThemeMenu
