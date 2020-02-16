import React, { Fragment } from 'react';
import Button from '../src/components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Size = () => {
  return (
    <Fragment>
      <div>
        <Button size="small">small</Button>
      </div>
      <div>
        <Button>normal</Button>
      </div>
      <div>
        <Button size="large">large</Button>
      </div>
    </Fragment>
  );
};

export const Color = () => {
  return (
    <Fragment>
      <div>
        <Button color="primary">primary</Button>
      </div>
      <div>
        <Button color="sub">sub</Button>
      </div>
      <div>
        <Button color="outline">outline</Button>
      </div>
    </Fragment>
  );
};
