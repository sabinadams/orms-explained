import { useEffect, useState } from "react";
import Sun from './icons/Sun'
import Moon from './icons/Moon'

export default function ThemeToggler() {

  const getThemeFromStorage = () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('orms-explained-theme') === 'dark' ||
      (!('orms-explained-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
    }
  }
  const [theme, setTheme] = useState(getThemeFromStorage())

  useEffect(() => {
    setTheme(getThemeFromStorage())
  }, [])

  const [transitioning, setTransitioning] = useState(false)

  const toggleTheme = () => {
    let newTheme = theme === 'light' ? 'dark' : 'light'
    newTheme === 'dark' ? 
      document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')

      document.documentElement.style.colorScheme = newTheme

      setTransitioning(true)
      setTimeout(() => {
        setTransitioning(false)
        setTheme(newTheme)
      }, 300)

    localStorage.setItem('orms-explained-theme', newTheme)
  }

  return <button onClick={toggleTheme} className={`${transitioning && 'opacity-0'} rounded-xl p-3 transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-slate-600 fill-indigo-400 dark:fill-orange-200`}>
    { theme === 'dark' ? <Sun /> : <Moon />}
  </button>
}