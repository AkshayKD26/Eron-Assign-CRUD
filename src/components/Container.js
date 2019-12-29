import React, { Component } from "react";
import UserTable from "./UserTable";
import UserModal from "./UserModal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import logoImage from "../image/logo.PNG"
import {
  getUser,
  createUser,
  updateUser,
  deleteUser
} from "../actions/Actions";
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }
  componentWillMount() {
    this.props.getUser();
  }
  hideModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div className="ml-3 mr-3">
          <div className="logo-conainer text-left mt-3 ml-2">
            <img src={logoImage} className="logo-image" />
          </div>
        <button
          className="btn btn-primary float-right mb-3"
          onClick={() => {
            this.setState({ showModal: true });
          }}
        >
          + Add User
        </button>
        <UserTable
          userData={this.props.userData}
          updateUser={this.props.updateUser}
          deleteUser={this.props.deleteUser}
        />
        {this.state.showModal ? (
          <UserModal
            hideModal={this.hideModal}
            createUser={this.props.createUser}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

// export default Container;
function mapStateToProps(state) {
  return {
    userData: state.userList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUser,
      createUser,
      updateUser,
      deleteUser
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
