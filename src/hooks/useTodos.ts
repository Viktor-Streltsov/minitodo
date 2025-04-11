import { useState } from 'react';
import { Task, Priority, FilterType, SortField, SortOrder } from '../types';

const useTodos = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks).map((task: any) => ({
      ...task,
      createdAt: new Date(task.createdAt)
    })) : [];
  });
  
  const [filter, setFilter] = useState<FilterType>('all');
  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  // Сохранения задачи
  const saveTasks = (newTasks: Task[]) => {
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  // Добавления задачи
  const addTask = (text: string, priority: Priority = 'medium') => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      completed: false,
      priority,
      createdAt: new Date(),
    };
    saveTasks([...tasks, newTask]);
  };

  // Переключения задачи
  const toggleTask = (id: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    saveTasks(updatedTasks);
  };

  // Редактирования заданий
  const editTask = (id: string, newText: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    );
    saveTasks(updatedTasks);
  };

  // Удаления заданий
  const deleteTask = (id: string) => {
    saveTasks(tasks.filter(task => task.id !== id));
  };

  // Переключения порядка сортировки
  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  // Изменения сортировки
  const changeSortField = (field: SortField) => {
    setSortField(field);
  };

  // Фильтрация заданий
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    // Сортировка по дате создания
    if (sortField === 'createdAt') {
      return sortOrder === 'asc' 
        ? a.createdAt.getTime() - b.createdAt.getTime()
        : b.createdAt.getTime() - a.createdAt.getTime();
    }
    
    // Сортировка по статусу выполнения
    if (sortField === 'completed') {
      return sortOrder === 'asc'
        ? Number(a.completed) - Number(b.completed)
        : Number(b.completed) - Number(a.completed);
    }
    
    // Сортировка по приоритету
    if (sortField === 'priority') {
      const priorityOrder: Record<Priority, number> = { high: 3, medium: 2, low: 1 };
      return sortOrder === 'asc'
        ? priorityOrder[a.priority] - priorityOrder[b.priority]
        : priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    
    return 0;
  });

  return {
    tasks: sortedTasks,
    addTask,
    toggleTask,
    editTask,
    deleteTask,
    setFilter,
    filter,
    sortField,
    sortOrder,
    toggleSortOrder,
    changeSortField
  };
};

export default useTodos;