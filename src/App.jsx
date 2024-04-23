import { BrowserRouter } from "react-router-dom";
import{ About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Certifications, Course } from './components';

const App = () => {
  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          {/* commented by sush */}
          {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
            <Navbar />
            {/* <Hero /> */}
          {/* </div> */}
          <About />
          <Experience />
          <Tech />
          <Works />
          <Certifications/> 
          <Course/> 
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
