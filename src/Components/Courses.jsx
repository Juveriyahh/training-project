import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

function Courses() {
  const [courses, setCourses] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const resp = await axios.get('http://localhost:8085/api/courses');
        setCourses(resp.data);
      } catch (error) {
        alert("Error fetching the data");
      }
    };
    fetchCourses();
  }, [id]);

  return (
    <div>
      <Container fluid className="text-bg-warning text-center text-body-secondary p-4">
        <h1>SKILL UP FOR THE FUTURE</h1>
        <h3>Learn new skills from anywhere</h3>
      </Container>
      <Container className="text-center">
        <Image src="https://www.salesforce.com/blog/wp-content/uploads/sites/2/2023/07/2023-06-360Blog-Trailhead-HandsonChallenges-1500x844-1.png?w=889" fluid />
        <h2 className="my-4">SPRINTIQ IS THE FUN WAY TO LEARN</h2>
      </Container>
      <Container>
        <Row className="mb-4">
          <Col md={4} className="d-flex justify-content-center">
            <Card className="border-0" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://trailhead.salesforce.com/assets/home/learn-d16f92195753468ff0d2dcdf5ca2d76f8351097902f344f277694acb5ce320f9.svg" style={{ height: "65px" }} />
              <Card.Body className="text-center">
                <Card.Title>Learn In-Demand Skills</Card.Title>
                <Card.Text>Get hands-on and learn the in-demand and soft skills you need to succeed from anywhere for free.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Card className="border-0" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://trailhead.salesforce.com/assets/home/earn-1fec0a13b30fb81f50ee654fd8dd942f4a6dde0686a228938fe073c6061c33a2.svg" style={{ height: "65px" }} />
              <Card.Body className="text-center">
                <Card.Title>Earn Resume-Worthy Credentials</Card.Title>
                <Card.Text>Prove your skills and earn globally-recognized credentials that demonstrate your expertise to current and future employers.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Card className="border-0" style={{ width: "18rem" }}>
              <Card.Img variant="top" src="https://trailhead.salesforce.com/assets/home/connect-47130389ad17b63cf6118be9052e169d5e825a790497406c713bf285321ceb58.svg" style={{ height: "65px" }} />
              <Card.Body className="text-center">
                <Card.Title>Connect to Opportunities</Card.Title>
                <Card.Text>Join the global Mindsprint Community to learn relevant skills, connect to Mindsprinters, and give back.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="text-center my-4">
        <h2 style={{ textDecoration: "underline" }}>Courses</h2>
      </Container>
      <Container>
        <Row className="g-4">
          {courses.map(course => (
            <Col key={course.id} md={4} className="d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={course.image} alt={course.title} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Card.Text>Price: ${course.price}</Card.Text>
                  <Button variant="primary" as={Link} to={`/courses/${course.id}`} block>View Course</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Courses;
