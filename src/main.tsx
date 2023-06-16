import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './routes/Routes.tsx'
import DarkModeSwitch from './containers/DarkModeSwitch.tsx'
import { ConfigProvider } from 'antd'
import { StoreProvider } from 'easy-peasy'
import store from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ConfigProvider>
        <Routes />
        <DarkModeSwitch/>
      </ConfigProvider>
    </StoreProvider>
  </React.StrictMode>,
)
