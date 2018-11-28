import React from 'react';
import Row from './row';

const showNum = 5;

const Recommend = (props) => {
  const inputText = props.recommendData;
  const rows = [];

  for (let i = 0; i < showNum; i += 1) {
    rows.push(<Row data={inputText[i]} />);
  }

  return (
    <div>{rows}</div>
  );
};

export default Recommend;
