import {useEffect} from 'react'
import { Row, Col, Card} from 'react-bootstrap'
import game from './img/game.png'
import book from './img/book.jpg'
import football from './img/football.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const Hobbies = () => {
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);
    return (
<>
        <div className="what hobby mt-5" data-aos="fade-down">
        <h2>Hobbies</h2>
        <p>My hobbies are:</p>
        <Row>
        <Col xs={6} md={4}>
        <Card style={{ width: '300px', display: 'flex',alignItems: "center",border: "none" }} data-aos="flip-left" className="mt-3">
        <Card.Img variant="top" src={game} style={{"height":"300px", "width": "300px", borderRadius: ".3rem"}} rounded/>
        <Card.Body>
            <Card.Title style={{color: "#000"}}>Gaming</Card.Title>
            <Card.Text style={{color: "#000"}}>
            When I still stressed and tired, I play a lot of games from my PC.
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        <Col xs={6} md={4}>
        <Card style={{ width: '300px',border: "none", display: 'flex',alignItems: "center", }} data-aos="flip-left" className="mt-3">
        <Card.Img variant="top" src={book} style={{"height":"300px", "width": "300px", borderRadius: ".3rem"}} rounded/>
        <Card.Body>
            <Card.Title style={{color: "#000"}}>Reading Books</Card.Title>
            <Card.Text style={{color: "#000"}}>
            When I have a lot of free time I Read a books
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        <Col xs={6} md={4}>
        <Card style={{ width: '300px', border: "none", display: 'flex',alignItems: "center", }} data-aos="flip-left" className="mt-3">
        <Card.Img variant="top" src={football} style={{"height":"300px", "width": "300px", borderRadius: ".3rem"}} rounded/>
        <Card.Body style={{color: "#000"}}>
            <Card.Title>Football</Card.Title>
            <Card.Text>
            When Barcelona plays football, I watch it.
            </Card.Text>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        </div>
    </>
    )
}

export default Hobbies
