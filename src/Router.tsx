import { Routes, Route } from 'react-router-dom'
import { History } from './pages/history/history'
import { Home } from './pages/home/home'
import { DefaultLayout } from './layouts/defaultLayout/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
