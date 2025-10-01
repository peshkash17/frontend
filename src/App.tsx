import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ListingPage from "./pages/ListingPage"
import AddEditPage from "./pages/AddEditPage"
import ViewPage from "./pages/ViewPage"


function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-background">
        <div className="container mx-auto w-full px-4">
          <Routes>
            <Route path="/" element={<ListingPage />} />
            <Route path="/add" element={<AddEditPage />} />
            <Route path="/edit/:id" element={<AddEditPage />} />
            <Route path="/view/:id" element={<ViewPage />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            theme="dark"
            toastClassName="bg-card border border-border"
          />
        </div>
      </div>
    </Router>
  )
}

export default App
