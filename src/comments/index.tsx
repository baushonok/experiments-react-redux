import React, { ChangeEvent, Component, MouseEvent } from 'react';

import faker from 'faker';

import ApprovalCard from 'components/ApprovalCard';
import CommentDetail from 'components/CommentDetail';

interface IState {
  amountOfComments: number;
}

export default class Comments extends Component<{}, IState> {
  public state = {
    amountOfComments: 1,
  };
  public render() {
    return (
      <>
        <h1 className="ui header">Comments</h1>
        <label htmlFor="counter" className="ui label">
          Input amount of components:
        </label>
        <input
          type="number"
          id="counter"
          min="0"
          value={this.state.amountOfComments}
          onChange={this.handleChangeAmountOfComments}
          className="ui input"
        />
        <ul className="ui container comments">{this.generateComments()}</ul>
      </>
    );
  }
  private handleChangeAmountOfComments = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ amountOfComments: parseInt(event.currentTarget.value, 10) });
  };
  private handleApprove = (event: MouseEvent<HTMLButtonElement>) => {};
  private handleReject = (event: MouseEvent<HTMLButtonElement>) => {};
  private generateComments = () => {
    const { amountOfComments: amount } = this.state;
    const rows = [];
    for (let i = 0; i < amount; i++) {
      rows.push(
        <li className="comment" key={i}>
          <ApprovalCard onApprove={this.handleApprove} onReject={this.handleReject}>
            <CommentDetail
              avatarSrc={faker.image.avatar()}
              content={faker.lorem.sentence(3, 12)}
              date={faker.date.past()}
              authorName={faker.name.firstName()}
            />
          </ApprovalCard>
        </li>,
      );
    }

    return rows;
  };
}
