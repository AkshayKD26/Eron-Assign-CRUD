import React, { Component } from "react";
import UserModal from "./UserModal";
import edit from "../image/edit.png";
import deleteImage from "../image/delete.png";

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      isUpdate:false,
      updateIndex: 0,
      selectedUser: {}
    };
  }
  hadleEdit = (data, index) => {
    this.setState({ showModal: true, updateIndex: index, selectedUser: data, isUpdate:true });
  };
  hadleDelete = index => {
    this.props.deleteUser(index);
  };
  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { userData } = this.props;
    return (
      <div className="table-container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>City</th>
              <th>DOB</th>
              <th>Phone No.</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 ? (
              userData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.city}</td>
                    <td>{data.dob}</td>
                    <td>{data.phone}</td>
                    <td>
                      <img
                        src={edit}
                        className="imageIcon"
                        onClick={() => this.hadleEdit(data, index)}
                      />
                      <img
                        src={deleteImage}
                        className="imageIcon"
                        onClick={() => this.hadleDelete(index)}
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No User List{" "}
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {this.state.showModal ? (
          <UserModal
            hideModal={this.hideModal}
            selectedUser={this.state.selectedUser}
            updateUser = {this.props.updateUser}
            index={this.state.updateIndex}
            isUpdate={this.state.isUpdate}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default UserTable;
