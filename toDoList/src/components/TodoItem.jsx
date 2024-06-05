import { TodoDispatchContext } from '../App';
import './TodoItem.css';
import { memo, useContext } from 'react';

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheck = () => {
    onUpdate(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        readOnly
        type="checkbox"
        checked={isDone}
        onChange={onChangeCheck}
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);
