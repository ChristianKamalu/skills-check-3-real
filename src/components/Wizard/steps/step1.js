import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import store, {INFO} from '../../../store';

class Step1 extends Component{
    constructor() {
        const reduxState = store.getState()
        super()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick = () => {
        store.dispatch({
            type: INFO,
            payload: this.state
        })
    }

    render() {
        return(
            <div>
                <div><h4>Property Name</h4><input name='name' onChange={e => this.handleChange(e)}/></div>
                <div><h4>Address</h4><input className='address-input' name='address' onChange={e => this.handleChange(e)}/></div>
                <div className='city-state-zip'>
                    <div><h4>City</h4><input className='city-input' name='city' onChange={e => this.handleChange(e)}/></div>
                    <div><h4>State</h4><input className='state-input' name='state' onChange={e => this.handleChange(e)}/></div>
                    <div><h4>Zip</h4><input className='zip-input' name='zip' type='number' onChange={e => this.handleChange(e)}/></div>
                </div>
                <nav>
                    <Link className='next-button' to='/addProperty/step2'>Next Step</Link>
                </nav>
            </div>
        )
    }
}

export default Step1