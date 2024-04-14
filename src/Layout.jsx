import { Outlet, Link } from "react-router-dom"
import "./App.css"

function Layout() {
    
    return (
        <>
            <div className="app">
                <h1>
                    <Link to="/">Netflix</Link>
                    <Outlet />
                </h1>
            </div>
        </>
    )
}
export default Layout