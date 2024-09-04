import { Accordion, Col, Container, Row, Card, ProgressBar } from "react-bootstrap";
import CircularProgress from "../Components/CircularProgress";
import { useEffect, useState } from "react";
import axios from "axios";

function MyCourses() {
  const [percentage, setPercentage] = useState(30); // Example percentage
  const [sid, setSid] = useState(localStorage.getItem("sid"));
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState('');

  const fetchCourses = async () => {
    try {
      const resp = await axios.get(`http://localhost:8085/api/student/${sid}`);
      setCourses(resp.data.courses);
      setName(resp.data.name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><h3>Welcome {name}</h3></Card.Title>
              <Card.Text>
                <i>“The more that you read, the more things you will know, the more that you learn, the more places you’ll go.” —Dr. Seuss</i>
              </Card.Text>
            </Card.Body>
          </Card>

          <h3>Courses Enrolled</h3>
          <Accordion defaultActiveKey="0" flush>
            {courses.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                  {item.description}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>

        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Course Progress</Card.Title>
              <CircularProgress percentage={percentage} />
              <ProgressBar now={percentage} label={`${percentage}%`} className="mt-3" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MyCourses;
