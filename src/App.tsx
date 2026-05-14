import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Lp1 from './pages/lp1/Page'
import Lp2 from './pages/lp2/Page'
import Lp3 from './pages/lp3/Page'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/lp1" replace />} />
        <Route path="/lp1" element={<Lp1 />} />
        <Route path="/lp2" element={<Lp2 />} />
        <Route path="/lp3" element={<Lp3 />} />
        <Route path="*" element={<Navigate to="/lp1" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
