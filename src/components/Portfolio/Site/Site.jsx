export const Site = ({img, title, text, githublink,sitelink,classNames})=>{
    return(
        <div className={`d-flex ${classNames} justify-content-between sites`}>
        <div className="my-site">
            <img src={img} alt="" className="my-site-img" />
        </div>
        <div className="my-site-text d-flex flex-column">
            <h1 className="h3">
                {title}
            </h1>
            <p>
                {text}
            </p>
            <div className="display-flex">
                <a href={githublink} className="btn btn-dark btn-source">
                    <i className="fab fa-github source"></i>  Source
                </a>
                <a href={sitelink} className="btn btn-warning btn-source justify">
                    <i className="fas fa-link source"></i>  Demo
                </a>
            </div>
            </div>
        </div>
    )
}