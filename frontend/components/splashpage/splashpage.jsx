import React from 'react';

class Splashpage extends React.Component {
  render() {
    return (
      <div className="Overlay">
        <div className="Overlay-quote">
          <img className="home_image" src="http://res.cloudinary.com/es-axiom/image/upload/v1472661914/rolling-hills_ahfnsi.jpg" />
          <span className="Overlay-quote-text">Stick with your team anywhere you go.</span>
        </div>
      </div>
    )
  }
}

export default Splashpage;
