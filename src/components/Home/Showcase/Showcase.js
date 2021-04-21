import { useEffect } from "react";
import Button from 'react-bootstrap/Button'
import AOS from "aos";
import "aos/dist/aos.css";

const Showcase = () => {
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);

    return (
        <div className="showcase">
            <div className="showcase-content" data-aos="fade-up">
            <h2>Muhammad Siddiq Ibragimov</h2>
            <p>FrontEnd Developer</p>
            <a href="https://muhammadsiddiqblog.netlify.app"><Button variant="primary">My Blog Soon</Button>{' '}</a>
            </div>
        </div>
    )
}

export default Showcase
