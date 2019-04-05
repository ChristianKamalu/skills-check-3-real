import React, {Component} from 'react'; 

class House extends Component{
    
    render() {
        return (
            <div className='property-container'>
                <p>Property Name: {this.props.property.name}</p>
                <p>Adress: {this.props.property.address}</p>
                <p>City: {this.props.property.city}</p>
                <p>State: {this.props.property.state}</p>
                <p>Zip: {this.props.property.zip}</p>
                <div className='delete-listing'><p>x</p></div>
            </div>
        )
    }
}

export default House