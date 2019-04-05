import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import Step1 from './steps/step1'

class Wizard extends Component{
    

    
    
    render() {
        return (
            <div className='wizard'>
                <div className='wizard-header-container'>
                    <h1>Add New Listing</h1>
                    <Link className='cancel-button' to='/'>Cancel</Link>
                </div>
                <div className='input-containers'>
                    <Switch>
                        <Route path='/addProperty/step1' component={Step1}/>
                        <Route path='/addProperty/step2' component={Step2}/>
                        <Route path='/addProperty/step3' component={Step3}/>
                    </Switch>
                </div>
            </div>
        )
    }
}



export default Wizard