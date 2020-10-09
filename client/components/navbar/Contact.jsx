import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    if (this.props.contact === false) {
      return null;
    } else {
      return(
        <div className='galleryPage'>
          <div> contact info here </div>
          <div> message box </div>
        </div>
          )
    }
  }
}

export default Contact;