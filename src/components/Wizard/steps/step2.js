import React, {Component} from 'react';
import store, {IMAGE} from '../../../store';
import {Link} from 'react-router-dom'

class Step2 extends Component{
    constructor() {
        const reduxState = store.getState()
        super()
        this.state = {
            image: reduxState.image
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
            type: IMAGE,
            payload: this.state
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