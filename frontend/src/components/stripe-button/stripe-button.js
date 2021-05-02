import React from 'react'
import StripeCheckout from "react-stripe-checkout"
import svg from "../../assets/crown.svg"
const StripeButton = ({price}) => {
    const priceForStripe = price*100;
    const publishKey = "pk_test_51Imk20SIJrOkg6MaNTDziTUQfhkmIjGXqD1dtO6dfnfCsTNx0jrFPyvI6zZp9L5nZsv3ij3Ygm6DW7XNNGyKxVZl00sqT14Mcw";
    const onToken = (e) =>{
        console.log(e)
        alert("payment success")
    }
    return (
       <StripeCheckout
        label='pay Now'
        name = 'CRWN clothing Ltd.'
        billingAddress
        shippingAddress
        image={svg}
        description={`Your total is $${price}`}
        amaount = {priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishKey}
       />
    )
}

export default StripeButton
