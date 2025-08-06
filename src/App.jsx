import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"

import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "../src/pages/Home/Index"
import OurTeam from "./pages/ourTeam/Index";
import Portfolio from "./pages/portfolio/components/Index";
import Service from "./pages/services/Index";
import Contact from "./pages/contactus/Index";
import About from "./pages/aboutus/Index"
import ServiceDetailPage from "./pages/Home/components/ServiceDetailPage";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import StickyContactButtons from "./Components/StickyContactButtons";


export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ScrollToTopButton />
        <StickyContactButtons />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/services" element={<Service />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
