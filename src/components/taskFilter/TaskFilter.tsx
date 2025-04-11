import { FILTERS } from '../../constants';
import { FilterType } from '../../types';

import styles from './TaskFilter.module.scss';
import cn from 'classnames';

interface Props {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterTasks = ({ currentFilter, onFilterChange }: Props) => {
  return (
    <div className={styles.filterTasks}>
      {FILTERS.map(filter => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={cn(styles.filterBtn, { [styles.active] : currentFilter === filter})}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterTasks;