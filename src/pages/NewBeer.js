import { Button, Row, Col, Form, Card, Container } from "react-bootstrap";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 1,
    contributed_by: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", form);

      //limpar o meu formulário
      setForm({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
      });
      toast.success("Beer sucesss created! :D");
      navigate("/allbeers");
    } catch (error) {
      toast.error("Something's wrong. Try again!");
    }
  }

  return (
    <Container className="my-4">
      <Card size="xl">
        <Card.Header>
          <Card.Title>Form Create - New beer</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Beer Name </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Enter beer name"
                    value={form.name}
                    autoFocus
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>TagLine/Slogan </Form.Label>
                  <Form.Control
                    type="text"
                    name="tagline"
                    onChange={handleChange}
                    value={form.tagline}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={form.description}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>First Brewed</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_brewed"
                    onChange={handleChange}
                    value={form.first_brewed}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Brew ers Tips</Form.Label>
                  <Form.Control
                    type="text"
                    name="brewers_tips"
                    onChange={handleChange}
                    value={form.brewers_tips}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Attenuation level</Form.Label>
                  <Form.Control
                    type="number"
                    name="attenuation_level"
                    onChange={handleChange}
                    value={form.attenuation_level}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Contributed by</Form.Label>
                  <Form.Control
                    type="text"
                    name="contributed_by"
                    onChange={handleChange}
                    value={form.contributed_by}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Save New Beer
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}
export default NewBeer;
