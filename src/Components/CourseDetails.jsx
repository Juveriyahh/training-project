import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegisterCourse = async () => {
    try {
      const sid = localStorage.getItem("sid");
      if (!sid) {
        setError("Please log in to register for the course");
        return;
      } else {
        const resp = await axios.get(`http://localhost:8085/api/student/add/${sid}/courses/${id}`);
        if (resp.status === 200) {
          navigate('/courses/mycourses');
        }
      }
    } catch (error) {
      setError("Error registering for the course");
    }
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const resp = await axios.get(`http://localhost:8085/api/courses/${id}`);
        setCourse(resp.data);
      } catch (error) {
        setError("Error fetching course data");
      }
    };
    fetchCourse();
  }, [id]);

  return (
    <Container className="mt-4">
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        <Col md={8}>
          <Card>
            <Card.Img variant="top" src={course.image} alt={course.title} height={350} />
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
              <Card.Text><b>Instructor:</b> {course.instructor}</Card.Text>
              <Card.Text><b>Duration:</b> {course.duration}</Card.Text>
              <Button variant="primary" onClick={handleRegisterCourse}>Register</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Course Details</Card.Title>
              <Card.Text>
                <b>Category:</b> Development
              </Card.Text>
              <Card.Text>
                <b>Level:</b> Intermediate
              </Card.Text>
              <Card.Text>
                <b>Price:</b> ${course.price}
              </Card.Text>
              <Card.Text>
                <b>Start Date:</b> 07/08/2024
              </Card.Text>
              <Card.Text>
                <b>End Date:</b> 04/09/2024
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CourseDetails;
