import AddTask from './components/taskAdd/TaskAdd';
import TaskList from './components/taskList/TaskList';
import SortTasks from './components/taskSort/TaskSort';
import FilterTasks from './components/taskFilter/TaskFilter';
import useTodos from './hooks/useTodos';

import styles from './App.module.scss';

const App = () => {
  const {
    tasks,
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
  } = useTodos();

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Mini Todo List</h1>
      <AddTask onAdd={addTask} />
      <div className={styles.controls}>
        <FilterTasks currentFilter={filter} onFilterChange={setFilter} />
        <SortTasks
          sortField={sortField}
          sortOrder={sortOrder}
          onChangeSortField={changeSortField}
          onToggleSortOrder={toggleSortOrder}
        />
      </div>
      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onEdit={editTask}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;