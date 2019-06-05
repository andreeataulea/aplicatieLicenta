import React from 'react'
import { browserHistory, Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Modal } from 'semantic-ui-react';

export default class AddNewTask extends React.Component{
    constructor(){
        super();
        this.state={
            task:{
                idTask: '',
                description: '',
                category: '',
                deadline: ''
            },
            loading: false,
            modalOpen: false
            
        }
    }

    // render(){

    //     return(
            
    //     )
    // }
}