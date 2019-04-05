import React, {Component} from 'react';
import store from '../../../store';
import {Link} from 'react-router-dom'

class Step2 extends Component{
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

    render() {
        return(
            <div>
                <div><h4>Image Url</h4><input name='image' onChange={e => this.handleChange(e)}/></div>
                <nav>
                    <Link className='previous-button' to='/addProperty/step1'>Previous Step</Link>
                    <Link className='next-button' to='/addProperty/step3'>Next Step</Link>
                </nav>
            </div>
        )
    }
}

export default Step2