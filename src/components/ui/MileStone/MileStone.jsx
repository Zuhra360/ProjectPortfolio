import milestonebg from "../../../../src/assets/images/milestonebg.png"

export const MileStone = () => {
  return (
    <div className="w-[100%]  md:h-full h-auto flex items-center justify-center">
        <div className=' md:h-5/6  w-full h-auto flex items-center py-8  flex-col md:gap-20 gap-16 relative bg-[#0077FF] bg-auto bg-right bg-no-repeat overflow-hidden '
    style={{ backgroundImage: `url(${milestonebg})` }}>
        
        <div className=" md:w-3/5 md:h-40 gap-6  mt-16 flex items-center flex-col ">
              <h1 className="text-[#e9efff] text-xl font-semibold">OUR MILESTONES</h1>
              <h1 className="text-white  text-[50px] font-bold leading-[50px] text-center">What sets our studio apart <br/> for your projects?</h1>
        </div>

        <div className=" md:w-10/12  md:h-44  flex  md:flex-row flex-col  md:gap-9 gap-6 ">

           <div className="w-72 h-44 flex items-center justify-center flex-col gap-6 bg-white rounded-[20px]">
             <p className="text-[50px] leading-[50px] font-bold text-center text-[#333333]">8300+</p>
             <p className="text-xl font-semibold text-center text-[#333333]">Figma ipsum component variant main layer. Hand.</p>
           </div>

           <div className="w-72 h-44 flex items-center justify-center flex-col gap-6 bg-white rounded-[20px]">
             <p className="text-[50px] leading-[50px] font-bold text-center text-[#333333]">100%</p>
             <p className="text-xl font-semibold text-center text-[#333333]">Figma ipsum component variant main layer. Union.</p>
           </div>

           <div className="w-72 h-44 flex items-center justify-center flex-col gap-6 bg-white rounded-[20px]">
             <p className="text-[50px] leading-[50px] font-bold text-center text-[#333333]">3.5K</p>
             <p className="text-xl font-semibold text-center text-[#333333]">Figma ipsum component variant main layer.</p>
           </div>

           <div className="w-72 h-44 flex items-center justify-center flex-col gap-6 bg-white rounded-[20px]">
             <p className="text-[50px] leading-[50px] font-bold text-center text-[#333333]">240+</p>
             <p className="text-xl font-semibold text-center text-[#333333]">Figma ipsum component variant main layer.
             </p>
           </div>

        </div>
    
    </div>

    </div>
    
   
  )
}
