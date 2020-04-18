import React from 'react';
import Header from './header';

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

  componentDidUpdate() {

  }

  getAllGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(data => {
        this.setState({ grades: data });
      });
  }

  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default App;
