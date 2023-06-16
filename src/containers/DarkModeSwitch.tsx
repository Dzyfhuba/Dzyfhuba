import Button from '@/components/Button'
import { useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const DarkModeSwitch = () => {
  const [_, update] = useState({})
  const isDark = window.localStorage.getItem('mode') === 'dark'

  const handle = () => {
    const mode = window.localStorage.getItem('mode')
    if (mode === 'dark') {
      window.localStorage.setItem('mode', 'light')
      document.querySelector('html')?.classList.remove('dark')
    } else {
      window.localStorage.setItem('mode', 'dark')
      document.querySelector('html')?.classList.add('dark')
    }
    update({})
  }

  console.log('rendering')
  return (
    <Button
      className={`p-3 bg-primary-base rounded-full hover:bg-primary-layer 
      transition-colors duration-300 bottom-2 right-2 fixed text-white`}
      onClick={() => handle()}
    >
      {isDark ? <MdDarkMode /> : <MdLightMode/>} 
    </Button>
  )
}

export default DarkModeSwitch