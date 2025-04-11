import { useState } from 'react';
import { Priority, Task } from '../../types';

import cn from 'classnames';
import styles from './TaskItem.module.scss';

interface Props {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
}

const priorityColors: Record<Priority, string> = {
  high: 'red',
  medium: 'orange',
  low: 'green',
};

const TaskItem = ({ task, onToggle, onEdit, onDelete }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEdit = () => {
    if (editText.trim()) {
      onEdit(task.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <li className={cn(styles.taskItem, { [styles.completed] : task.completed})}>
      <div className={styles.taskContent}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className={styles.taskCheckbox}
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
            autoFocus
            className={styles.editInput}
          />
        ) : (
          <span
            className={styles.taskText}
            onDoubleClick={() => setIsEditing(true)}
          >
            {task.text}
          </span>
        )}
        <span 
          className={styles.priorityBadge} 
          style={{ backgroundColor: priorityColors[task.priority] }}
        >
          {task.priority}
        </span>
      </div>
      <div className={styles.taskMeta}>
        <span className={styles.taskDate}>
          {task.createdAt.toLocaleDateString()}
        </span>
        <button onClick={() => onDelete(task.id)} className={styles.deleteBtn}>
          ×
        </button>
      </div>
    </li>
  );
};

export default TaskItem;