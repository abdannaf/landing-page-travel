import { Routes, Route } from "react-router-dom";
import './index.css'
import Nav from './components/Nav'
import Hero from './pages/Hero'

function HomePage() {
  return (
    <>
      <div className="scroll-smooth">
      <Hero />
      </div>
    </>
  );
}

function App() {
  return (
    <div className="animate-page-in">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
