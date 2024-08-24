import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { motion, AnimatePresence } from 'framer-motion'

type Task = {
  id: string
  content: string
  priority: 'Low' | 'Medium' | 'High'
}

type Column = {
  id: string
  title: string
  taskIds: string[]
}

type State = {
  tasks: { [key: string]: Task }
  columns: { [key: string]: Column }
  columnOrder: string[]
}

const initialState: State = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Complete project proposal', priority: 'High' },
    'task-2': { id: 'task-2', content: 'Review code changes', priority: 'Medium' },
    'task-3': { id: 'task-3', content: 'Update documentation', priority: 'Low' },
    'task-4': { id: 'task-4', content: 'Prepare for team meeting', priority: 'Medium' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-3'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Completed',
      taskIds: ['task-4'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
}

export default function EmployeeDash() {
  const [state, setState] = useState(initialState)
  const [newTask, setNewTask] = useState({ content: '', priority: 'Medium' as Task['priority'] })

  const moveTask = (taskId: string, sourceColumnId: string, destinationColumnId: string) => {
    setState((prevState) => {
      const sourceColumn = prevState.columns[sourceColumnId]
      const destColumn = prevState.columns[destinationColumnId]

      const newSourceTaskIds = sourceColumn.taskIds.filter(id => id !== taskId)
      const newDestTaskIds = [...destColumn.taskIds, taskId]

      return {
        ...prevState,
        columns: {
          ...prevState.columns,
          [sourceColumnId]: {
            ...sourceColumn,
            taskIds: newSourceTaskIds,
          },
          [destinationColumnId]: {
            ...destColumn,
            taskIds: newDestTaskIds,
          },
        },
      }
    })
  }

  const handleTaskClick = (taskId: string, currentColumnId: string) => {
    const currentColumnIndex = state.columnOrder.indexOf(currentColumnId)
    if (currentColumnIndex < state.columnOrder.length - 1) {
      const nextColumnId = state.columnOrder[currentColumnIndex + 1]
      moveTask(taskId, currentColumnId, nextColumnId)
    }
  }

  const addTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTask.content.trim()) {
      const taskId = `task-${Date.now()}`
      const updatedState = {
        ...state,
        tasks: {
          ...state.tasks,
          [taskId]: { id: taskId, content: newTask.content, priority: newTask.priority },
        },
        columns: {
          ...state.columns,
          'column-1': {
            ...state.columns['column-1'],
            taskIds: [...state.columns['column-1'].taskIds, taskId],
          },
        },
      }
      setState(updatedState)
      setNewTask({ content: '', priority: 'Medium' })
    }
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Employee Task Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId]
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId])

          return (
            <Column 
              key={column.id} 
              column={column} 
              tasks={tasks} 
              onTaskClick={handleTaskClick}
            />
          )
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Task Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <TaskSummary state={state} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Quick Add Task</CardTitle>
          </CardHeader>
          <CardContent>
            <QuickAddTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function Column({ column, tasks, onTaskClick }: { column: Column; tasks: Task[]; onTaskClick: (taskId: string, columnId: string) => void }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{column.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <AnimatePresence>
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TaskItem 
                task={task} 
                onClick={() => onTaskClick(task.id, column.id)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

function TaskItem({ task, onClick }: { task: Task; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="mb-2 p-3 bg-grey-100 border rounded shadow-sm cursor-pointer hover:bg-gray-50 hover:text-black transition-colors duration-200"
    >
      <div className="flex justify-between items-center">
        <span>{task.content}</span>
        <PriorityBadge priority={task.priority} />
      </div>
    </div>
  )
}

function PriorityBadge({ priority }: { priority: Task['priority'] }) {
  const colorMap = {
    Low: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    High: 'bg-red-100 text-red-800',
  }

  return (
    <Badge className={`${colorMap[priority]} text-xs`}>
      {priority}
    </Badge>
  )
}

function TaskSummary({ state }: { state: State }) {
  const taskCounts = state.columnOrder.reduce((acc, columnId) => {
    acc[state.columns[columnId].title] = state.columns[columnId].taskIds.length
    return acc
  }, {} as Record<string, number>)

  const priorityCounts = Object.values(state.tasks).reduce((acc, task) => {
    acc[task.priority] = (acc[task.priority] || 0) + 1
    return acc
  }, {} as Record<string, number>)

  const statusData = Object.entries(taskCounts).map(([name, value]) => ({ name, value }))
  const priorityData = Object.entries(priorityCounts).map(([name, value]) => ({ name, value }))

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Status Distribution</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={statusData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Priority Distribution</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={priorityData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {priorityData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function QuickAddTask({ 
  newTask, 
  setNewTask, 
  addTask 
}: { 
  newTask: { content: string; priority: Task['priority'] }
  setNewTask: React.Dispatch<React.SetStateAction<{ content: string; priority: Task['priority'] }>>
  addTask: (e: React.FormEvent) => void
}) {
  return (
    <form onSubmit={addTask} className="space-y-4">
      <div>
        <Input
          placeholder="Enter task content"
          value={newTask.content}
          onChange={(e) => setNewTask({ ...newTask, content: e.target.value })}
        />
      </div>
      <div className="flex space-x-2">
        <Select
          value={newTask.priority}
          onValueChange={(value: Task['priority']) => setNewTask({ ...newTask, priority: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Low">Low</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="High">High</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  )
}