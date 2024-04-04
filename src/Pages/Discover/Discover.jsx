import Header from "../../Component/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import TemplateCard from "./TemplateCard/TemplateCard";


const Discover = () => {
    return (
        <>
            <div>
                <div className="text-center lg:text-[40px] text-[20px] lg:mt-20 mt-5">
                    <Header></Header>
                </div>
                <p className="text-center text-[#989898] text-[16px] font-normal mt-3">Beautifully designed, expertly crafted Flutter components and templates, to
                   
                    jumpstart  <br /> your projects and speed up your development process.</p>
            </div>

            <div>
                <TemplateCard></TemplateCard>
            </div>

            
        </>
    );
};

export default Discover;