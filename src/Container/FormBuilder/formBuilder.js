import React, { Component } from 'react';
import Navigation from '../../Component/Navigation/navigation';
import Form from '../../Component/Form/form';

import './formBuilder.css';

class formBuilder extends Component {


    render(){
        return(
            <React.Fragment>
                <Navigation />
                <div className="formBuilder-container">               
                    <h1>formBuilder</h1>
                    <div className="form-container">
                        <Form />
                    </div>              
                </div>
            </React.Fragment>            
        )
    }
}

export default formBuilder;