import React, { Component } from 'react';
import { Button, Collapse, Form, Row, Col, FormGroup, } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeHandler } from '../actions/promoCodeActions'

class PromoCode extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    

    changeHandler = e => {
        this.props.changeHandler(e);
    }

  render() {
    return (
      <div>
        <Button className='promo-code-button' bsStyle='link' onClick={() => this.setState({ open: !this.state.open })} >
            { this.state.open === false ? `Apply ` : `Hide ` }
            promo code
            { this.state.open === false ? ` +` : ` -` }
        </Button>
        <Collapse in={this.state.open}>
            <div>
                <Row className='show-grid'>
                    <Col md={12}>
                        <Form>
                            <FormGroup controlId='formInlineName'>
                                <h4>Promo Code</h4>
                                <input type='text' placeholder='Enter Promo Code' value={this.props.promoCode} onChange={this.changeHandler} />
                            </FormGroup>
                            <Button bsStyle='success' className='btn-round' disabled={this.props.isDisabled} onClick={this.props.giveDiscount} >
                                Apply
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Collapse>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { changeHandler })(PromoCode);