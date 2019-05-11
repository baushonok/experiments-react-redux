import React, { Component, MouseEvent } from 'react';

import { transform } from './helpers';

import './index.css';

interface IStyle {
  transform?: string;
}
interface IState {
  styleOne: IStyle;
  styleTwo: IStyle;
}

export default class Transformations extends Component<{}, IState> {
  public state = {
    styleOne: {},
    styleTwo: {},
  };
  public render() {
    const { styleOne, styleTwo } = this.state;
    return (
      <div onMouseMove={this.handleMouseMove}>
        <div className="panel" style={styleOne} />
        <div className="panel" style={styleTwo} />
      </div>
    );
  }
  private handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    this.setState({
      styleOne: transform(-event.clientX / event.clientY),
      styleTwo: transform(event.clientX / event.clientY),
    });
  };
}
