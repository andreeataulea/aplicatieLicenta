import React from 'react';
import axios from 'axios';
import {Form, Button,Message} from 'semantic-ui-react';
import PropTypes from 'prop-types'
import InlineError from '../Messages/InlineError.js';

class FeedbackForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
              idTask: '',
              feedback: '',
            
            //  loading: false,
            // errors:{}
        }
        this.submitFeedback = this.submitFeedback.bind(this)
       // this.toggle = this.toggle.bind(this);

    }

    

    validate = (data) =>{
        const errors = {};
        if(!data.idTask) errors.idTask = "Please complete the task id!";
        if(!data.feedback) errors.feedback = "Please insert some feedback!";
        return errors;
      }

      submitFeedback(event){
          event.preventDefault()
          var data={
            idTask :  this.state.idTask,
            feedback: this.state.feedback
          }

          console.log(data)
          fetch("feedbacks/newFeedback",{
              method: 'POST',
              body: JSON.stringify(data)
          }).then(function(response){
              if(response.status >= 400){
                  throw new Error("Bad response from server");
              }
              return response.json();
          }).then(function(data){
              console.log(data)
              if(data == "succes"){
                  this.setState({msg: "Thanks for adding feedback"});
              }
          }).catch(function(err){
              console.log(err)
          });
          
      }

   handleChange(e){
       this.setState({[e.target.name] : e.target.value});
   }
   

    render(){

        const {data,errors,loading} = this.state;

    
    return(
        <Form  onSubmit = {this.submitRegister} loading = {loading} method="POST">
            <Form.Field>
                <label htmlFor="idTask">Id Task</label>
                <input
                  type="text"
                  name="idTask"
                  id="idTask"
                  placeholder="Id Task"
                  value={this.state.idTask}
                  onChange={this.handleChange.bind(this)}/>
                  
               
                </Form.Field>

                <Form.Field>
                <label htmlFor="feedback">Feedback</label>
                <input
                  type="text"
                  name="feedback"
                  id="feedback"
                  placeholder="Feedback Text"
                  value={this.state.feedback}
                  onChange={this.handleChange.bind(this)}/>
                  
               
                </Form.Field>
                <button 
                type="button"
                onClick={this.submitFeedback.bind(this)}>Add Feedback</button>

            
        </Form>
    )
    }
}

// FeedbackForm.propTypes = {
//     submit: PropTypes.func.isRequired

// }

    export default FeedbackForm;
    