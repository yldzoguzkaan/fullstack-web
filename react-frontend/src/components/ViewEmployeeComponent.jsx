import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
        this.editEmployee = this.editEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    cancel(){
        this.props.history.push('/employees');
    }

    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Employee First Name: </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Last Name: </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Employee Email ID: </label>
                            <div> { this.state.employee.emailId }</div>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn btn-info" onClick={ () => this.editEmployee(this.state.employee.id)} style={{marginLeft: "10px"}}>Update </button>
                        <button className="btn btn-primary" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent