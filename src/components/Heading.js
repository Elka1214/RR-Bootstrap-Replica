import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function Heading() {
  return (
    <div>
      <Card style={{ backgroundColor: "#deedd6" }}>
        <div className="row">
          <div className="col p-5 mx-5 justify-content-center bold">
            <Container>
              <Card.Title className="text-start fs-1 col-8">
                Order groceries for delivery or pickup today
              </Card.Title>
              <Card.Text className="text-start">
                Whatever you want from local stores, brought right to your door.
              </Card.Text>
              <Form.Control type="text" placeholder="Enter your address..." />
            </Container>
          </div>
          <div className="col-4 text-end">
            <Image
              style={{ "max-height": "350px" }}
              fluid
              src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Heading;
