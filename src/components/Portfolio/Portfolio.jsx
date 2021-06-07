import './portfolio.styles.css'
import { Site } from './Site/Site'
import {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const Portfolio = ()=>{
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);
    const sites = [
        {
            id: 1,
            img: "https://d33wubrfki0l68.cloudfront.net/5fa80c1d745e530008b1eda3/screenshot.png",
            title: "Simple Task App",
            text: "Simple Task App for make your tasks simple and minimal. I created it with HTML, CSS, JavaScript and Material UI.",
            githublink: "https://github.com/MuhammadSiddiq-pyxel/simple-task-app",
            sitelink: "https://simple-task-app.netlify.app/",
            classname: "flex-row"
        },
        {
            id: 2,
            img: "https://d33wubrfki0l68.cloudfront.net/5fa8e5c338c2aa4279c9dd6d/screenshot.png",
            title: "Loan Calculator App",
            text: "This Calculator can help for you for calculate loans. I created it with HTML, CSS, JavaScript and Bootstrap.",
            githublink: "https://github.com/MuhammadSiddiq-pyxel/loan-calculator",
            sitelink: "https://loan-calculatorms.netlify.app/",
            classname: "flex-row-reverse"
        },
        {
            id: 3,
            img: "https://d33wubrfki0l68.cloudfront.net/5fae985c25cd5f00077a3a8b/screenshot.png",
            title: "BMI (Body Mass Index) Calculator",
            text: "BMI can calculate your weight is light, normal or overweight. I created it with HTML, CSS, JavaScript and Material UI.",
            githublink: "https://github.com/MuhammadSiddiq-pyxel/bmi-project",
            sitelink: "https://bmiproject.netlify.app/",
            classname: "flex-row"
        },
        {
            id: 4,
            img: "https://d33wubrfki0l68.cloudfront.net/5fafcadcf58291199479951c/screenshot.png",
            title: "Book List Maker",
            text: "It can sort your read books. I created it with HTML, CSS, JavaScript and Skeleton UI.",
            githublink: "https://github.com/MuhammadSiddiq-pyxel/book-list-project",
            sitelink: "https://booklistms.netlify.app/",
            classname: "flex-row-reverse"
        },
        {
            id: 5,
            img: "https://d33wubrfki0l68.cloudfront.net/5fbd2c3a4527ee220811d7d7/screenshot.png",
            title: "Calculator Quantities",
            text: "If you type Kilometr, it can Calculate it to metre, cantimetre and millimetre. I created it with HTML, CSS, JavaScript and Bootstrap.",
            githublink: "https://github.com/MuhammadSiddiq-pyxel/converter-quantities",
            sitelink: "https://converter-quantities.netlify.app/",
            classname: "flex-row"
        },
        {
            id: 6,
            img: "https://d33wubrfki0l68.cloudfront.net/5fbd2cf6661376341c46e2b8/screenshot.png",
            title: "Converter of Currency",
            text: "This is my Uzbek app. It can calculate Currencies like Euro, Rubl and US Dollar to So'm. I created it with HTML, CSS, JavaScript and Bootstrap.",
            githublink: "https://github.com/MuhammadSiddiq-pyxel/currency-converter-uzbek",
            sitelink: "https://valyuta-konverteri.netlify.app/",
            classname: "flex-row-reverse"
        },
        {
            id: 7,
            img: "https://d33wubrfki0l68.cloudfront.net/5fd4b3a5c7bb9900070b936f/screenshot.png",
            title: "Github Finder",
            text: "This App can help you Find Github Users. I created it with HTML, CSS and JavaScript.",
            githublink: "https://github.com/MuhammadSiddiq-pyxel/findergithub",
            sitelink: "https://findergithub1.netlify.app/",
            classname: "flex-row"
        },
        {
            id: 8,
            img: "https://d33wubrfki0l68.cloudfront.net/5fec6e8a18a4e5361c68e053/screenshot.png",
            title: "Snake Game",
            text: "This is my first game. You can play this game from your computer (it's not playing in mobile phone). I created it with HTML, CSS and JavaScript.",
            githublink: "https://github.com/MuhammadSiddiq-pyxel/snake-game",
            sitelink: "https://snakegame1.netlify.app/",
            classname: "flex-row-reverse"
        },
        {
            id: 9,
            img: "https://d33wubrfki0l68.cloudfront.net/60324248cb9bec13a5cba1cd/screenshot.png",
            title: "Math Square Root Calculator",
            text: "You can calculate your number Squeare Root from this app. I created it with HTML, CSS and JavaScript.",
            githublink: "https://github.com/MuhammadSiddiq-pyxel/MathSqrt-app",
            sitelink: "https://math-sqrt.netlify.app/",
            classname: "flex-row"
        },
        {
            id: 10,
            img: "https://d33wubrfki0l68.cloudfront.net/604e416f2ae6c10007c3b19c/screenshot.png",
            title: "Github Searcher",
            text: "This App can help you Find Github Users. I created it with React JS. ",
            githublink: "https://github.com/MuhammadSiddiq-pyxel/searchgithub",
            sitelink: "https://searchgithub-pyxel.netlify.app/",
            classname: "flex-row-reverse"
        }
    ]
    return(
    <div className="d-flex flex-column container">
        <div className="portfolio mt-2">
        <h3 className="h2 text-center">
            Portfolio
        </h3>
        <h1 className="h4 text-center text-gray">
            Check My Portfolios
        </h1>     
        </div>
        <div className="display-flex flex-column">
            {sites.map(site=>(
                <div key={site.id}>
                <Site
                    classNames={site.classname} 
                    img={site.img}
                    title={site.title}
                    text={site.text}
                    githublink={site.githublink}
                    sitelink={site.sitelink}
                />
                </div>
            ))}
            <h1 className="text-center h2">You can find a lot of Apps from my <a href="https://github.com/MuhammadSiddiq-pyxel">Github Profile</a>.</h1>
        </div>
    </div>
    )
}