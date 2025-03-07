import { Link, NavLink } from "react-router"
import Logo from "./logo"

export default function Header() {
  return (
    <header className="relative mt-3 lg:mt-18">
      <Logo className="absolute -bottom-4 w-14 lg:w-40 lg:-bottom-12" />
      <nav className="space-x-4 text-1xl flex flex-row place-content-end font-black uppercase text-gray-100 absolute lg:bottom-2 right-0 bg-black pl-2 pr-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            [isActive ? "text-red-700" : ""].join(" ")
          }
        >
          Home
        </NavLink>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}
