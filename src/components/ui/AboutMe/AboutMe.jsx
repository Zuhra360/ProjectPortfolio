import { Box } from "@mantine/core"
import profile2 from "../../../../src/assets/images/profile2.png"
import { Progress } from '@mantine/core';

export const AboutMe = () => {
  return (
    <div className="md:w-full md:h-[100%]  flex items-center justify-center md:flex-row flex-col py-8 relative">
      <div className="md:w-[627.91px] md:h-[623px]  flex items-center justify-center">
         <img src={profile2} className="md:w-[593px] md:h-[600px] w-[300px] h-[300px] rounded-[300px] border border-[#f2f2f2]"/>
      </div>
      <div className="md:w-[627.91px] md:h-[623px] ">
            <p className="text-xl font-semibold text-[#0077ff] text-center md:text-start">ABOUT ME</p>
            <div className="md:text-start md:w-full text-center">
            <span className="text-[#0077ff]  md:text-[50px] text-4xl font-bold">20 Year’s Experience <br/></span>
            <span className=" md:text-[50px] text-4xl font-bold  ">on Product Design</span>
            </div>
            <p className=" md:text-lg text-md font-normal text-gray-600 px-8 md:px-0 md:leading-[25px] pt-8 pb-12 md:text-start text-center justify-center"><span className="">Hello there! I'm <strong>Robert Junior. </strong>I specialize in web design and</span><br/>
            <span>development, and I'm deeply passionate and committed to my craft.</span><br/>
            <span>With <strong>20 years</strong> of experience as a professional graphic designer</span><br/></p>
            
            <div className="w-full h-auto relative bg-white flex flex-col gap-12">
                <div className=" flex  md:gap-12 gap-4 md:flex-row flex-col">
                  <button className="h-12 px-8 bg-[#0077ff] text-white rounded-full text-xl font-semibold">Main Skills</button>
                  <button className="h-12 px-12 bg-white border border-[#0077ff] text-[#0077ff] rounded-full text-xl font-semibold">Awards</button>
                  <button className="h-12 px-8 bg-white border border-[#0077ff] text-[#0077ff] rounded-full text-xl font-semibold">Education</button>
                </div>

                <div className="w-full md:h-48 ">
                  <Box className="w-full md:h-16 flex flex-col gap-2 ">
                        <p className="text-lg md:text-xl font-semibold md:leading-[30px]">User Experience Design - UI/UX</p>
                        <Progress radius="lg" size="xl" value={95} color="#0077FF" />
                  </Box>
                  <Box className="w-full md:h-16 flex flex-col gap-2 ">
                      <p className="text-lg md:text-xl font-semibold md:leading-[30px]">Web&User Interface Design-Development</p>
                      <Progress radius="lg" size="xl" value={85} color="#0077FF" />
                  </Box>
                  <Box className="w-full md:h-16 flex flex-col gap-2  ">
                      <p className="text-lg md:text-xl font-semibold md:leading-[30px]">Interaction Design - Animation</p>
                      <Progress radius="lg" size="xl" value={75} color="#0077FF" />
                  </Box>
                  
                </div>

            </div>
            
          
      </div>
       
    </div>
  )
}
//     