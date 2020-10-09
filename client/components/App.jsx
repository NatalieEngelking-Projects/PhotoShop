import React from 'react';
import '../dist/main.css';

import Navbar from './navbar/Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount () {
    //fetch images from database
  }

  render () {
    return (
      <div className='heading'>
        <div className='title' > The Photo Shop</div>

        {/* navbar */}
        <Navbar home={this.state.home} about={this.state.about} contact={this.state.contact} gallery={this.state.gallery} images={this.state.images}/>

      </div>

    )
  }
}

export default App;


//set up ways for people to favorite an image
//have a message componet for just admin
//user profiles