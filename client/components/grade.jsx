import React from 'react';

function Grade(props) {
  const grade = props.grades;
  return (
    <tr>
      <td>{grade.name}</td>
      <td>{grade.course}</td>
      <td>{grade.grade}</td>
      <td><button className='btn btn-danger' onClick={() => props.deleteGrade(grade.id)}>DELETE</button></td>
    </tr>
  );
}

export default Grade;
