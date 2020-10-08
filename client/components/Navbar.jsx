import React from 'react';
import '../dist/main.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (
    <div>
      <section className='navbar' >
          <p className='home' >Home</p>
          <p className='about'>About</p>
          <p className='contact'>Contact</p>
          <p className='gallery'>Gallery</p>
        </section>
    </div>
    )
  }
}

export default Navbar;