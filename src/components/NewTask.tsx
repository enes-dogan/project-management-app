import { useState } from 'react';

import { NewTaskProps } from '../types';

const NewTask = ({ onAdd }: NewTaskProps) => {
  const [enteredTask, setEnteredTask] = useState('');

  function handleClick() {
    if (enteredTask.trim().length === 0) {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        type="text"
        value={enteredTask}
        onChange={e => {
          setEnteredTask(e.target.value);
        }}
      />
      <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  );
};

export default NewTask;
