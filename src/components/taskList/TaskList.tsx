import { Task } from '../../types';
import TaskItem from '../taskItem/TaskItem';

import styles from './TaskList.module.scss';

interface Props {
  tasks: Task[];
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

const TaskList = ({ tasks, onToggle, onEdit, onDelete }: Props) => {
  if (tasks.length === 0) {
    return <div className={styles.emptyList}>No tasks found</div>;
  }

  return (
    <ul className={styles.taskList}>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;