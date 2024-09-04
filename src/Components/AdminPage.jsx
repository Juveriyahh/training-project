import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function AdminPage() {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState({ title: '', description: '', instructor: '', duration: '', price: '', image: '' });
    const navigate = useNavigate();

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const resp = await axios.get('http://localhost:8085/api/courses');
            setCourses(resp.data);
        } catch (error) {
            alert("Error fetching the data");
        }
    }

    const addCourses = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8085/api/courses', newCourse);
            fetchCourses();
            setNewCourse({ title: '', description: '', instructor: '', duration: '', price: '', image: '' });
        } catch (error) {
            alert("Error in Adding the course");
        }
    }

    const deleteCourse = async (id) => {
        await axios.delete(`http://localhost:8085/api/courses/${id}`);
        fetchCourses();
    }

    const updateCourse = (id) => {
        navigate(`/admin/updateCourse/${id}`);
    }

    return (
        <Container>
            <h2 className="text-center text-bg-dark text-white p-2">Admin Dashboard</h2>
            <Card className="my-3">
                <Card.Header className="text-bg-warning text-center text-secondary">
                    <h3>Add New Course</h3>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={addCourses}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formTitle">
                                <Form.Label><b>Title:</b></Form.Label>
                                <Form.Control type="text" placeholder="Title" value={newCourse.title} onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formDescription">
                                <Form.Label><b>Description:</b></Form.Label>
                                <Form.Control type="text" placeholder="Description" value={newCourse.description} onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formPrice">
                                <Form.Label><b>Price:</b></Form.Label>
                                <Form.Control type="number" placeholder="Price" value={newCourse.price} onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formDuration">
                                <Form.Label><b>Duration:</b></Form.Label>
                                <Form.Control type="number" placeholder="Duration" value={newCourse.duration} onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formInstructor">
                                <Form.Label><b>Instructor:</b></Form.Label>
                                <Form.Control type="text" placeholder="Instructor" value={newCourse.instructor} onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })} />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formImage">
                                <Form.Label><b>Image:</b></Form.Label>
                                <Form.Control type="text" placeholder="Image" value={newCourse.image} onChange={(e) => setNewCourse({ ...newCourse, image: e.target.value })} />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">Add Course</Button>
                    </Form>
                </Card.Body>
            </Card>
            <Card className="my-3">
                <Card.Header className="text-bg-warning text-center text-secondary">
                    <h3>Existing Courses</h3>
                </Card.Header>
                <Card.Body>
                    {courses.map(course => (
                        <Card key={course.id} className="mb-3">
                            <Card.Body>
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>{course.description}</Card.Text>
                                <Card.Text>Instructor: {course.instructor}</Card.Text>
                                <Card.Text>Price: ${course.price}</Card.Text>
                                <Button variant="danger" className="me-2" onClick={() => deleteCourse(course.id)}>Delete</Button>
                                <Button variant="primary" onClick={() => updateCourse(course.id)}>Update Course</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Card.Body>
            </Card>
        </Container>
    );
}

export default AdminPage;
