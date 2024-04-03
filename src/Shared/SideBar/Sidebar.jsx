import { NavLink } from "react-router-dom";
import logo from "../../../public/images/flutter-library-logo.png"
import { useState } from "react";
import { TbVector } from "react-icons/tb";
import { IoIosMedkit } from "react-icons/io";
import { CgScreenShot } from "react-icons/cg";
import { FaCode } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";
import { GiCrossedBones } from "react-icons/gi";
const Sidebar = () => {


    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>

            <header className="lg:p-10">

                <nav className="hidden lg:flex ">
                    <section>
                        <section>
                            <div className="mr-2">
                                <img className="w-[130px] h-[28px]" src={logo} alt="" />
                            </div>
                        </section>

                        <section className="text-[14px]  mt-5 space-y-4 ">
                            <div>
                                <NavLink to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-medium bg-slate-400" : "text-[#989898]"
                                    }><p className="flex items-center gap-2"><TbVector></TbVector> Discover</p></NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to="/uikit"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-medium bg-slate-400" : "text-[#989898]"
                                    }
                                ><p className="flex items-center gap-2"><IoIosMedkit></IoIosMedkit> UI Kits</p></NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to="/screens"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-medium bg-slate-400" : "text-[#989898]"
                                    }
                                ><p className="flex items-center gap-2"><CgScreenShot></CgScreenShot> Screens</p></NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to="/articles"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-medium bg-slate-400" : "text-[#989898]"
                                    }
                                ><p className="flex items-center gap-2"><FaCode></FaCode> Articles</p></NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to="/becomeSponsor"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-medium bg-slate-400" : "text-[#989898]"
                                    }
                                ><p className="flex items-center gap-2"><GiSelfLove></GiSelfLove> Become Sponsor</p></NavLink>
                            </div>
                            <div>
                                <NavLink
                                    to="/hireFlutterDev"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "font-medium bg-[#d94949]" : "text-[#989898]"
                                    }
                                ><p className="flex items-center gap-2"><IoMdPeople></IoMdPeople> Hire Flutter Dev</p></NavLink>
                            </div>
                        </section>

                        <section className="mt-8">
                            <div>
                                <p className="text-[14px] font-medium">All Screens</p>
                            </div>

                            <div className="text-[14px]  mt-5 space-y-4 ml-3">
                                <div className="flex gap-10">
                                    <NavLink
                                        to="/signIn"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "font-medium bg-[#d94949]" : "text-[#989898]"
                                        }
                                    ><p className="flex items-center gap-2 w-20">Sign in</p></NavLink>
                                    <p className="text-[#989898]">10</p>
                                </div>
                                <div className="flex gap-10">
                                    <NavLink
                                        to="/chat"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "font-medium bg-[#d94949]" : "text-[#989898]"
                                        }
                                    ><p className="flex items-center gap-2 w-20">Chat</p></NavLink>
                                    <p className="text-[#989898]">20</p>
                                </div>
                                <div className="flex gap-10">
                                    <NavLink
                                        to="/onboarding"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "font-medium bg-[#d94949]" : "text-[#989898]"
                                        }
                                    ><p className="flex items-center gap-2 w-20">Onboarding</p></NavLink>
                                     <p className="text-[#989898]">30</p>
                                </div>
                                <div className="flex gap-10">
                                    <NavLink
                                        to="/e-commerce"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "font-medium bg-[#d94949]" : "text-[#989898]"
                                        }
                                    ><p className="flex items-center gap-2 w-20">E-commerce</p></NavLink>
                                     <p className="text-[#989898]">24</p>
                                </div>
                                <div className="flex gap-10">
                                    <NavLink
                                        to="/checkout"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "font-medium bg-[#d94949]" : "text-[#989898]"
                                        }
                                    ><p className="flex items-center gap-2 w-20">Checkout</p></NavLink>
                                     <p className="text-[#989898]">18</p>
                                </div>
                                <div className="flex gap-10">
                                    <NavLink
                                        to="/error"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "font-medium bg-[#d94949]" : "text-[#989898]"
                                        }
                                    ><p className="flex items-center gap-2 w-20">Error</p></NavLink>
                                     <p className="text-[#989898]">3</p>
                                </div>
                            </div>

                        </section>
                    </section>
                </nav>

                <div className="lg:hidden">

                    <button
                        className="fixed z-50 top-0 left-0 m-4 p-2 bg-gray-700 text-white rounded-full focus:outline-none"
                        onClick={toggleDrawer}
                    >
                        {isOpen ? <p><GiCrossedBones></GiCrossedBones></p> : <p><IoReorderThree></IoReorderThree></p>}
                    </button>


                    <div
                        className={`fixed z-40 top-0 left-0 h-full w-64 bg-gray-900 text-white transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                            }`}
                    >

                        <div className="p-4 bg-gray-300"><img src={logo} alt="" /></div>


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