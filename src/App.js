import React, { Fragment } from 'react';
import Button from 'components/Button';
import Dialog from 'components/Dialog';
import 'assets/style/main.scss';

const App = () => {
  return (
    <Fragment>
      <div>
        <Button>버튼</Button>
      </div>

      <div>
        <Dialog type="default" title="Title">
          <main>내용입니다</main>
          <footer>
            <Button size="normal" color="sub">
              취소
            </Button>
            <Button size="normal" color="primary">
              확인
            </Button>
          </footer>
        </Dialog>
      </div>
    </Fragment>
  );
};

export default App;
