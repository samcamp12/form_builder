import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/Actions/actionTypes';
import './form.css';

class Form extends Component {
    
    // store the form data
    state = {
        title: {
            title: '',
            description: ''
        }
    }


    titleChangeHandler = (event) => {

        this.setState({
            title: {
                ...this.state.title,
                title: event.target.value
            }
        })
    }

    descriptionChangeHandler = (event) => {

        this.setState({
            title: {
                ...this.state.title,
                description: event.target.value
            }
        })
    }

    titleSubmitHandler = (e) => {
        e.preventDefault();
        this.props.onTitleChanged(this.state.title)
    }

    render() {

        const titleElementArray = [];
        for(let key in this.state.title){
            titleElementArray.push({
                id: key,
                value: this.state.title[key]
            })
        }

        return (
        <div>
            <form className="short-answer-form" onSubmit={this.titleSubmitHandler}>
                <input 
                    type="text" 
                    className="form-text" 
                    placeholder="Form Title" 
                    value={this.state.title.title}
                    onChange={this.titleChangeHandler}/>
                <input 
                    type="text" 
                    className="form-text" 
                    placeholder="Form Description" 
                    value={this.state.title.description}
                    onChange={this.descriptionChangeHandler}/>
                <input 
                    type="submit"  
                    className="form-submit" 
                    placeholder="Submit"/>
            </form>
            
        </div>
        )
    }
   
}


const mapDispatchToProps = dispatch => {
    return {
        onTitleChanged: (data) => dispatch({type: actionTypes.CHANGE_TITLE, title: data.title, description: data.description})
    }
}

export default connect(null, mapDispatchToProps)(Form); 