import './portfolio.styles.css'
import { Site } from './Site/Site'

export const Portfolio = ()=>{
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
            title: "",
            text: "",
            githublink: "",
            sitelink: "",
            classname: "flex-row-reverse"
        },
        {
            id: 3,
            img: "https://d33wubrfki0l68.cloudfront.net/5fae985c25cd5f00077a3a8b/screenshot.png",
            title: "",
            text: "",
            githublink: "",
            sitelink: "",
            classname: "flex-row"
        },
        {
            id: 4,
            img: "https://d33wubrfki0l68.cloudfront.net/5fafcadcf58291199479951c/screenshot.png",
            title: "",
            text: "",
            githublink: "",
            sitelink: "",
            classname: "flex-row-reverse"
        },
        {
            id: 5,
            img: "https://d33wubrfki0l68.cloudfront.net/5fbd2c3a4527ee220811d7d7/screenshot.png",
            title: "",
            text: "",
            githublink: "",
            sitelink: "",
            classname: "flex-row"
        },
        {
            id: 6,
            img: "https://d33wubrfki0l68.cloudfront.net/5fbd2cf6661376341c46e2b8/screenshot.png",
            title: "",
            text: "",
            githublink: "",
            sitelink: "",
            classname: "flex-row-reverse"
        },
        {
            id: 7,
            img: "https://d33wubrfki0l68.cloudfront.net/5fd4b3a5c7bb9900070b936f/screenshot.png",
            title: "",
            text: "",
            githublink: "",
            sitelink: "",
            classname: "flex-row"
        },
        {
            id: 8,
            img: "https://d33wubrfki0l68.cloudfront.net/5fec6e8a18a4e5361c68e053/screenshot.png",
            title: "",
            text: "",
            githublink: "",
            sitelink: "",
            classname: "flex-row-reverse"
        },
        {
            id: 9,
            img: "https://d33wubrfki0l68.cloudfront.net/60324248cb9bec13a5cba1cd/screenshot.png",
            title: "",
            text: "",
            githublink: "",
            sitelink: "",
            classname: "flex-row"
        },
        {
            id: 10,
            img: "https://d33wubrfki0l68.cloudfront.net/604e416f2ae6c10007c3b19c/screenshot.png",
            title: "",
            text: "",
            githublink: "",
            sitelink: "",
            classname: "flex-row-reverse"
        }
    ]
    return(
    <div className="d-flex flex-column container">
        <div className="portfolio">
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
        </div>
    </div>
    )
}