import React from 'react';

function Grade(props) {
  const grade = props.grades;
  return (
    <tr>
      <td>{grade.name}</td>
      <td>{grade.course}</td>
      <td>{grade.grade}</td>
    </tr>
  );
}

export default Grade;
