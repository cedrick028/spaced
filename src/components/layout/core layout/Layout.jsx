import { Outlet } from "react-router-dom";
import SideNav from "../side nav/SideNav";
import Logo from "../logo/Logo";
import TopNav from "../top nav/TopNav";

export default function Layout() {
  return (
    <div className="w-8/12 mx-auto flex">
      <div className="w-60 h-screen border-r">
        <Logo />
        <SideNav />
      </div>
      <div className="flex-1">
        <TopNav />
        <div className="bg-fair p-4">
          <div className="min-h-[calc(100vh-56px-32px)] border p-4 rounded-md bg-white">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}