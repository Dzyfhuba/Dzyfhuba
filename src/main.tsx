import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './routes/Routes.tsx'
import DarkModeSwitch from './containers/DarkModeSwitch.tsx'
import { ConfigProvider } from 'antd'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider>
      <Routes />
      <DarkModeSwitch/>
    </ConfigProvider>
  </React.StrictMode>,
)
