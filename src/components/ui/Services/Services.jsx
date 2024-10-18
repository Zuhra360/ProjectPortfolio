
import { HiOutlineArrowLongLeft,HiOutlineArrowLongRight } from "react-icons/hi2";
import servicelogo from "../../../../src/assets/images/servicelogo.png"
import servicelogo2 from "../../../../src/assets/images/servicelogo2.png"


export const Services = () => {
  return (
    <div className="md:w-full md:h-[100%]  flex items-center  flex-col relative gap-12 md:pt-4 py-12 ">
       <div className="md:h-44 md:w-11/12  flex items-center flex-col gap-4  pb-12">
          <h1 className="text-xl font-semibold text-center text-[#0078ff] ">SERVICES</h1>
          <div className="font-poppins text-center ">
            <span className=" md:text-[50px] text-4xl font-bold   ">Exploring My Design </span>
            <span className="text-[#0077ff]  md:text-[50px] text-4xl font-bold"> Skills</span>
          </div>
          <p className=" md:h-20  text-center text-gray-600 text-xl font-normal  md:leading-[25px] font-sans">We transform your ideas into a distinctive web project that both inspires <br/> you and captivates your customers</p>
       </div>
       
       <div className="w-11/12 h-14  flex  flex-row  gap-6  md:justify-end justify-center ">
          <button className="w-14 h-14 rounded-full border border-[#0077ff] text-[#0077ff] hover:bg-[#0077FF] hover:text-white text-4xl font-light flex justify-center items-center"><HiOutlineArrowLongLeft /></button>
          <button className="w-14 h-14 rounded-full border border-[#0077ff] text-[#0077ff] hover:bg-[#0077FF] hover:text-white text-4xl font-light flex justify-center items-center"><HiOutlineArrowLongRight /></button>
       </div>

       <div className=" md:w-11/12  md:h-96  flex md:flex-row  gap-10">
          <div className=" md:w-96  ml-8 bg-[#0077FF] rounded-lg ">
            <img src={servicelogo} className="p-8 " />
            <h1 className="w-80  text-white text-[25px] font-bold  leading-[30px] px-8">Website / App Design UX / UI Design</h1>
            <p className="text-white text-lg  font-normal leading-7 px-8 py-4">Creating Engaging Digital Experiences <br/> for Websites and Apps through UX/UI <br/> Design</p>
            <div className="flex flex-row  gap-4 items-center ">
              <p className="text-white text-lg font-normal leading-7 pl-8 py-6">Learn More </p>
              <HiOutlineArrowLongRight className="text-white text-4xl"  />
            </div>
          </div>

          <div className="hidden md:block md:w-96 md:ml-8 md:bg-white  md:rounded-lg md:border md:border-[#DDDDDD]">
            <img src={servicelogo2} className="p-8 text-[#0077ff] " />
            <h1 className="w-80  text-black  text-[25px] font-bold  leading-[30px] px-8">Strategic Marketing and Creative Content</h1>
            <p className=" text-lg font-normal leading-7 px-8 py-4 text-gray-600">Elevating Brands and Engagement <br/> through Strategic Marketing <br/> and Creative Content</p>
            <div className="flex flex-row  gap-4 items-center ">
              <p className="text-[#0077ff] text-lg font-normal leading-7 pl-8 py-6">Learn More </p>
              <HiOutlineArrowLongRight className="text-[#0077FF] text-4xl"  />
            </div>
          </div>

          <div className=" hidden md:block  md:w-96 md:ml-8 md:bg-white  md:rounded-lg md:border md:border-[#DDDDDD]">
            <img src={servicelogo2} className="p-8 text-[#0077ff] " />
            <h1 className="  text-black text-[25px] font-bold  leading-[30px] px-8">Multivendor eCommerce Website Solutions</h1>
            <p className="text-gray-600 text-lg font-normal leading-7 px-8 py-6">Unlocking the World of Multivendor eCommerce Websites</p>
            <div className="flex flex-row  gap-4 items-center ">
              <p className="text-[#0077ff] text-lg font-normal leading-7 pl-8 py-8">Learn More </p>
              <HiOutlineArrowLongRight className="text-[#0077FF] text-4xl"  />
            </div>
          </div>
       </div>




    </div>
  )
}
