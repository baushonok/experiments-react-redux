import React, { Component, SyntheticEvent } from 'react';

import { IImage } from 'pictures/types';

import './index.css';

const ROW_HEIGHT = 12;

interface IProps {
  image: IImage;
}
interface IState {
  spans: number;
}

export default class ImageCard extends Component<IProps, IState> {
  public readonly state = {
    spans: 0,
  };
  public render() {
    const {
      image: {
        urls: { small },
        description,
      },
    } = this.props;
    const { spans } = this.state;
    return (
      <li className="image-card" style={{ gridRowEnd: `span ${spans}` }}>
        <img src={small} alt={description} className="image-card__image" onLoad={this.setSpans} />
      </li>
    );
  }

  private setSpans = (event: SyntheticEvent<HTMLImageElement>) => {
    const imageHeight = event.currentTarget.clientHeight;
    const spans = Math.ceil(imageHeight / ROW_HEIGHT + 1);

    this.setState({ spans });
  };
}
