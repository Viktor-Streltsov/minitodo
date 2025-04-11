import { FilterType, Priority } from "../types";

export const FILTERS: FilterType[] = ['all', 'active', 'completed'];

export const PRIORITY_COLORS: Record<Priority, string> = {
  high: 'red',
  medium: 'orange',
  low: 'green',
};

export const OPTION_STATUS = [
  {
    id: 1,
    title: 'High',
    value: 'high'
  },
  {
    id: 2,
    title: 'Medium',
    value: 'medium'
  },
  {
    id: 3,
    title: 'Low',
    value: 'low'
  }
]

export const OPTION_SORT = [
  {
    id: 1,
    title: 'Date',
    value: 'createdAt'
  },
  {
    id: 2,
    title: 'Status',
    value: 'completed'
  },
  {
    id: 3,
    title: 'Priority',
    value: 'priority'
  }
]