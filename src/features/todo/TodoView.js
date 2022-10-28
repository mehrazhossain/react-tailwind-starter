import { useParams } from 'react-router-dom';

const TodoView = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>Todo by Id</h3>
      <h3>Todo id {id}</h3>
    </div>
  );
};
export default TodoView;
