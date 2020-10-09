import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.home);
    console.log(this.props.contact);
    console.log(this.props.gallery);
    console.log(this.props.about);
  }


  render () {
    if (this.props.home === false) {
      return null;
    } else {
      return(
        <div className='homePage'>
          <div> all time favorite images here </div>
          <div> pet images here </div>
          <div> nature images heres</div>
          <div> couples images here </div>
        </div>
          )
    }
  }
}

export default Home;