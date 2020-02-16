import React from 'react';
import BlankLayout from 'layouts/BlankLayout';
import NotFound from './NotFound';
import Server from './Server';

const Exception = ({ match, location }) => {
  const { name } = match.params;
  let page;
  console.log('Exception', name, match, location);

  switch (name) {
    case '500':
      page = <Server />;
      break;
    default:
      page = <NotFound />;
  }

  return <BlankLayout name="exception">{page}</BlankLayout>;
};

export default Exception;
