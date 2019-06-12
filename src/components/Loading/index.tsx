import React from 'react';

interface IProps {
  message?: string;
}
export const Loading = (props: IProps) => {
  const { message = 'Loading...' } = props;
  return (
    <div className="ui active dimmer">
      <span className="ui text loader">{message}</span>
    </div>
  );
};
