import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
function NavBar() {
  return (
    <div>
      <header className="bg-primary text-primary-foreground px-4 md:px-6 h-14 flex items-center justify-between">
        <Link to="#" className="flex items-center gap-2">
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Inc</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/dashboard" className="hover:underline underline-offset-4">
            Dashboard
          </Link>
          <Link to="/employee" className="hover:underline underline-offset-4">
            Employees
          </Link>
          <Link to="/task" className="hover:underline underline-offset-4">
            Tasks
          </Link>
          <Link to="#" className="hover:underline underline-offset-4">
            Reports
          </Link>
          <Link to="#" className="hover:underline underline-offset-4">
            Settings
          </Link>
        </nav>
        <div className="flex items-center gap-2">
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <img
            src="/placeholder-user.jpg"
            width="32"
            height="32"
            className="rounded-full"
            alt="Avatar"
          />
       
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
       
        </div>
      </header>
    </div>
  );
}

export default NavBar;

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}