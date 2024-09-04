import { Link } from "react-router-dom";
import { Carousel, Container, Button, Row, Col } from "react-bootstrap";
function Home() {
    return ( 
      <Container fluid className="text-center p-5 bg-light">
      <Row className="mb-4">
          <Col>
              <Carousel id="carouselExampleAutoplaying" fade>
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://img-c.udemycdn.com/notices/home_carousel_slide/image/12c0830f-aa27-4843-993d-b440aa389991.jpeg"
                          alt="Skills that drive you forward"
                      />
                      <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
                          <h3>Skills that drive you forward</h3>
                          <p>Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img
                          className="d-block w-100"
                          src="https://img-c.udemycdn.com/notices/home_carousel_slide/image/bb0acdaf-d3e9-41dc-9d51-bfcf2b526ba1.jpg"
                          alt="This podcast is for the leaders"
                      />
                      <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
                          <h3>This podcast is for the leaders</h3>
                          <p>And those who will be. Learn to work, lead, and live better with new episodes of Leading Up dropping each Wednesday.</p>
                      </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>
          </Col>
      </Row>
<br /><br />
<div>
            <h1>WELCOME TO MINDSPRINT LEARNING</h1>
            <h3>This is a Learning platform designed specially for Mindsprint family!!!!</h3>
            <p>Get started by exploring our courses...... </p>
            <button className="btn btn-primary"><Link className="nav-link" to="/courses">View Courses</Link></button>
            <br /><br />
            </div>
        </Container>
     );
}

export default Home;