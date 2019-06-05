import React from 'react'
import { Table } from 'semantic-ui-react'

class QuizList extends React.Component{

constructor(props){

}

render(){
    return(
<Table celled selectable>
    <Table.Header>
      <Table.Row>
   
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        
      </Table.Row>
      <Table.Row>
        
      </Table.Row>
      <Table.Row>
        
      </Table.Row>
      <Table.Row warning>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell positive>Approved</Table.Cell>
        <Table.Cell warning>Requires call</Table.Cell>
      </Table.Row>
      <Table.Row>
        
      </Table.Row>
    </Table.Body>
  </Table>
)
 }
}

export default QuizList