import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="">
      <h1>Dzyfhuba</h1>
      <div>
        <Link to="/">Stack</Link>
      </div>
    </nav>
  )
}

export default Navbar