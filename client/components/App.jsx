import React from 'react';
import '../dist/main.css';

import Navbar from './Navbar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
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