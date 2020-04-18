import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
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
