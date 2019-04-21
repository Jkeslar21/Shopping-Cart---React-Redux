import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Subtotal extends Component {
    render() {
        return (
            <Row className="show-grid">
                <Col md={6}><strong>Price:</strong> {`$${this.props.price}`}</Col>
            </Row>
        )
    }
}