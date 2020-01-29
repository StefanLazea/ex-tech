import React from 'react';

export class AddCoupon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category: '',
            discount: '',
            availability: ''
        };
    }

    addCoupon = () => {
        let coupon = {
            category: this.state.category,
            discount: this.state.discount,
            availability: this.state.availability
        };
        this.props.onAdd(coupon);
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}