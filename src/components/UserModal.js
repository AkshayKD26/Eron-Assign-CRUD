import React, { Component } from "react";

class UserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dob: "",
      city: "",
      phone: "",
      isSubmit:false,
      mobileNoVarified:false
    };
  }
  componentWillMount() {
    const { selectedUser } = this.props;
    this.setState({
      name: selectedUser&&selectedUser.name ? selectedUser.name : "",
      dob: selectedUser&&selectedUser.dob?selectedUser.dob:"",
      city: selectedUser&&selectedUser.city?selectedUser.city:"",
      phone: selectedUser&&selectedUser.phone?selectedUser.phone:""
    });
  }
  validateMobileNo = e => {
    let mobileregex = "^[0-9]{10,10}$";
    if (e.target.value.search(mobileregex) === 0) {
      this.setState({ mobileNoVarified: true });
    } else {
      this.setState({
        mobileNoVarified: false
        //    isOtpVarified: false
      });
    }
    this.setState({ phone: e.target.value });
  };
  submitUser = () => {
    let data = {
      name: this.state.name,
      dob: this.state.dob,
      city: this.state.city,
      phone: this.state.phone
    };
    if(this.state.name !==""&&this.state.dob!==""&&this.state.city !==""&&this.state.phone !==""){
        if(this.props.isUpdate){
            this.props.updateUser(data, this.props.index);
        }else{
            this.props.createUser(data);
        }
        this.props.hideModal()

    }
    else{
        this.setState({isSubmit:true})
    }
   
   
  };
  render() {
    return (
      <div>
        <div className="modal d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{this.props.isUpdate?"Update User ":"Create User"}</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.props.hideModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row mb-3">
                  <div className="col-sm-4">Name</div>
                  <div className="col-sm-8">
                    <input
                      className="form-control"
                      value={this.state.name}
                      onChange={e => {
                        this.setState({ name: e.target.value });
                      }}
                    />
                    {this.state.isSubmit&&this.state.name === ""?<div className="errorMessage">Please enter user name</div>:""}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">DOB</div>
                  <div className="col-sm-8 mb-3">
                    <input
                      type="date"
                      value={this.state.dob}
                      className="form-control"
                      onChange={e => {
                        this.setState({ dob: e.target.value });
                      }}
                    />
                      {this.state.isSubmit&&this.state.dob === ""?<div className="errorMessage">Please enter user dob </div>:""}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">City</div>
                  <div className="col-sm-8">
                    <input
                      className="form-control"
                      value={this.state.city}
                      onChange={e => {
                        this.setState({ city: e.target.value });
                      }}
                    />
                     {this.state.isSubmit&&this.state.city === ""?<div className="errorMessage">Please enter user city </div>:""}
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">Phone</div>
                  <div className="col-sm-8">
                    <input
                      className="form-control"
                      value={this.state.phone}
                      onChange={e => 
                        this.validateMobileNo(e)
                      }
                    />
                    {this.state.mobileNoVarified ===false&&this.state.phone !==""?<div className="errorMessage">Please enter valid phone no </div>:""}
                     {this.state.isSubmit&&this.state.phone === ""?<div className="errorMessage">Please enter user phone </div>:""}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.submitUser}
                >
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={this.props.hideModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserModal;
