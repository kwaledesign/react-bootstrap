import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <div>
        Hello from ReactJS

        {this.props.children}
      </div>
    )
  }
}

export default Main;
