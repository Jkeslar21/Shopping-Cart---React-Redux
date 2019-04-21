import React, { Component } from 'react';
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap';

export default class ItemDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    
    

  render() {
    return (
      <div>
        <Button className='item-details-button' bsStyle='link' onClick={() => this.setState({ open: !this.state.open })} >
            { this.state.open === false ? `See` : `Hide` }
            { this.state.open === false ? ` +` : ` -` }
        </Button>
        <Collapse in={this.state.open}>
            <div>
                <img width={100} height={100} alt='thumbnail' src='https://static.wixstatic.com/media/1f6a5f_b74d0fcedfa64c79be81d18a03725977~mv2_d_3000_3000_s_4_2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01/1f6a5f_b74d0fcedfa64c79be81d18a03725977~mv2_d_3000_3000_s_4_2.webp' />
                <p>Lambda Swag Hoodie</p>
                <Row className='show-grid'>
                    <Col md={6}>
                        <strong className={this.props.discounted ? 'discount-red' : null }>{`$${this.props.price}`}</strong>
                        <br />
                        <strong className='price-strike' >{`$104.56`}</strong>
                    </Col>
                    <Col md={6}>Qty: 1</Col>
                </Row>
            </div>
        </Collapse>
      </div>
    )
  }
}
