import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    if (this.props.about === false) {
      return null;
    } else {
      return(
        <div className='aboutPage'>
          <div> portrait image here </div>
          <div> little ditty about me here </div>
        </div>
          )
    }
  }
}

export default Home;