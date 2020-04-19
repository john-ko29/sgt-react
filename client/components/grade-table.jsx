import React from 'react';
import Grade from './grade';

function GradeTable(props) {
  return (
    <table className='table table-bordered table-striped col'>
      <thead className='thead-dark'>
        <tr>
          <th>Student Name</th>
          <th>Course</th>
          <th>Grade</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {
          props.grades.map(grade => {
            return (
              <Grade
                key={grade.id}
                grades={grade}
                deleteGrade={props.deleteGrade}
              />
            );
          })
        }
      </tbody>
    </table>
  );
}

export default GradeTable;
