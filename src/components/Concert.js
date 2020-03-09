import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Button from './Button'
import CardTitle from './CardTitle'
// import Logo from '../img/logo.svg'

import './Concert.scss';
const IMG_WIDTH = 323;

class Concert extends Component {
  wheelTimeout;
  transitionTimeout;
  lastTouch = 0;
  state = {
    currentIndex: 0,
    movement: 0,
    transitionDuration: "0s",
  };
  componentWillUnmount = () => {
    clearTimeout(this.transitionTimeout);
  };

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

      if (nextMovement > maxLength * IMG_WIDTH) {
        nextMovement = maxLength * IMG_WIDTH;
      }

      return {
        movement: nextMovement,
        transitionDuration: "0s",
      };
    });
  };

  handleMovementEnd = () => {
    const { movement, currentIndex } = this.state;

    const endPosition = movement / IMG_WIDTH;
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
    this.setState({
      currentIndex: index,
      movement: index * IMG_WIDTH,
      transitionDuration: `${duration}s`,
    });

    this.transitionTimeout = setTimeout(() => {
      this.setState({ transitionDuration: "0s" });
    }, duration * 100);
  };
  render() {
    const { currentIndex, movement, transitionDuration } = this.state;
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
    } = this.props.concert;

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
            className="concert__button"
            onClick={() => {
              this.transitionTo(currentIndex === 0 ? 1 : 0 , 0.5);
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
            className="concert__button"
            onClick={() => {
              this.transitionTo(currentIndex <= 1 ? 2 : 1 , 0.5);
            }}
          >
          </button>
          <div className="concert__section description">
            <CardTitle subtitle={date} title={title} />
            <p className="concert__section__description">{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Concert;
