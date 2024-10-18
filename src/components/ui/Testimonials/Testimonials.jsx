import { HiOutlineArrowLongLeft,HiOutlineArrowLongRight } from "react-icons/hi2";
import person1 from "../../../../src/assets/images/person1.png"
import person2 from "../../../../src/assets/images/person2.png"
import person3 from "../../../../src/assets/images/person3.png"
import person4 from "../../../../src/assets/images/person4.png"
import star from "../../../../src/assets/images/star.png"
export const Testimonials = () => {
  return (
    <div className="w-full  md:h-[100%] h-auto flex items-center justify-center  relative py-12 ">
        <div className=" md:w-10/12  md:h-5/6  flex items-center flex-col gap-9">
             <div className=" md:h-20  md:w-2/4  flex flex-col ">
               <h1 className=" md:h-1/3 text-center text-xl font-semibold font-roboto text-[#0078FF]">TESTIMONIALS</h1>
               <h1 className=" md:h-2/3 font-bold  md:text-5xl text-4xl text-black  md:leading[50px] text-center ">The Trust From Clients</h1>
             </div>
             <div className=" h-14  flex  flex-row  gap-6 justify-center ">
                <button className="w-14 h-14 rounded-full border border-[#0077ff] text-[#0077ff] hover:bg-[#0077FF] hover:text-white text-4xl font-light flex justify-center items-center"><HiOutlineArrowLongLeft /></button>
                <button className="w-14 h-14 rounded-full border border-[#0077ff] text-[#0077ff] hover:bg-[#0077FF] hover:text-white text-4xl font-light flex justify-center items-center"><HiOutlineArrowLongRight /></button>
            </div>

            <div className="w-full  md:h-3/4  flex flex-row justify-center gap-6">

                <div className="w-72 h-full py-2 bg-white border border-[#dddddd] rounded-lg flex items-center gap-2 flex-col">
                    <img src={person1} className="w-36 h-36 p-2"/>
                    <div className="flex items-center flex-row gap-1">
                         <img src={star}/>
                         <img src={star}/>
                         <img src={star}/>
                         <img src={star}/>
                         <img src={star}/>
                    </div>
                    <p className=" w-56 text-base font-normal ">Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor <br/>in eget neque vestibulum <br/> potenti tempus</p>
                    <div className="flex flex-col items-center">
                        <p className="uppercase font-bold text-base ">Savannah Nguyen</p>
                        <p className="text-[#666666] text-base font-normal">President of Sales</p>
                    </div> 
                </div>

                <div className="hidden  md:w-72  md:h-full  md:bg-white  md:border  md:border-[#dddddd]  md:rounded-lg  md:flex  md:items-center  md:gap-2  md:flex-col">
                    <img src={person2} className="w-36 h-36 p-2"/>
                    <div className="flex items-center flex-row gap-1">
                         <img src={star}/>
                         <img src={star}/>
                         <img src={star}/>
                         <img src={star}/>
                         <img src={star}/>
                    </div>
                    <p className=" w-56 text-base font-normal ">Lorem ipsum dolor sit amet consectetur. Tortor odio purus morbi amet. Donec bibendum et cursus felis sollicitudin vulputate cursus odio. Aliquam cursus eu in aliquam nisl</p>
                    <div className="flex flex-col items-center">
                        <p className="uppercase font-bold text-base "> Jenny Wilson</p>
                        <p className="text-[#666666] text-base font-normal">Medical Assistant</p>
                    </div> 
                </div>

                <div className="hidden  md:w-72  md:h-full  md:bg-white  md:border  md:border-[#dddddd]  md:rounded-lg  md:flex  md:items-center  md:gap-2  md:flex-col">
                    <img src={person3} className="w-36 h-36 p-2"/>
                    <div className="flex items-center flex-row gap-1">
                         <img src={star}/>
                         <img src={star}/>
                         <img src={star}/>
                         <img src={star}/>
                         <img src={star}/>
                    </div>
                    <p className=" w-56 text-base font-normal ">Lorem ipsum dolor sit amet consectetur. Purus commodo id id ut ultrices aliquam. Sit aliquet leo et lorem dignissim semper donec risus tempor. Varius ultricies dolor ultricies</p>
                    <div className="flex flex-col items-center">
                        <p className="uppercase font-bold text-base ">Esther Howard </p>
                        <p className="text-[#666666] text-base font-normal">Nursing Assistant</p>
                    </div> 
                </div>

                <div className="hidden  md:w-72  md:h-full  md:bg-white  md:border  md:border-[#dddddd]  md:rounded-lg  md:flex  md:items-center  md:gap-2  md:flex-col">
                    <img src={person4} className="w-36 h-36 p-2"/>
                    <div className="flex items-center flex-row gap-1">
                         <img src={star}/>
                         <img src={star}/>
                         <img src={star}/>
                         <img src={star}/>
                         <img src={star}/>
                    </div>
                    <p className=" w-56 text-base font-normal ">Lorem ipsum dolor sit amet consectetur. Eu velit tellus pellentesque tincidunt arcu convallis bibendum. Orci diam leo non molestie dictum orci pulvinar massa</p>
                    <div className="flex flex-col items-center">
                        <p className="uppercase font-bold text-base "> Cameron Williamson</p>
                        <p className="text-[#666666] text-base font-normal">Marketing Coordinator</p>
                    </div> 
                </div>

            </div>

        </div>

    </div>
  )
}
