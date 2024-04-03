import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/SideBar/Sidebar";


const Root = () => {
    return (
        <>
            <header>

                <section className="flex">
                    <div>
                        <Sidebar></Sidebar>
                    </div>

                    <div>
                        <Outlet></Outlet>
                    </div>
                </section>



                <section>

                </section>

            </header>
        </>
    );
};

export default Root;