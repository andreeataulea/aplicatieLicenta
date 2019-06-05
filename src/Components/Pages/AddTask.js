import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";
import axios from "axios";
//import {createTask} from "../../Actions/tasks";
import TaskForm from "./TaskForm";

class AddTask extends React.Component{
    state = {
        tasks: null
    };
        
    render(){
        const {tasks} = this.state;
        return(
            <Segment>
                {this.state.task && (
                    <TaskForm submit={this.addTask} task = {this.state.task}/>
                )}
            </Segment>
        );
    }
}

export default AddTask;