import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';

export default class TaxesFees extends Component {
  render() {
    return (
      <Row classname='show-grid'>
        <Col md={6}> <strong>Est. Taxes & fees</strong> (Based on 91377)</Col>
        <Col md={6}>{`$${this.props.taxes}`}</Col>
      </Row>
    )
  }
}
