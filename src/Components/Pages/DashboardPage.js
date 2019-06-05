import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from "../Messages/ConfirmEmailMessage";
import { Input, Menu } from 'semantic-ui-react'
import * as actions from "../../Actions/auth";
import { Link } from "react-router-dom";

class DashboardPage extends React.Component{

   state = {activeItem: 'dashboard'}
      
//console.log(JSON.parse(sessionStorage.getItem("user"))) -> ia user-ul din session storage


// return (
//     // <div>
//     //     {!isConfirmed && <ConfirmEmailMessage/>}
//     // </div>
   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
   

    render() {
        const {activeItem} = this.state;
        const {isConfirmed,logout} = this.props;
        

      return (
        <Menu secondary>
          <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
          <Menu.Item as={Link} to = "/addTask"
            name='tasks'
            active={activeItem === 'tasks'}
            onClick={this.handleItemClick}
          />
          <Menu.Item as = {Link} to ="/addFeedback"
            name='feesback'
            active={activeItem === 'feedback'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={()=>logout()}
            />
          </Menu.Menu>
        </Menu>
      )
}
}


DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired,
    logout:PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        isConfirmed: !!state.user.confirmed
    }
}

export default connect(mapStateToProps,{logout:actions.logout})(DashboardPage);