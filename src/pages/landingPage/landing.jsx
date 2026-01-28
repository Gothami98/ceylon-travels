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


export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Welcome />
      <WhySriLanka />
      <Destinations />
      <TourPackages />
      <Experiences />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}
