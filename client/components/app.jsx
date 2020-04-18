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

  getAverageGrade() {
    let totalGrade = 0;
    for (let i = 0; i < this.state.grades.length; i++) {
      totalGrade += this.state.grades[i].grade;
    }
    return Math.ceil(totalGrade / this.state.grades.length);
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
