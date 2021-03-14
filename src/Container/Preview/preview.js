import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../../Component/Navigation/navigation';

import './preview.css';

import Table from '../../Component/Table/table'

class Preview extends Component {
    
    render(){
        
        const tableHead = (
        <Table 
            title={this.props.title}
            description={this.props.description}/>
        )


        return(
            <React.Fragment>
                <Navigation />
                <div className="preview-container">
                    <h1>Preview</h1>
                    {tableHead}
                </div>
                
            </React.Fragment>
        )
    }  
}

const mapStateToProps = (state) => {
    return {
        title: state.title.title,
        description: state.title.description
    }
}

export default connect(mapStateToProps)(Preview);