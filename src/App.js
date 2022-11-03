import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import AddUsers from './components/AddUsers';
import Home from './components/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('http://localhost:5000/users')
     

    },
    {
      path: '/users/add',
      element: <AddUsers></AddUsers>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
