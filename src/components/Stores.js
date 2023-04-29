import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function Stores() {
  return (
    <Container style={{ marginTop: "40px", textAlign: "center" }}>
      <h1>Choose your store Bronx</h1>
      <Row
        style={{
          marginTop: "20px",
          borderBottom: "1px solid #E8E9EB",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Col xs={5}>
          <Row
            style={{
              justifyContent: "flex-start",
              boxShadow: "1px 2px 0px 1px #ccc",
            }}
          >
            <Col xs="3">
              <Image
                src="https://corporate.aldi.us/fileadmin/fm-dam/logos/ALDI_2017.png"
                style={{ width: "50px" }}
              />
            </Col>
            <Col style={{ textAlign: "start" }}>
              <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
        </Col>
        <Col xs={5}>
          <Row
            style={{
              justifyContent: "flex-start",
              boxShadow: "1px 2px 0px 1px #ccc",
            }}
          >
            <Col xs="3">
              <Image
                src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/boulder/sprouts-logo-e4e8d80f5056a36_e4e8d8cf-5056-a36a-071fb0c1945e7c79.png"
                style={{ width: "50px" }}
              />
            </Col>
            <Col style={{ textAlign: "start" }}>
              <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "20px",
          borderBottom: "1px solid #E8E9EB",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Col xs={5}>
          <Row
            style={{
              justifyContent: "flex-start",
              boxShadow: "1px 2px 0px 1px #ccc",
            }}
          >
            <Col xs="3">
              <Image
                src="https://logos-world.net/wp-content/uploads/2021/09/Kroger-Logo-700x394.png"
                style={{ width: "50px" }}
              />
            </Col>
            <Col style={{ textAlign: "start" }}>
              <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
              <p>Delivery</p>
            </Col>
          </Row>
        </Col>
        <Col xs={5}>
          <Row
            style={{
              justifyContent: "flex-start",
              boxShadow: "1px 2px 0px 1px #ccc",
            }}
          >
            <Col xs="3">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQicWXOAWIRDmoDz3gSAFQQETwnYS_VMhPSOA&usqp=CAU"
                style={{ width: "50px" }}
              />
            </Col>
            <Col style={{ textAlign: "start" }}>
              <h5 style={{ fontWeight: "bold" }}>Wegmans</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{
          marginTop: "20px",
          borderBottom: "1px solid #E8E9EB",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Col xs={5}>
          <Row
            style={{
              justifyContent: "flex-start",
              boxShadow: "1px 2px 0px 1px #ccc",
            }}
          >
            <Col xs="3">
              <Image
                src="https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Tops_Friendly_Markets_%28logo%29.svg/1200px-Tops_Friendly_Markets_%28logo%29.svg.png"
                style={{ width: "50px" }}
              />
            </Col>
            <Col style={{ textAlign: "start" }}>
              <h5 style={{ fontWeight: "bold" }}>Tops Friendly Market</h5>
              <p>Pickup</p>
            </Col>
          </Row>
        </Col>
        <Col xs={5}>
          <Row
            style={{
              justifyContent: "flex-start",
              boxShadow: "1px 2px 0px 1px #ccc",
            }}
          >
            <Col xs="3">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Whole_Foods_Market_201x_logo.svg/2048px-Whole_Foods_Market_201x_logo.svg.png"
                style={{ width: "50px" }}
              />
            </Col>
            <Col style={{ textAlign: "start" }}>
              <h5 style={{ fontWeight: "bold" }}>Whole Foods</h5>
              <p>Delivery * Pickup</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Stores;
