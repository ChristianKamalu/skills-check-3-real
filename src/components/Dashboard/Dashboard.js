import React, {Component} from 'react';  
import House from '../House/House';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Dashboard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            properties: []
        }
    }

    componentDidMount() {
        axios.get('/dashboard')
            .then(res => {
                console.log(res.data)
                this.setState({
                    properties: res.data
                })
            })
            .catch(err => console.log(err))
    }
    
    render() {
        const properties = this.state.properties.map((property, i) => {
            return <House key={i} property={property}/>
        })
        return (
                <div className='dashboard'>
                    <div className='dashboard-header-container'>
                        <h1>Dashboard</h1>
                        <Link className='add-property-button' to='/addProperty/step1'>Add New Property</Link>
                    </div>
                    <hr/>
                    <h3>Home Listings</h3>
                    {properties}
                </div>
        )
    }
}

export default Dashboard