import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import store from '../../../store';
import Axios from 'axios'

class Step3 extends Component{
    constructor() {
        const reduxState = store.getState()
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
        return(
            <div>
                <div><h4>Monthly Mortgage Amount</h4><input className='' name='image' onChange={e => this.handleChange(e)}/></div>
                <div><h4>Desired Monthly Rent</h4><input name='image' onChange={e => this.handleChange(e)}/></div>
                <nav>
                    <Link className='previous-button' to='/addProperty/step2'>Previous Step</Link>
                    <Link className='complete-button' to='/' onClick={this.handleComplete}>Complete</Link>
                </nav>
            </div>
        )
    }
}

export default Step3