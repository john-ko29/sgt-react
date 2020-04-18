import React from 'react';

class GradeForm extends React.Component {
  render() {
    return (
      <form className='d-flex flex-column col'>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="name"><i className="fa fa-user"></i></label>
          </div>
          <input className="form-control" type="text" name="name" id="name" placeholder="Student Name" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="course"><i className="fa fa-clipboard-list"></i></label>
          </div>
          <input className="form-control" type="text" name="course" id="course" placeholder="Student Course" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="grade"><i className="fa fa-graduation-cap"></i></label>
          </div>
          <input className="form-control" type="number" name="grade" id="grade" placeholder="Student Grade" />
        </div>
        <div className="row d-flex justify-content-around">
          <button type="submit" className="btn btn-success col-3">Add</button>
          <button type="reset" className="btn btn-warning col-3">Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
