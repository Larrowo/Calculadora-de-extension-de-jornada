import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <nav className="flex w-full h-12 gap-4 p-5 text-white bg-gray-800">
        <a href="/" className="hover:text-blue-300">Home</a>
        <a href="/login" className="hover:text-blue-300">Login</a>
      </nav>

      <main className="flex-1 p-4">
        <Outlet />  
      </main>
    </div>
  )
} 

export default Layout;
