import logo1 from "../../../../src/assets/images/logo-1.png"
import logo2 from "../../../../src/assets/images/logo-2.png"
import logo3 from "../../../../src/assets/images/logo-3.png"
import logo4 from "../../../../src/assets/images/logo-4.png"
import logo5 from "../../../../src/assets/images/logo-5.png"

export const Software = () => {
  return (
    <div className="bg-gray-200 w-full md:h-44 flex items-center justify-center md:flex-row flex-col gap-8 py-4">
        <img src={logo1}/>
        <img src={logo2}/>
        <img src={logo3}/>
        <img src={logo4}/>
        <img src={logo5}/>

    </div>
  )
}
