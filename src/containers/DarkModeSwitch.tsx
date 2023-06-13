import { MdDarkMode } from 'react-icons/md'
import Button from '@/components/Button'

const DarkModeSwitch = () => {
  const handle = () => {
    const mode = window.localStorage.getItem('mode')
    if (mode === 'dark') {
      window.localStorage.setItem('mode', 'light')
      document.querySelector('html')?.classList.remove('dark')
    } else {
      window.localStorage.setItem('mode', 'dark')
      document.querySelector('html')?.classList.add('dark')
    }
  }
  return (
    <Button
      className={`p-3 bg-primary-base rounded-full hover:bg-primary-layer 
      transition-colors duration-300 bottom-2 right-2 fixed`}
      onClick={() => handle()}
    >
      <MdDarkMode />
    </Button>
  )
}

export default DarkModeSwitch