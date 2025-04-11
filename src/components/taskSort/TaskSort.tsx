import { SortField } from '../../types';

import styles from './TaskSort.module.scss';

interface Props {
  sortField: SortField;
  sortOrder: 'asc' | 'desc';
  onChangeSortField: (field: SortField) => void;
  onToggleSortOrder: () => void;
}

const SortTasks = ({ 
  sortField, 
  sortOrder, 
  onChangeSortField, 
  onToggleSortOrder 
}: Props) => {
  return (
    <div className={styles.sortContainer}>
      <span className={styles.sortLabel}>Sort by:</span>
      
      <select
        value={sortField}
        onChange={(e) => onChangeSortField(e.target.value as SortField)}
        className={styles.sortSelect}
      >
        <option value="createdAt">Date</option>
        <option value="completed">Status</option>
        <option value="priority">Priority</option>
      </select>
      
      <button 
        onClick={onToggleSortOrder}
        className={styles.sortOrderBtn}
        title={sortOrder === 'asc' ? 'Ascending' : 'Descending'}
      >
        {sortOrder === 'asc' ? '↑' : '↓'}
      </button>
    </div>
  );
};

export default SortTasks;