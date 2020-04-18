import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.postGrade = this.postGrade.bind(this);
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

  getAverageGrade() {
    let totalGrade = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      totalGrade += this.state.grades[i].grade;
    }
    const averageGrade = Math.ceil(totalGrade / this.state.grades.length);
    if (!isNaN(averageGrade)) { return averageGrade; }
  }

  render() {
    return (
      <div className="container">
        <Header average={this.getAverageGrade()} />
        <GradeTable grades={this.state.grades}/>
      </div>
    );
  }
}

export default App;
