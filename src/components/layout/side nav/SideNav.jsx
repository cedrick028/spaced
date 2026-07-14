import { NavLink } from "react-router-dom"
import useNav from "../../../hooks/useNav"
import styles from "./sideNav.module.css"

export default function SideNav() {
  const { sideNav } = useNav()
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-3 lg:flex-col lg:overflow-visible lg:p-4">
      {
        sideNav.map((nav) => (
          <NavLink key={nav.label} to={nav.to} className={ ({ isActive }) => isActive ? `${styles.activeNav} ${styles.nav}` : styles.nav }>
            <div className="w-2 h-2 bg-white rounded-sm"></div>
            <nav.icon size={16} />
            <span>{ nav.label }</span>
          </NavLink>
        ))
      }
    </div>
  )
}