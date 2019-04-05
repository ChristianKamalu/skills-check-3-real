import React, {Component} from 'react';
import Axios from 'axios';

class House extends Component{
    
    handleDelete = (id) => {
        Axios.delete(`/deleteListing/${id}`)
            .then(() => alert('Listing Deleted'))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='property-container'>
                <p>Property Name: {this.props.property.name}</p>
                <p>Adress: {this.props.property.address}</p>
                <p>City: {this.props.property.city}</p>
                <p>State: {this.props.property.state}</p>
                <p>Zip: {this.props.property.zip}</p>
                <p className='delete-listing' onClick={() => this.handleDelete(this.props.property.id)}>X</p>
            </div>
        )
    }
}

export default House