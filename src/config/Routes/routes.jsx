import { createBrowserRouter } from "react-router-dom";
import { Home } from "../../components/pages/Home";
import { HomePage } from "../../components/ui/HomePage/homePage";
import { AboutMe } from "../../components/ui/AboutMe/AboutMe";
import { Services } from "../../components/ui/Services/Services";
import { Contact } from "../../components/ui/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "HomePage",
    element: <HomePage />,
  },
  {
    path: "AboutMe",
    element: <AboutMe />,
  },
  {
    path: "Services",
    element: <Services />,
  },
  {
    path: "Contact",
    element: <Contact />,
  },

  
]);