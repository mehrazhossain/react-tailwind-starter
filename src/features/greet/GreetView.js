import { useDispatch, useSelector } from 'react-redux';
import { hideGreetMessage, showGreetMessage } from './greetSlice';

const GreetView = () => {
  const message = useSelector((state) => state.greet.message);
  const dispatch = useDispatch();

  return (
    <div className="m-10">
      <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {message ? message : 'Empty!'}
        </h5>
        {message ? (
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Welcome to the programming world, and best wishes for a long and
            prosperous career.
          </p>
        ) : (
          'there is no greet message'
        )}
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 mr-4"
        onClick={() => {
          dispatch(showGreetMessage());
        }}
      >
        Show Message
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          dispatch(hideGreetMessage());
        }}
      >
        Hide Message
      </button>
    </div>
  );
};
export default GreetView;
