import React, { Component, Fragment } from 'react';
import Button from 'components/Button';
import Dialog from 'components/Dialog';
import 'assets/style/main.scss';

class App extends Component {
  render() {
    return (
      <Dialog type="default">
        <main>내용입니다</main>
        <footer>
          <Button size="normal" color="sub" onClick={() => {}}>
            취소
          </Button>
          <Button size="normal" color="primary" onClick={() => {}}>
            확인
          </Button>
        </footer>
      </Dialog>
    );
  }
}

export default App;
