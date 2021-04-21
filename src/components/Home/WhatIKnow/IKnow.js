import {useEffect, useState} from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import html from './img/html5.png'
import css from './img/css.png'
import js from './img/js.png'
import bootstrap from './img/bootstrap.png'
import axios from './img/axios.png'
import react from './img/react.png'
import AOS from "aos";
import "aos/dist/aos.css";

const IKnow = () => {
    const [datas,setDatas] = useState(
        [
            {
                id: 1,
                img: html,
                name: "HTML"
            },
            {
                id: 2,
                img: css,
                name: "CSS"
            },
            {
                id: 3,
                img: js,
                name: "JavaScript"
            },
            {
                id: 4,
                img: bootstrap,
                name: "Bootstrap"
            },
            {
                id: 5,
                img: axios,
                name: "Axios"
            },
            {
                id: 6,
                img: react,
                name: "React"
            }
        ]
    )
    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);
    return (
    <Container>
        <div className="what" data-aos="fade-down">
        <h2>What I Know ?</h2>
        <p>I know this technologies</p>
        <Row>
        {datas.map((data)=>(<Col xs={6} md={4}>
            <Card style={{ width: '300px', display: "flex", alignItems: "center", border: "none", boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)" }} key={data.id} data-aos="flip-left" className="mt-3">
            <Card.Img variant="top" style={{"height":"200px", "width": "200px"}} src={data.img} className="mt-2"/>
            <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            </Card.Body>
            </Card>
            </Col>))}
        </Row>
        </div>
    </Container>
    )
}

export default IKnow
