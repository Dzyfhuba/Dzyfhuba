import { BrowserRouter, Route, Routes as RoutesDOM } from "react-router-dom"
import { lazy } from "react"
const Dashboard = lazy(() => import('../pages/Dashboard'))

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesDOM>
        <Route path="/" element={<Dashboard />} />
      </RoutesDOM>
    </BrowserRouter>
  )
}

export default Routes