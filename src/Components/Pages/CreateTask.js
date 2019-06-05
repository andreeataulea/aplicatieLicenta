import React from "react";
import PropTypes from "prop-types";
import { Header,Form, Button, Grid, Segment } from "semantic-ui-react";
import InlineError from "../Messages/InlineError";
import axios from 'axios';
import { browserHistory, Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class CreateTask extends React.Component{
    static propTypes = {
        saveNewTask: React.PropTypes.func.isRequired
            
        
    }

    constructor(){
        super();
        this.state={
            task:{
                idTask = '',
                category = '',
                description = '',
                taskScore = '',
            },

            review: false,
            reviewRequest: false,
            editReview : new Map(),
            questions: [''],
            questionText: '',
            answers: [''],
            correcAnswer = null
        }

        this.saveQuiz = this.saveQuiz.bind(this);
    }

    render(){
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

                <Form.Field >
                  <label htmlFor="startDate">Start Date</label>
                  <input
                    type="text"
                    id="startDate"
                    name="startDate"
                    placeholder="dd-MM-yyyy hh:mm"
                    value={data.startDate}
                    readOnly = {true}

                  />
                </Form.Field>

                <Form.Field >
                  <label htmlFor="endDate">End Date</label>
                  <input
                    type="text"
                    id="endDate"
                    name="endDate"
                    placeholder="dd-MM-yyyy hh:mm"
                    value={data.endDate}
                    readOnly = {true}

                  />
                </Form.Field>

                <Form.Field >
                  <label htmlFor="taskScore">Task Score</label>
                  <input
                    type="text"
                    id="taskScore"
                    name="taskScore"
                    placeholder="Task Score"
                    value={data.taskScore}
                    readOnly = {true}
                  />
                </Form.Field>
              </Grid.Column>
              </Grid.Row>

            <Grid.Row>
              <Button color = "blue" fluid size = "large" onClick={this.addTask}>Save</Button>
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>

        )
    }
}