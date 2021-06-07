import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);

    return (
        <div className="about" data-aos="fade-down">
            <h1>About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid assumenda maiores dolore optio nulla illo omnis eligendi eaque laudantium ipsum esse, at ducimus! Placeat maiores laudantium nesciunt sit aspernatur, impedit rerum debitis mollitia fuga repellat. Repudiandae reiciendis perferendis expedita asperiores sint numquam, laborum dolor veniam, fugit in ut sit.</p>
            <div className="wallpaper">
                <h1>My name is Muhammad Siddiq</h1>
                <p>I live in Tashkent. I am Front End developer. I am 15 years old. My birthday in 18 february. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque culpa cupiditate nisi expedita corporis tempora itaque dignissimos perferendis magnam quo?</p>
            </div>
            <div><p>This is beta version <code>1.0.0</code></p> <br/> by Muhammad Siddiq &copy; 2021-{new Date().getFullYear()}</div>
        </div>
    );
}
 
export default About;