
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground px-4 md:px-6 h-14 flex items-center justify-between">
        <Link to="#" className="flex items-center gap-2" >
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Acme Inc</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="#" className="hover:underline underline-offset-4" >
            Dashboard
          </Link>
          <Link to="#" className="hover:underline underline-offset-4" >
            Employees
          </Link>
          <Link to="#" className="hover:underline underline-offset-4" >
            Tasks
          </Link>
          <Link to="#" className="hover:underline underline-offset-4" >
            Reports
          </Link>
          <Link to="#" className="hover:underline underline-offset-4" >
            Settings
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Input
            type="search"
            placeholder="Search employees..."
            className="bg-primary/20 text-primary-foreground rounded-md px-3 py-2 text-sm"
          />
          <Button variant="ghost" size="icon" className="rounded-full">
            <img src="/placeholder.svg" width="32" height="32" className="rounded-full" alt="Avatar" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 grid gap-4 p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Tasks Completed</CardTitle>
              <CheckIcon className="h-5 w-5 text-green-500" />
            </CardHeader>
            <CardContent className="text-4xl font-bold">
              <span>128</span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Tasks In Progress</CardTitle>
              <ClockIcon className="h-5 w-5 text-yellow-500" />
            </CardHeader>
            <CardContent className="text-4xl font-bold">
              <span>42</span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Overdue Tasks</CardTitle>
              <BadgeAlertIcon className="h-5 w-5 text-red-500" />
            </CardHeader>
            <CardContent className="text-4xl font-bold">
              <span>15</span>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Employees</CardTitle>
              <UsersIcon className="h-5 w-5 text-blue-500" />
            </CardHeader>
            <CardContent className="text-4xl font-bold">
              <span>32</span>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Employee Task Status</CardTitle>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <FilterIcon className="h-4 w-4" />
                    <span className="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>Completed</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>In Progress</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Overdue</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Input
                type="search"
                placeholder="Search employees..."
                className="bg-muted/20 rounded-md px-3 py-2 text-sm"
              />
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Completed</TableHead>
                  <TableHead>In Progress</TableHead>
                  <TableHead>Overdue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">johndoe@example.com</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="px-2 py-1 text-xs">
                      18
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="px-2 py-1 text-xs">
                      5
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="destructive" className="px-2 py-1 text-xs">
                      2
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Jane Smith</div>
                    <div className="text-sm text-muted-foreground">janesmith@example.com</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="px-2 py-1 text-xs">
                      22
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="px-2 py-1 text-xs">
                      3
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="destructive" className="px-2 py-1 text-xs">
                      1
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Michael Johnson</div>
                    <div className="text-sm text-muted-foreground">michaelj@example.com</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="px-2 py-1 text-xs">
                      15
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="px-2 py-1 text-xs">
                      8
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="destructive" className="px-2 py-1 text-xs">
                      3
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Emily Davis</div>
                    <div className="text-sm text-muted-foreground">emilyd@example.com</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="px-2 py-1 text-xs">
                      25
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="px-2 py-1 text-xs">
                      2
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="destructive" className="px-2 py-1 text-xs">
                      1
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">David Wilson</div>
                    <div className="text-sm text-muted-foreground">davidw@example.com</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="px-2 py-1 text-xs">
                      20
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="px-2 py-1 text-xs">
                      4
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="destructive" className="px-2 py-1 text-xs">
                      1
                    </Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function BadgeAlertIcon(props:any) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  )
}


function CheckIcon(props:any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function ClockIcon(props:any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function FilterIcon(props:any) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function MountainIcon(props:any) {
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
  )
}


function UsersIcon(props:any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function XIcon(props:any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
