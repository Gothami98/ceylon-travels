import {Header} from "./component/Header.jsx"
import {Hero} from "./component/Hero.jsx"
import {Welcome} from "./component/Welcome.jsx"
import {WhySriLanka} from "./component/WhySriLanka.jsx"
import {Destinations} from "./component/Destinations.jsx"
import {TourPackages} from "./component/TourPackages.jsx"
import {Experiences} from "./component/Experiences.jsx"
import {Blog} from "./component/Blog.jsx"
import {Contact} from "./component/Contact.jsx"
import {Footer} from "./component/Footer.jsx"
import WhatsAppFab from "@/components/ui/WhatsAppFab";
import WhyShowcase from "./component/Whyshowcase.jsx"


export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Welcome />
      <WhySriLanka />
      <WhyShowcase />
      <Destinations />
      <TourPackages />
      <Experiences />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
