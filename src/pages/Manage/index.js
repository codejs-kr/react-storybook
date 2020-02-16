import React from 'react';
import List from './List';
import New from './New';

const Manage = ({ match, location, history }) => {
  const { name } = match.params;
  let page;
  // console.log('Manage', name, match, location, history);

  switch (name) {
    case 'new':
      page = <New />;
      break;
    case 'list':
      page = <List />;
      break;
    default:
      history.push('/exception/404');
  }

  return <div>{page}</div>;
};

export default Manage;
