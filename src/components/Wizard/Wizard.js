import React, {Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'

class Wizard extends Component{
    constructor() {
        super()
        this.state = {
            name:null,
            address:null,
            city:null,
            state:null,
            zip:null
        }
    }  

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleComplete = () => {
        const {name, address, city, state, zip} = this.state
        if(!name && !address && !city && !state && !zip) {
            return alert('Please fill out all boxes')
        }
        Axios.post('/addProperty', this.state)
            .then(async (res) => {
                await alert(res.data)
            })
        this.props.create()
    }
    
    render() {
        return (
            <div className='wizard'>
                <div className='wizard-header-container'>
                    <h1>Add New Listing</h1>
                    <Link className='cancel-button' to='/'>Cancel</Link>
                </div>
                <div className='input-containers'>
                    <div><h4>Property Name</h4><input name='name' onChange={e => this.handleChange(e)}/></div>
                    <div><h4>Address</h4><input className='address-input' name='address' onChange={e => this.handleChange(e)}/></div>
                    <div className='city-state-zip'>
                        <div><h4>City</h4><input className='city-input' name='city' onChange={e => this.handleChange(e)}/></div>
                        <div><h4>State</h4><input className='state-input' name='state' onChange={e => this.handleChange(e)}/></div>
                        <div><h4>Zip</h4><input className='zip-input' name='zip' type='number' onChange={e => this.handleChange(e)}/></div>
                    </div>
                    <button className='complete-button' onClick={this.handleComplete}>Complete</button>
                </div>
            </div>
        )
    }
}

export default Wizard