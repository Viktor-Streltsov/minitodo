export type Priority = 'high' | 'medium' | 'low';
export type SortField = 'createdAt' | 'completed' | 'priority';
export type SortOrder = 'asc' | 'desc';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';