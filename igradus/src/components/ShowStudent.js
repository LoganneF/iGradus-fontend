import React from 'react'

class ShowStudent extends React.Component {
  render () {
    return (
      <>
        <div className="student-details">
         <h4>Student Information:</h4>
         <hr/>
         <h4>{this.props.student.name}</h4>
         <img src={this.props.student.imageUrl} alt="" className="studentCardImage" height="60" width="60"/>
         <p><span>Grade:</span> { this.props.student.passing } </p>
         <button type="button" class="btn btn-danger btn-sm" id="modify-student-button" onClick={() => this.props.deleteStudent(this.props.student._id)}>Remove Student</button>
         <button type="button" class="btn btn-info btn-sm" id="modify-student-button" onClick={() => this.props.deleteStudent(this.props.student._id)}>Edit Student</button>
       </div>
      </>
    )
  }
 }
export default ShowStudent