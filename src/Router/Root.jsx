import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/SideBar/Sidebar";
import Navbar from "../Shared/Navbar/Navbar";


const Root = () => {
    return (
        <>
            <header>

                <section className="lg:grid lg:grid-cols-8">
                    <div className="lg:col-span-1 lg:border-r-2">
                        <Sidebar />
                        
                    </div>
    
                    
                    <div className="mt-10 lg:col-span-7 px-1 lg:px-10">
                        <Navbar />
                        <Outlet />
                    </div>
                </section>


            </header>
        </>
    );
};

export default Root;