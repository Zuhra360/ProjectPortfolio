
import dicon from "../../../../src/assets/images/icon-download.png"
import profile from "../../../../src/assets/images/profile.png"

export const HomePage = () => {
  return (
    <div className="md:w-full md:h-full flex justify-center items-center  flex-col py-8">
     
       <div className="h-auto md:h-3/5 w-11/12 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-36">

         <div className="w-full md:w-6/12 text-center md:text-left flex flex-col items-center md:items-start">
           <h3 className="font-semibold  text-[25px]  px-2">Welcome to my Portfolio</h3>
           <div className="w-full h-auto text-4xl md:text-6xl font-bold leading-[50px] md:leading-[75px] font-['WorkSans']">
            <span>Hi I’m  <br/></span>
            <span className="text-[#0077ff] text-[50px] md:text-[70px]">Robert Junior<br/></span>
            <span>Product Designer <br/></span>
            </div>
            <p className="text-lg md:text-[25px] font-normal text-gray-600 leading-[30px] md:leading-[35px] px-2">
                <span>Collaborating with highly skilled individuals,<br/></span>
                <span> our agency delivers top-quality services.</span>
            </p>

            <div className="flex flex-col w-full md:flex-row py-6 items-center text-center gap-6 md:gap-12 md:px-2">
                <button className="bg-[#07F] text-white text-lg rounded-full w-full md:w-44 md:px-8 py-2 font-semibold">Hire Me!</button>
                <button className="flex flex-row gap-1 text-[#0077ff] text-xl font-semibold items-center justify-center w-full md:w-56  md:px-8 py-2 rounded-full border border-[#0077ff] ">Download CV <img src={dicon} className="text-md"/></button>
            </div>

         </div>

         <div className="w-full md:w-6/12 flex justify-center">
            <img src={profile} className="w-[300px] h-[300px] md:w-[453px] md:h-[460px] rounded-[300px] border border-[#f2f2f2]"/>

         </div>

       </div>


       
    </div>
  )
}
