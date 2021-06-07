import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        
        <footer>
            <Container>
                <div className="footer">
            <div className="d-flex flex-column">
                <h3>Muhammad Siddiq</h3>
                <div style={{color: "#000", backgroundColor: "#000", width: "150px", height: "2px", margin: "0 2px", borderRadius: "5px"}}></div>
                <p>I was born in 2006 year, 18 February. I study at Najot Ta'lim in Tashkent.</p>
            </div>
            <div className="d-flex flex-column">
                <h4>Links</h4>
                <Link to="/">Home</Link>
                <Link to="/about">
                About
                </Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="d-flex flex-column">
                <h4>Contact</h4>
                <p><i className="fas fa-home mr-2"></i>Tashkent</p>
                <p><i class="fas fa-envelope mr-2"></i>breakingreport4@gmail.com</p>
                <p><i class="fas fa-phone mr-2"></i>+998 93 356 69 71</p>
            </div>
            </div>
            </Container>
        </footer>
    )
}

export default Footer
