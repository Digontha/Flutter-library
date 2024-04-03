import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/SideBar/Sidebar";
import Navbar from "../Shared/Navbar/Navbar";


const Root = () => {
    return (
        <>
            <header>

                <section className="grid grid-cols-8">
                    <div className="col-span-1 md:border-r-2">
                        <Sidebar />
                        
                    </div>
    
                    
                    <div className="mt-10 col-span-7 px-10">
                        <Navbar />
                        <Outlet />
                    </div>
                </section>


            </header>
        </>
    );
};

export default Root;