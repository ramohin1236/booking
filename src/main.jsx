import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/roouter.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

        <AuthProvider>
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
            <RouterProvider router={router} />
        </AuthProvider>

    </React.StrictMode>,
)
