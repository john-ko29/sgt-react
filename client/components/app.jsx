import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.postGrade = this.postGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  componentDidUpdate() {

  }

  getAllGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => {
        this.setState({ grades: data });
      });
  }

  postGrade(newGrade) {
    const request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGrade)
    };
    fetch('/api/grades', request)
      .then(response => response.json())
      .then(data => {
        const grade = this.state.grades.slice();
        grade.push(data);
        this.setState({ grades: grade });
      });
  }

  deleteGrade(gradeId) {
    const req = {
      method: 'DELETE'
    };

    fetch(`/api/grades/${gradeId}`, req);

    const newGrades = this.state.grades.slice();
    const index = newGrades.findIndex(grade => grade.id === gradeId);
    newGrades.splice(index, 1);
    this.setState({ grades: newGrades });
  }

  getAverageGrade() {
    let totalGrade = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      totalGrade += parseInt(this.state.grades[i].grade);
    }
    const averageGrade = Math.ceil(totalGrade / this.state.grades.length);
    if (!isNaN(averageGrade)) { return averageGrade; }
  }

  render() {
    const averageGrade = this.getAverageGrade();
    return (
      <div className="container w-90">
        <Header average={averageGrade} />
        <main className='row d-flex justify-content-around'>
          <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade}/>
          <div className='col-1'></div>
          <GradeForm onSubmit={this.postGrade}/>
        </main>
      </div>
    );
  }
}

export default App;
