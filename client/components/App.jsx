import React from 'react';
import '../dist/main.css';

import Navbar from './navbar/Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
      about: false,
      contact: false,
      gallery: false,
      images: []
    }
  }

  componentDidMount () {
    //fetch images from database
  }

  render () {
    return (
      <div className='heading'>
        <div className='title' >PhotoShop</div>

        {/* navbar */}
        <Navbar />

      </div>

    )
  }
}

export default App;