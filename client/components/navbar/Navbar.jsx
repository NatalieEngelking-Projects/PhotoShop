import React from 'react';
import '../../dist/main.css';

import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Gallery from './Gallery.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
      about: false,
      contact: false,
      gallery: false,
    }

    this.renderHome = this.renderHome.bind(this);
    this.renderAbout = this.renderAbout.bind(this);
    this.renderContact = this.renderContact.bind(this);
    this.renderGallery = this.renderGallery.bind(this);
  }

  renderHome (e) {
    e.preventDefault();
    this.setState({home: true})
  }

  renderAbout (e) {
    e.preventDefault();
    this.setState({about: true})
  }

  renderContact (e) {
    e.preventDefault();
    this.setState({contact: true})
  }

  renderGallery (e) {
    e.preventDefault();
    this.setState({gallery: true})
  }

  render () {
    return (
    <div>
      <section className='navbar' >
          <p className='home' onClick={this.renderHome}>Home</p>
          <p className='about' onClick={this.renderAbout}>About</p>
          <p className='contact' onClick={this.renderContact}>Contact</p>
          <p className='gallery' onClick={this.renderGallery}>Gallery</p>
        </section>

        <Home home={this.state.home}/>
        <About about={this.state.about}/>
        <Contact contact={this.state.contact}/>
        <Gallery gallery={this.state.gallery}/>
    </div>
    )
  }
}

export default Navbar;