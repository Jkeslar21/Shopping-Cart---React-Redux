import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Subtotal from './components/Subtotal';
import PickupSavings from './components/PickupSavings';
import TaxesFees from './components/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal';
import ItemDetails from './components/ItemDetails';
import PromoCode from './components/PromoCode';
import { connect } from 'react-redux';
import { changeHandler } from './actions/promoCodeActions'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disablePromoButton: false,
      discounted: false

    }
  }

  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.PickupSavings) * 0.0875
    },
    function() {
      this.setState({ 
        estimatedTotal: this.state.total + this.state.PickupSavings + this.state.taxes
       })
    }
    )
  }

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT'){
      this.setState({ 
        estimatedTotal: this.state.estimatedTotal * 0.9,
        discounted: !this.state.discounted
      },
        
        function() {
          this.setState({
            disablePromoButton: true
        })
      }) 
    }
  }

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} discounted={this.state.discounted} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} discounted={this.state.discounted}  />
          <hr />
          <PromoCode giveDiscount={() => this.giveDiscountHandler()} isDisabled={this.state.disablePromoButton} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { changeHandler })(App);
