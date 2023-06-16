import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="">
      <h1>Dzyfhuba</h1>
      <div>
        <Link to="/">About Me</Link>
        <Link to="/">Services</Link>
        <Link to="/">Portfolios</Link>
      </div>
    </nav>
  )
}

export default Navbar