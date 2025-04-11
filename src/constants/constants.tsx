import { FilterType, Priority } from "../types";

export const FILTERS: FilterType[] = ['all', 'active', 'completed'];

export const PRIORITY_COLORS: Record<Priority, string> = {
  high: 'red',
  medium: 'orange',
  low: 'green',
};