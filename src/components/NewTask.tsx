import { useState } from 'react';

const NewTask = () => {
  const [enteredTask, setEnteredTask] = useState('');

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
      <button className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  );
};

export default NewTask;
