import React from "react";
import { Col, Row } from "react-bootstrap";

export const NewsLetter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-box">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to my Newsletter</h3>
          </Col>
          <Col md={6} xl={7}>
            <form>
              <div className="new-emailbox">
                <input type="email" placeholder="Email Address"/>
                <button>Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
