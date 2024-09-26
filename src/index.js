import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './router/About';

const router = createBrowserRouter([
    {
        path: '',
        element: <Outlet />,
        children: [
            {
                path: '/',
                element: <App />,
            },
            {
                path: '/about',
                element: <About />,
            },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);
