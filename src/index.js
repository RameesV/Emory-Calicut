import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import EmoryPage from './components/Pages/EmoryPage';
import DawnPage from './components/Pages/DawnPage';
import BSchool from './components/Pages/BSchool';
import JasbroPage from './components/Pages/JasbroPage';
import ContactUs from './components/Pages/ContactUs';
import Gallery from './components/Pages/Gallery';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/emory',
        element: <EmoryPage />,
      },
      {
        path: '/dawn',
        element: <DawnPage />,
      },
      {
        path: '/jasbro',
        element: <JasbroPage />,
      },
      {
        path: '/bSchool',
        element: <BSchool />,
      },
      {
        path:'/contact-us',
        element: <ContactUs />
      },
      {
        path:'/gallery',
        element: <Gallery />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
