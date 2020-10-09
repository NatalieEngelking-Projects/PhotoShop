import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    if (this.props.gallery === false) {
      return null;
    } else {
      return(
        <div className='galleryPage'>
          <div> set up different methods of viewing i.e. gallery vs. carosoul vs. list vs. etc</div>
          <div> sort by pet, couples, most recent, favorited, nature, etc </div>
          <div> carosoul session here </div>
          <div> carosoul session here </div>
          <div> carosoul session here </div>
          <div> carosoul session here </div>
        </div>
          )
    }
  }
}

export default Home;

//set up a way for people to favorite images in db