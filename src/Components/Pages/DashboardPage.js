import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConfirmEmailMessage from "../Messages/ConfirmEmailMessage";

//console.log(JSON.parse(sessionStorage.getItem("user"))) -> ia user-ul din session storage
const DashboardPage = ({isConfirmed}) =>(
    <div>
        {!isConfirmed && <ConfirmEmailMessage/>}
    </div>
);

DashboardPage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired
}

function mapStateToProps(state){
    return {
        isConfirmed: !!state.user.confirmed
    }
}

export default connect(mapStateToProps)(DashboardPage);