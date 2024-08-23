import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@radix-ui/react-select';

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";



export function Tasks() {
  const [search, setSearch] = useState("")
  const [selectedRole, setSelectedRole] = useState("")
  
  const [taskInputs, setTaskInputs] = useState<{ [key: number]: string }>({});
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Developer",
      tasks: [
        { id: 1, name: "Implement new feature", status: "In Progress", dueDate: "2023-06-30" },
        { id: 2, name: "Optimize database queries", status: "Completed", dueDate: "2023-07-15" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      tasks: [{ id: 3, name: "Implement new design", status: "Overdue", dueDate: "2023-09-15" }],
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Developer",
      tasks: [{ id: 4, name: "Refactor codebase", status: "In Progress", dueDate: "2023-08-01" }],
    },
  ])
  const handleSearch = (e:any) => {
    setSearch(e.target.value)
  }
  const handleRoleChange = (value: string) => {
    setSelectedRole(value);
  };
  
  
  const handleAssignTask = (employeeId: any, task: any) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === employeeId ? { ...employee, tasks: [...employee.tasks, task] } : employee,
      ),
    );
    setTaskInputs((prevInputs) => ({ ...prevInputs, [employeeId]: '' })); // Clear the input field for the specific employee
  };
  const handleInputChange = (employeeId: any, value: string) => {
    setTaskInputs((prevInputs) => ({ ...prevInputs, [employeeId]: value }));
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-8 md:gap-8">
        <div className="w-full">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Assign Tasks</CardTitle>
              <div className="flex items-center gap-2 w-full justify-center">
                <Input
                  placeholder="Search employees..."
                  value={search}
                  onChange={handleSearch}
                  className="bg-white dark:bg-gray-950 max-w-[200px] w-full"
                />
                <Select value={selectedRole} onValueChange={handleRoleChange}>
                  <SelectTrigger className="w-[180px] z-20">
                    <SelectValue placeholder="Filter by role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="Developer">Developer</SelectItem>
                      <SelectItem value="Designer">Designer</SelectItem>
                      <SelectItem value="Manager">Manager</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Tasks</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell>
              <div className="flex items-center gap-2">
                <img
                  src="/placeholder.svg"
                  width={24}
                  height={24}
                  alt="Avatar"
                  className="rounded-full"
                  style={{ aspectRatio: "24/24", objectFit: "cover" }}
                />
                <div>{employee.name}</div>
              </div>
            </TableCell>
            <TableCell>{employee.role}</TableCell>
            <TableCell>
              <div className="flex flex-col gap-2">
                {employee.tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between">
                    <div className="font-medium">{task.name}</div>
                    <Badge
                      variant={task.status === "Completed" ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {task.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end gap-2">
                <Input
                  placeholder="Assign task..."
                  className="bg-white dark:bg-gray-950 max-w-[150px]"
                  value={taskInputs[employee.id] || ''}
                  onChange={(e) => handleInputChange(employee.id, e.target.value)}
                />
                <Button
                  onClick={() =>
                    handleAssignTask(employee.id, {
                      id: employee.tasks.length ? Math.max(...employee.tasks.map(t => t.id)) + 1 : 1,
                      name: taskInputs[employee.id] || '',
                      status: "In Progress",
                      dueDate: "2023-09-30",
                    })
                  }
                >
                  Assign
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

