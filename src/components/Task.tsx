import React from "react";

// define TaskItem interface to use as props type
interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  deleteTaskFunc: (taskId: number) => void; // callback function
  toggleDoneTaskFunc: (taskId: number) => void; // callback function
}

export default function Task({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}: TaskItemProps) {
  // callback function when delete button is clicked
  const doneBtnOnclick = () => {
    toggleDoneTaskFunc(id);
  };
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      {/*
      HINTS: if task is completed, below "span" will show like this 
        <span className="text-decoration-line-through">{title}</span>
        But if task is not completed : 
        <span>{title}</span>
      */}
      <span className={completed ? 'text-decoration-line-through' : ''}>{title}</span>
      <button className="btn btn-success" onClick={doneBtnOnclick}>Done</button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
}
