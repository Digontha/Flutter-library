import { NavLink } from "react-router-dom";
import logo from "../../../public/images/flutter-library-logo.png"
import { useState } from "react";
const Sidebar = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            <header className="p-10">

                <nav className="hidden lg:flex md:flex">
                    <section>
                        <section>
                            <div>
                                <img className="w-[120px] h-[24px]" src={logo} alt="" />
                            </div>
                        </section>

                        <section className="text-[14px]  mt-5 space-y-4 ">
                            <div>
                                <NavLink to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-medium bg-[#d94949]" : ""
                                    }><p>Discover</p></NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to="/uikit"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-medium bg-[#d94949]" : ""
                                    }
                                ><p>UI Kits</p></NavLink>
                            </div>
                            <div>
                                <NavLink
                                to="/screens"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium bg-[#d94949]" : ""
                                }
                                ><p>Screens</p></NavLink>
                            </div>
                            <div>
                                <NavLink
                                to="/articles"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium bg-[#d94949]" : ""
                                }
                                ><p>Articles</p></NavLink>
                            </div>
                            <div>
                                <NavLink
                                to="/uikit"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium bg-[#d94949]" : ""
                                }
                                ><p>Become Sponsor</p></NavLink>
                            </div>
                            <div>
                                <NavLink
                                to="/uikit"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "font-medium bg-[#d94949]" : ""
                                }
                                ><p>Hire Flutter Dev</p></NavLink>
                            </div>
                        </section>
                    </section>
                </nav>

                <div className="lg:hidden md:hidden">
                   
                    <button
                        className="fixed z-50 top-0 left-0 m-4 p-2 bg-gray-700 text-white rounded-full focus:outline-none"
                        onClick={toggleDrawer}
                    >
                        {isOpen ? 'Close' : 'Open'}
                    </button>

                    
                    <div
                        className={`fixed z-40 top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                            }`}
                    >
                        
                        <div className="p-4 bg-gray-800">Drawer Header</div>

                        
                        <nav className="mt-4">
                            <ul>
                                <li className="p-4 hover:bg-gray-800">Link 1</li>
                                <li className="p-4 hover:bg-gray-800">Link 2</li>
                                <li className="p-4 hover:bg-gray-800">Link 3</li>
                            </ul>
                        </nav>
                    </div>

                    
                    {isOpen && (
                        <div
                            className="fixed z-30 top-0 left-0 w-full h-full bg-black opacity-50"
                            onClick={toggleDrawer}
                        ></div>
                    )}
                </div>


            </header>

        </>
    );
};

export default Sidebar;