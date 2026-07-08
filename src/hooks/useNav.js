import { Folder, Grip, StickyNotes, Users } from "lucide-react";
  
export default function useNav() {

  const sideNav = [
    { label: "Dashboard", icon: Grip, to: 'dashboard' },
    { label: "Projects", icon: Folder, to: 'projects' },
    { label: "Tasks", icon: StickyNotes, to: 'tasks' },
    { label: "Team", icon: Users, to: 'team' },
  ]

  return { sideNav }
}