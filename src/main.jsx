import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createHashRouter, Link } from 'react-router-dom'

const hashRouter = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/other-page',
    element: (
      <div>
        <h1>Other page</h1>
        <h2><Link to='/'>Go back to App</Link></h2>
      </div>
    )
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={hashRouter} />
  </React.StrictMode>,
)
