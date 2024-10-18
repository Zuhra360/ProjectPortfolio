import preview1 from "../../../../src/assets/images/preview1.png"
import preview2 from "../../../../src/assets/images/preview2.png"
import preview3 from "../../../../src/assets/images/preview3.png"
import preview4 from "../../../../src/assets/images/preview4.png"
import preview5 from "../../../../src/assets/images/preview5.png"
import preview6 from "../../../../src/assets/images/preview6.png"


export const Projects = () => {
  return (
    <div className='w-full h-auto  py-8  flex items-center  flex-col relative gap-14' >
       <div className=' md:w-10/12  md:h-36 text-center'>
         <h1 className=' md:h-1/3 text-center text-xl font-semibold font-roboto text-[#0078FF]'>OUR PROJECTS</h1>
         <h1 className=' md:h-2/3 font-bold  md:text-5xl text-4xl text-black  md:leading[50px] text-center '>Presenting My Design <br/> Portfolio and Case Studies</h1>
       </div>

       <div className=' md:h-14  md:w-10/12 w-auto  md:flex items-center justify-center  md:flex-row grid grid-rows-2 grid-cols-2  md:gap-8 gap-2'>
            <button className="h-12  md:px-16  bg-[#0077ff] text-white rounded-full md:text-2xl text-lg font-semibold">All</button>
            <button className="h-12  md:px-8  bg-white border border-[#0077ff] text-[#0077ff] rounded-full md:text-2xl text-lg font-semibold">UI/UX Design</button>
            <button className="h-12  md:px-8 w-40 md:w-auto bg-white border border-[#0077ff] text-[#0077ff] rounded-full md:text-2xl text-lg font-semibold">Branding Design</button>
            <button className="h-12  md:px-8 px-2 bg-white border border-[#0077ff] text-[#0077ff] rounded-full md:text-2xl text-lg font-semibold">Wordpress</button>
       </div>

       <div className='  md:w-10/12  md:h-[764px]  grid  md:grid-cols-3  md:grid-rows-2 grid-rows-6 grid-cols-1 gap-8 '>
            <img src={preview1}/>
            <img src={preview2}/>
            <img src={preview3}/>
            <img src={preview4}/>
            <img src={preview5}/>
            <img src={preview6}/>

       </div>

    </div>
  )
}
