import { AiOutlineFilter } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const ScreenCard = () => {
    return (
        <>
            <section>
                <div>
                    <p className="text-[20px] font-medium mb-3 mt-5">Screens</p>
                </div>

                <div className="flex gap-5">
                    <div className=" flex">
                        <p className="text-[14px] w-[100px] font-medium bg-[#F5F5F5] border-2 rounded-full text-center flex items-center gap-2 justify-center"><AiOutlineFilter></AiOutlineFilter> Filter</p>
                        <p className="border border-r-1 ml-4"></p>
                    </div>

                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-black rounded-full text-white" : ""
                            }
                        >
                            <p className="">All</p> 
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-black rounded-full " : ""
                            }
                        >
                            <p className="">Popular</p> 
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-black rounded-full text-black" : ""
                            }
                        >
                            <p className="">Onboarding</p> 
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-black rounded-full text-black" : ""
                            }
                        >
                            <p className="">Auth</p> 
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-black rounded-full text-black" : ""
                            }
                        >
                            <p className="">Shop</p> 
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-black rounded-full text-black" : ""
                            }
                        >
                            <p className="">Chat</p> 
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-black rounded-full text-black" : ""
                            }
                        >
                            <p className="">TOP Verification</p> 
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-black rounded-full text-black" : ""
                            }
                        >
                            <p className="">Dashboard</p> 
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-black rounded-full text-white" : ""
                            }
                        >
                            <p className="">Food</p> 
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-black rounded-full text-white" : ""
                            }
                        >
                            <p className="">Restaurant</p> 
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-black rounded-full text-white" : ""
                            }
                        >
                            <p className="">Fitness</p> 
                        </NavLink>
                    </div>
                



                </div>
            </section>
        </>
    );
};

export default ScreenCard;