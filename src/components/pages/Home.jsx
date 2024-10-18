
import { Navbar } from '../ui/Navbar/Navbar'
import { HomePage } from '../ui/HomePage/homePage'
import { Footer } from '../ui/Footer/Footer'
import { AboutMe } from '../ui/AboutMe/AboutMe'
import { Services } from '../ui/Services/Services'
import { MileStone } from '../ui/MileStone/MileStone'
import { Projects } from '../ui/Projects/Projects'
import { Testimonials } from '../ui/Testimonials/Testimonials'
import { Contact } from '../ui/Contact/Contact'
import { Software } from '../ui/Software/Software'


export const Home = () => {
 
  return (
    <div className='w-full h-screen '>
      <Navbar  />
      <HomePage/>
      <Software/>
      <AboutMe/>
      <Services/>
      <MileStone/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </div>
  )
}
