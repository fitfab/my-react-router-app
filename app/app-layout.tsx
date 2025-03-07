import React from "react"
import { Outlet } from "react-router"
import Footer from "./components/Footer"
import Header from "./components/Header"

const AppLayout: React.FC = () => {
  return (
    <div className="container mt-auto mb-auto">
      <Header />
      <main className="p-4 bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
