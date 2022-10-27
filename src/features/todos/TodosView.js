import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './todosSlice';

const TodosView = () => {
  const { isLoading, todos, error } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  console.log(todos.title);
  return (
    <div className="grid grid-cols-3 gap-4 m-10">
      {isLoading && <h2>Loading ...</h2>}
      {todos.map((todo) => (
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {todo.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Todo ID: {todo.id}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TodosView;
