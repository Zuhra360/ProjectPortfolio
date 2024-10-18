import { Box } from "@mantine/core"
import contactbg from "../../../../src/assets/images/contactbg.png"
import contactbg2 from "../../../../src/assets/images/contactbg2.png"

export const Contact = () => {
  return (
    <div className="w-full md:h-[100%] h-auto flex items-center justify-center md:gap-14 gp-6 bg-[#0077FF] flex-col relative   bg-no-repeat  "
    style={{
      backgroundImage: `url(${contactbg}), url(${contactbg2})`,
      backgroundPosition: 'left bottom, right top',
      backgroundSize: ' auto',
    }} >
       
         <div className="md:h-24 md:w-2/4 py-12 flex items-center justify-center  flex-col">
           <h1 className="text-xl font-semibold text-white ">CONTACT ME</h1>
           <h1 className="md:text-[50px] text-center text-4xl font-bold text-white">Request Free Consultancy</h1>
         </div>

         <div className="md:h-3/5 w-full  flex justify-center items-center md:items-start md:flex-row flex-col gap-8 ">
            <Box className="md:h-64 md:w-4/12 w-11/12 p-8 bg-white rounded-[20px] flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className=" text-[#333333]  text-base font-bold leading-tight">Hotline 24/7</p>
                <p className=" text-[#333333] text-2xl font-bold leading-[30px]">(+23) 5535 68 68</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[#333333] text-base font-normal leading-relaxed"><strong>Address:</strong> 2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                <p className="text-[#333333] text-base font-normal leading-relaxed"><strong>Email:</strong> nevaeh.simmons@example.com</p>
                <p className="text-[#333333] text-base font-normal leading-relaxed"><strong>Fax:</strong>  (702) 555-0122</p>
                <p className="text-[#333333] text-base font-normal leading-relaxed"><strong>Work Hour:</strong> Mon - Sat: 9:00 - 18:00</p>
              </div>
            </Box>

            <Box className="md:h-full h-auto md:w-4/12 w-full p-2  rounded-[20px] flex  flex-col gap-2 ">
                <div className="w-full md:h-12 h-auto flex md:flex-row flex-col gap-2">
                  <input 
                  name="name"
                  placeholder="Name*"
                  className="md:w-1/2  h-full p-2 border border-[#666666] text-[#666666] text-base rounded-lg"/>
                  <input 
                  name="email"
                  placeholder="Email Address*"
                  className="md:w-1/2 h-full p-2 border border-[#666666] text-[#666666] text-base rounded-lg"/>
                </div>
                <input 
                  name="text"
                  placeholder="How can we help you?"
                  className="w-full h-12 p-2 border border-[#666666] text-[#666666] text-base rounded-lg"/>
                
                <input 
                  name="text"
                  placeholder="How can we help you?"
                  className="w-full h-32  p-2 border border-[#666666] text-[#666666] text-base items-start rounded-lg"/>

                <div className="flex flex-row gap-2 p-2">
                    <input type="checkbox" className="rounded-lg transform scale-150" />
                    <p className="text-[#e9efff] text-sm font-normal leading-[14px] ">By submitting, i’m agreed to the <a className="underline ">Terms & Conditons</a></p>
                </div>
                 
                <button className="md:w-56 px-8 py-3 rounded-full text-white text-xl font-bold bg-[#00489A]">Request Now</button>
                
            </Box>

         </div>




    </div>
  )
}
