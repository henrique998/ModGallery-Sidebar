import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Bag } from './pages/Bag'
import { Faq } from './pages/Faq'
import { Favourites } from './pages/Favourites'
import { Home } from './pages/Home'
import { MyGallery } from './pages/MyGallery'
import { Settings } from './pages/Settings'
import { SingleObjects } from './pages/SingleObjects'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/single-objects" element={<SingleObjects />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/my-gallery" element={<MyGallery />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
    </Routes>
  )
}
