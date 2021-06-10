export const Site = ({img, title, text, githublink,sitelink,classNames})=>{
    return(
        <div className={`d-flex ${classNames} justify-content-between sites my-3`}>
        <div className="my-site px-3">
            <img src={img} alt="" className="my-site-img" style={{borderRadius: ".5rem"}} data-aos="flip-left"/>
        </div>
        <div className="my-site-text d-flex flex-column" data-aos="zoom-in-down">
            <h1 className="h3">
                {title}
            </h1>
            <p >
                {text}
            </p>
            <div className="display-flex"  data-aos="zoom-out">
                <a href={githublink} className="btn btn-dark btn-source" target="blank">
                    <i className="fab fa-github source"></i>  Source
                </a>
                <a href={sitelink} className="btn btn-warning btn-source justify" target="blank">
                    <i className="fas fa-link source"></i>  Demo
                </a>
            </div>
            </div>
        </div>
    )
}
