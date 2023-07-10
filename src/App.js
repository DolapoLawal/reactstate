import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Dolapo lawal',
        bio: 'Ceo Binary Cleantech limited',
        imgSrc: 'images/oriamo2.jpeg',
        profession: 'Food Lover'
      },
      show: false,
      IntervalId: null,
      timeElapsed: 0
    };
  };

  componentDidMount() {
    const IntervalId = setInterval(this.updateTimeElapsed, 1000);
    this.setState({ IntervalId });
  };

  componentWillUnmount() {
    clearInterval(this.state.IntervalId);
  };

  updateTimeElapsed = () => {
    this.setState((prevState) => ({
      timeElapsed: prevState.timeElapsed + 1
    }));
  };

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, timeElapsed } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time Elapsed: {timeElapsed} seconds</p>
      </div>
    );
  }
}

export default App;
