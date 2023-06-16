import { HTMLAttributes } from "react"
import Navbar from "../containers/Navbar"

const Main = (props: HTMLAttributes<HTMLElement>) => {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  )
}

export default Main