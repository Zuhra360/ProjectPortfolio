import { Box } from "@mantine/core"
import airballoonlogo from "../../../../src/assets/images/airballoonlogo.png"
import iconfacebook from "../../../../src/assets/images/iconfacebook.png"
import iconX from "../../../../src/assets/images/iconX.png"
import iconemail from "../../../../src/assets/images/iconemail.png"
import iconlinkedin from "../../../../src/assets/images/iconlinkedin.png"

export const Footer = () => {
  return (
    <div className="bg-[#0077FF] w-full md:h-40 h-auto md:py-0 py-8 flex items-center justify-center md:flex-row flex-col border-t-2">
       <div className="md:w-10/12 md:h-10 h-auto gap-4 flex items-center md:flex-row flex-col">
         <Box className="w-56 h-full  flex flex-row items-center gap-2">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
            <img src={airballoonlogo}/>
          </div>
          <p className="text-white text-[25px] font-semibold leading-[25px]">AeroVision</p>
         </Box>

         <p className="md:w-3/5 text-[#79b1f2] text-base font-normal">© Copyright 2024. All Rights Reserved.</p>
         
         <div className="flex flex-row gap-2">
         <p className="md:px-2 md:w-56 text-lg font-semibold text-[#79b1f2]">FOLLOW US:</p>
          <img src={iconfacebook}/>
          <img src={iconX}/>
          <img src={iconemail}/>
          <img src={iconlinkedin}/>
         </div>



       </div>
       

    </div>
  )
}
