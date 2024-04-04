import logo from "../../../public/images/flutter-library-logo.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <>


            <footer className="flex items-center justify-between px-10">

                <section className="space-y-5 my-10">

                    <div>
                        <img className="w-[120px] h-[25px]" src={logo} alt="" />
                    </div>

                    <div>
                        <p className="text-[#989898] text-[16px] font-normal mt-3">
                            Beautifully designed, expertly crafted Flutter components and templates, to jumpstart <br />
                            your projects and speed up your development process.
                        </p>
                    </div>

                    <div className="flex items-center gap-5">
                        <div >
                            <FaXTwitter className="text-[25px] bg-black text-white w-[40px] h-[40px] p-2 rounded-full  cursor-pointer"></FaXTwitter>
                        </div>
                        <div>
                            <FaLinkedin className="text-[25px] bg-black text-white w-[40px] h-[40px] p-2 rounded-full  cursor-pointer"></FaLinkedin>
                        </div>
                        <div>
                            <FaInstagram className="text-[25px] bg-black text-white w-[40px] h-[40px] p-2 rounded-full  cursor-pointer"></FaInstagram>
                        </div>
                        <div>
                            <FaFacebook className="text-[25px] bg-black text-white w-[40px] h-[40px] p-2 rounded-full  cursor-pointer"></FaFacebook>
                        </div>
                    </div>

                </section>


                <section className="flex items-center gap-10">
                    <div className="space-y-3">
                        <p className="font-medium  cursor-pointer">Explore</p>
                        <p className="font-normal  cursor-pointer">Blog</p>
                        <p className="font-normal  cursor-pointer">Templates</p>
                        <p className="font-normal  cursor-pointer">Screens</p>
                    </div>

                    <div className="space-y-3">
                        <p className="font-medium  cursor-pointer">Support</p>
                        <p className="font-normal  cursor-pointer">Pricing</p>
                        <p className="font-normal  cursor-pointer">Become a sponsor</p>
                        <p className="font-normal  cursor-pointer">Hire top Flutter Devs</p>
                    </div>
                </section>


            </footer>
        </>
    );
};

export default Footer;