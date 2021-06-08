import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);
    return (
        <div className="contact display-flex justify-content-center align-items-center flex-column py-5 px-2" data-aos="zoom-in-down">
            <h1 className="text-center h4">You Can Contact from my Email:</h1>
            <h1 className="h2 text-center pb-5"><a href="mailto:Breakingreport4@gmail.com">My Email ! (Click to the Text)</a></h1>
        </div>
    )
}

export default Contact
