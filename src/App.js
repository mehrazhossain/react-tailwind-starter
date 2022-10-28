import GreetView from './features/greet/GreetView';
import TodosView from './features/todos/TodosView';
import { Routes, Route } from 'react-router-dom';
import TodoView from './features/todo/TodoView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GreetView />} />
      <Route path="/todos" element={<TodosView />} />
      <Route path="/todo/:id" element={<TodoView />} />
    </Routes>
  );
}

export default App;
