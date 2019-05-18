import React, { Component, MouseEvent, ReactNode } from 'react';

import './index.css';

interface IProps {
  children: ReactNode;
  onApprove: (event: MouseEvent<HTMLButtonElement>) => void;
  onReject: (event: MouseEvent<HTMLButtonElement>) => void;
}
export default class ApprovalCard extends Component<IProps> {
  public render() {
    const { children, onApprove, onReject } = this.props;

    return (
      <div className="ui card">
        <div className="content">{children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <button className="ui basic green button" type="submit" onClick={onApprove}>
              Approve
            </button>
            <button className="ui basic red button" type="button" onClick={onReject}>
              Reject
            </button>
          </div>
        </div>
      </div>
    );
  }
}
