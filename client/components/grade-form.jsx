import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    if (event.target.name === 'name') {
      this.setState({ name: event.target.value });
    }
    if (event.target.name === 'course') {
      this.setState({ course: event.target.value });
    }
    if (event.target.name === 'grade') {
      const grade = parseInt(event.target.value);
      this.setState({ grade: grade });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.onSubmit(newGrade);
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
    this.handleClear(event);
  }

  handleClear(event) {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
    event.target.reset();
  }

  render() {
    return (
      <form className='d-flex flex-column col' onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="name"><i className="fa fa-user"></i></label>
          </div>
          <input className="form-control" onChange={this.handleChange} type="text" name="name" id="name" placeholder="Student Name" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="course"><i className="fa fa-clipboard-list"></i></label>
          </div>
          <input className="form-control" onChange={this.handleChange} type="text" name="course" id="course" placeholder="Student Course" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="grade"><i className="fa fa-graduation-cap"></i></label>
          </div>
          <input className="form-control" onChange={this.handleChange} type="number" name="grade" id="grade" placeholder="Student Grade" />
        </div>
        <div className="row d-flex justify-content-around">
          <button type="submit" className="btn btn-success col-3">Add</button>
          <button type='reset' className="btn btn-warning col-3">Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
