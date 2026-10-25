import { Route, Routes } from 'react-router'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import OurStory from './pages/OurStory.tsx'
import Automation from './pages/Automation.tsx'
import MachineDetail from './pages/MachineDetail.tsx'
import Quality from './pages/Quality.tsx'
import Contact from './pages/Contact.tsx'
import NotFound from './pages/NotFound.tsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="automation" element={<Automation />} />
        <Route path="automation/:slug" element={<MachineDetail />} />
        <Route path="quality" element={<Quality />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
