
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Employee() {
  return (
    <div className="flex flex-col min-h-screen">
     
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-semibold">John Doe</div>
                <div className="text-muted-foreground text-sm">Software Engineer</div>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm">18 tasks completed</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-yellow-500" />
                <span className="text-sm">5 tasks in progress</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeAlertIcon className="h-5 w-5 text-red-500" />
                <span className="text-sm">2 overdue tasks</span>
              </div>
              <Button variant="outline" size="sm">
                View Profile
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder-user.jpg" alt="Jane Smith" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-semibold">Jane Smith</div>
                <div className="text-muted-foreground text-sm">Product Manager</div>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm">22 tasks completed</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-yellow-500" />
                <span className="text-sm">3 tasks in progress</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeAlertIcon className="h-5 w-5 text-red-500" />
                <span className="text-sm">1 overdue task</span>
              </div>
              <Button variant="outline" size="sm">
                View Profile
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder-user.jpg" alt="Michael Johnson" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-semibold">Michael Johnson</div>
                <div className="text-muted-foreground text-sm">Designer</div>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm">15 tasks completed</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-yellow-500" />
                <span className="text-sm">8 tasks in progress</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeAlertIcon className="h-5 w-5 text-red-500" />
                <span className="text-sm">3 overdue tasks</span>
              </div>
              <Button variant="outline" size="sm">
                View Profile
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder-user.jpg" alt="Emily Davis" />
                <AvatarFallback>ED</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-semibold">Emily Davis</div>
                <div className="text-muted-foreground text-sm">Marketing Coordinator</div>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm">25 tasks completed</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-yellow-500" />
                <span className="text-sm">2 tasks in progress</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeAlertIcon className="h-5 w-5 text-red-500" />
                <span className="text-sm">1 overdue task</span>
              </div>
              <Button variant="outline" size="sm">
                View Profile
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6 gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/placeholder-user.jpg" alt="David Wilson" />
                <AvatarFallback>DW</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-semibold">David Wilson</div>
                <div className="text-muted-foreground text-sm">Sales Representative</div>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5 text-green-500" />
                <span className="text-sm">20 tasks completed</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-yellow-500" />
                <span className="text-sm">4 tasks in progress</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeAlertIcon className="h-5 w-5 text-red-500" />
                <span className="text-sm">1 overdue task</span>
              </div>
              <Button variant="outline" size="sm">
                View Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function BadgeAlertIcon(props: React.SVGProps<SVGSVGElement>) {
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


function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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


function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
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





function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
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
