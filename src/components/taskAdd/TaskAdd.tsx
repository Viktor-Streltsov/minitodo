import React, { useState } from 'react';
import { Priority } from '../../types';
import { OPTION_STATUS } from '../../constants';

import styles from './TaskAdd.module.scss';

interface Props {
  onAdd: (text: string, priority: Priority) => void;
}

const AddTask = ({ onAdd }: Props) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text, priority);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTaskForm}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className={styles.taskInput}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
        className={styles.prioritySelect}
      >
        {OPTION_STATUS.map(item => (
          <option key={item.id} value={item.value}>{item.title}</option>
        ))}
      </select>
      <button type="submit" className={styles.addBtn}>
        Add
      </button>
    </form>
  );
};

export default AddTask;