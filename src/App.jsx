import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import SharedLayout from './SharedLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <Navigate to="/" />,

    children: [
      {
        index: true,
        async lazy() {
          let { Home } = await import('pages/Home/Home.jsx');
          return { Component: Home };
        },
      },
      {
        path: 'contacts',
        async lazy() {
          let { Contacts } = await import('pages/Contacts/Contacts.jsx');
          return { Component: Contacts };
        },
      },
      {
        path: 'portfolio',
        async lazy() {
          let { Portfolio } = await import('pages/Portfolio/Portfolio.jsx');
          return { Component: Portfolio };
        },
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
