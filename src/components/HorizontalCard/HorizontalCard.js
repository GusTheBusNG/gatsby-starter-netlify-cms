import React, { Component, useState } from 'react';
import Button from '../Button'
import CardTitle from '../CardTitle'

import './HorizontalCard.scss';

class HorizontalCard extends Component {
  wheelTimeout;
  transitionTimeout;
  constructor(props) {
    super(props);
    this.lastTouch = 0;
    this.state = {
      currentIndex: 0,
      movement: 0,
      transitionDuration: "0s",
      movementMultiplier: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount = () => {
    clearTimeout(this.transitionTimeout);
    window.removeEventListener('resize', this.updateWindowDimensions);
  };

  updateWindowDimensions() {
    let change = 0;

    if (window.innerWidth < 370) change = 0.885; else
    if (window.innerWidth < 400) change = 0.86; else
    if (window.innerWidth < 430) change = 0.85; else
    if (window.innerWidth < 460) change = 0.84; else 
    if (window.innerWidth < 490) change = 0.83;
    else change = 0.82;
    this.setState({ movementMultiplier: window.innerWidth*change });
  }

  handleTouchStart = e => {
    this.lastTouch = e.nativeEvent.touches[0].clientX;
  };
  handleTouchMove = e => {
    const delta = this.lastTouch - e.nativeEvent.touches[0].clientX;
    this.lastTouch = e.nativeEvent.touches[0].clientX;

    this.handleMovement(delta);
  };
  handleTouchEnd = () => {
    this.handleMovementEnd();
    this.lastTouch = 0;
  };
  handleWheel = e => {
    clearTimeout(this.wheelTimeout);
    this.handleMovement(e.deltaX);
    this.wheelTimeout = setTimeout(() => this.handleMovementEnd(), 100);
  };
  handleMovement = delta => {
    clearTimeout(this.transitionTimeout);

    this.setState(state => {
      const maxLength = 2;

      let nextMovement = state.movement + delta;

      if (nextMovement < 0) {
        nextMovement = 0;
      }
      if (nextMovement > maxLength * state.movementMultiplier) {
        nextMovement = maxLength * state.movementMultiplier;
      }

      return {
        movement: nextMovement,
        transitionDuration: "0s",
      };
    });
  };

  handleMovementEnd = () => {
    const { movement, currentIndex, movementMultiplier } = this.state;

    const endPosition = movement / movementMultiplier;
    const endPartial = endPosition % 1;
    const endingIndex = endPosition - endPartial;
    const deltaInteger = endingIndex - currentIndex;

    let nextIndex = endingIndex;

    if (deltaInteger >= 0) {
      if (endPartial >= 0.1) {
        nextIndex += 1;
      }
    } else if (deltaInteger < 0) {
      nextIndex = currentIndex - Math.abs(deltaInteger);
      if (endPartial > 0.9) {
        nextIndex += 1;
      }
    }

    this.transitionTo(nextIndex, Math.min(0.5, 1 - Math.abs(endPartial)));
  };
  transitionTo = (index, duration) => {
    this.setState(state => ({
      currentIndex: index,
      movement: index * state.movementMultiplier,
      transitionDuration: `${duration}s`,
    }));

    this.transitionTimeout = setTimeout(() => {
      this.setState({ transitionDuration: "0s" });
    }, duration * 100);
  };
  render() {
    const { currentIndex, movement, transitionDuration } = this.state;
    const [clicked, setClicked] = useState(0);
    const {
      photo: image,
      showTitle,
      title,
      date,
      description,
      button: {
        buttonLink,
        buttonText
      },
      showLocation,
      secondDescription: {
        subtitle,
        description: secondDescription
      }
    } = this.props;

    return (
      <div
        className="concert-parent"
        onWheel={this.handleWheel}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <div
          className="concert"
          style={{
            transform: `translateX(${movement * -1}px)`,
            transitionDuration
          }}
        >
          <div className="concert__section" style={{ paddingBottom: showTitle ? '0.5rem' : '0'}}>
            <img
              alt={title}
              className={`concert__section__image ${!showTitle && 'full-image'}`}
              src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
            />
            {
              showTitle && (<CardTitle subtitle={date} title={title} />)
            }
          </div>
          <button
            className={`concert__button ${clicked === 1 ? 'prev' : 'next'}`}
            onClick={() => {
              this.transitionTo(currentIndex === 0 ? 1 : 0 , 0.5)
              setClicked(clicked === 0 ? 1 : 0)
            }}
          >
          </button>
          <div className="concert__section description">
            <CardTitle subtitle={date} title={title} />
            <p className="concert__section__description">{description}</p>
            <div className="concert__section__button">
              <Button link={buttonLink}>{buttonText}</Button>
            </div>
          </div>
          <button
            className={`concert__button ${clicked === 1 ? 'prev' : 'next'}`}
            onClick={() => {
              this.transitionTo(currentIndex <= 1 ? 2 : 1 , 0.5)
              setClicked(clicked === 0 ? 1 : 0)
            }}
          >
          </button>
          {
            showLocation ? (
              <div className="concert__section description">
                <CardTitle subtitle={date} title={title} />
                <p className="concert__section__description">Still need to add a location thing</p>
              </div>
            ) : (
              <div className="concert__section description">
                <CardTitle subtitle={subtitle} title={title} />
                <p className="concert__section__description">{secondDescription}</p>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default HorizontalCard;
