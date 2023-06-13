import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'primary' | 'secondary'
}

const Button = (props: Props) => {
  if (props.level === 'primary') {
    return (
      <button
        className={
          'px-5 py-2.5'
        }
      >
        {props.children}
      </button>
    )
  }

  return (
    <button {...props}>
      {props.children}
    </button>
  )
}

export default Button