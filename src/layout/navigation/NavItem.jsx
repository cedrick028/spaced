/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import './navItem.css';

export default function NavItem({ label, icon, link }) {
  return (
    <NavLink to={link} className={({ isActive }) => isActive ? 'nav-container active-nav' : 'nav-container'}>
      {icon}
      <p className="nav-label">{label}</p>
    </NavLink>
  )
}