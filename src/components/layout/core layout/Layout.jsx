import { Outlet } from "react-router-dom";
import SideNav from "../side nav/SideNav";
import Logo from "../logo/Logo";
import TopNav from "../top nav/TopNav";

export default function Layout() {
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col bg-fair lg:w-8/12 lg:flex-row">
      <div className="border-b bg-white lg:sticky lg:top-0 lg:h-screen lg:w-60 lg:flex-shrink-0 lg:border-b-0 lg:border-r">
        <Logo />
        <SideNav />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <TopNav />
        <div className="flex-1 p-3 sm:p-4">
          <div className="min-h-[calc(100vh-56px-24px)] rounded-md border bg-white p-3 sm:p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}