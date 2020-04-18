import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => {
        const gradesData = this.state.grades.slice();
        gradesData.push(data);
        this.setState({ grades: gradesData });
      });
  }

  render() {
    return <Header />;
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Student Grade Table</h1>
      </div>
    );
  }
}

export default App;
