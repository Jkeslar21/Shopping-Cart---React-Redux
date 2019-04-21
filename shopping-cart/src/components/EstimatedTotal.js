import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';

export default class EstimatedTotal extends Component {
  render() {
    return (
      <Row>
          <Col md={6}><h2>Est. Total</h2></Col>
          <Col className={this.props.discounted ? 'discount-red' : null } md={6}><h2>{`$${this.props.price}`}</h2></Col>
      </Row>
    )
  }
}
