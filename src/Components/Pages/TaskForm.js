import React from "react";
import PropTypes from "prop-types";
import { Header,Form, Button, Grid, Segment, FormField } from "semantic-ui-react";
import InlineError from "../Messages/InlineError";
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

class TaskForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
         
            idTask: '',
            category: '',
            description: '',
            deadline: '',

            question:{
              idQuestion: '',
              // idTask: '',
              questionText: '',
              correctAnswer: ''
            },

              idQuestion: '',
              questionText: '',
              correctAnswer: '',

        answer:{
            idAnswer: '',
            // idQuestion: '',
            answerText: ''
        },

            idAnswer: '',
            answerText: '',
        //startDate: moment(),
        loading: false,
        errors: {},
        submission: false
        
    };
    this.handleDeadlineChange = this.handleDeadlineChange.bind(this);
    this.setTask = this.setTask.bind(this);
    this.onChange = this.onChange.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }



onChange = e => this.setState({data: {... this.state.data, [e.target.name] : e.target.value}
});

onQuestionChange = e =>this.setState({question:{...this.state.question, [e.target.name] : e.target.value}});

onAnswerChange = e =>this.setState({answer:{...this.state.answer, [e.target.name] : e.target.value}});


validate = data =>{
    const errors = {};
    if(!data.idTask)errors.idTask = 'Id cannot be blank';
    if(!data.category)errors.category = 'Category cannot be blank';
    if(!data.description)errors.description = 'Description cannot be blank';
    return errors;

};

validateQuestion = question =>{
  const errors = {};
  if(!question.idQuestion)errors.idQuestion = 'Id cannot be blank';
  if(!question.questionText)errors.questionText = 'Text cannot be blank';
  return errors;

};

validate = answer =>{
  const errors = {};
  if(!answer.idAnswer)errors.idAnswer = 'Id cannot be blank';
  if(!answer.answerText)errors.answerText = 'Answer cannot be blank';
  return errors;

};

onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  handleDeadlineChange(date) {
    this.setState({
      startDate: date
    })
  }

  setTask = () =>{
    let task = {
      idTask: this.state.idTask,
      category: this.state.category,
      description: this.state.description
    }
    axios.post('/postTasks',task).then((res)=>{
      if(res.status === 200){
        this.props.taskAdded(task)
      }
    }).catch((err)=>{
      console.log(err)
    })

    }
    


  saveTask(){
    const{data} = this.state;
    const payload = {
      token: this.props.token,
      data
    }
    this.props.saveNewTask(payload);
    this.setState({
      submission: true
    });
  }

  // submitAndReview(){
  //   const{data,quiz,answer,correctAnswer} = this.state;
  //   if (correctAnswer !== null){
  //     const qiz
  //   }
  // }

// handleOption(idx,event){
//   const{answer} = this.state;
//   answer[idx] = event.target.value;
//   this.setState({answer});
// }

// addAnswerOption(){
//   const {answer, idAnswer, answerText}
//   if(idAnswer !== '' && answerText !== ''){
//     answer.idAnswer = idAnswer;
//     answer.answerText = answerText;
//     answer.idQuestion = localStorage.getItem('idQuestion');
//     this.setState({
//       answer
//     });
    
//   }
// }

// setCorrectAnswer(idx){
//   this.setState({
//     correctAnswer: idx
//   });
// }

render(){
    const {errors,data, loading} = this.state;

    return(
        <Segment size = 'large'>
            <div>
                 <Header textAlign = 'center'>Add new task</Header>
            </div>
        <Form onSubmit= {this.onSubmit} loading={loading}>
          <Grid columns={1}>
            <Grid.Row>
              <Grid.Column>
                <Form.Field error={!!errors.idTask}>
                  <label htmlFor="idTask">Id Task</label>
                  <input
                    type="text"
                    id="idTask"
                    name="idTask"
                    placeholder="Id Task"
                    value={data.idTask}
                    onChange={this.onChange}
                  />
                  {errors.idTask && <InlineError text={errors.idTask} />}
                </Form.Field>

                <Form.Field error={!!errors.category}>
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    placeholder="Category"
                    value={data.category}
                    onChange={this.onChange}
                  />
                  {errors.category && <InlineError text={errors.category} />}
                </Form.Field>

                <Form.Field error={!!errors.description}>
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description"
                    value={data.description}
                    onChange={this.onChange}
                  />
                  {errors.description && <InlineError text={errors.description} />}
                </Form.Field>
                
                {/* <FormField>
                  <label>Select deadline</label>
                    <DatePicker
                    selected = {this.state.startDate}
                    onChange = {this.handleDeadlineChange}
                    name="startDate"
                    dateFormat="MM/DD/YYYY"
                    />
               </FormField> */}
              </Grid.Column>
              </Grid.Row>

            <Grid.Row>
              <Button color = "blue"  fluid size = "large" onClick={this.setTask}>Save</Button>
            </Grid.Row>

            <Grid.Row>
              <Button color = "blue"  fluid size = "large" onClick={this.addQuestion}>Add Question</Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
    );
}
    
}

// TaskForm.propTypes = {
//     submit: PropTypes.func.isRequired,
//     addTask: PropTypes.func.isRequired
// };

export default TaskForm;