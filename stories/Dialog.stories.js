import React from 'react';
import Dialog from '../src/components/Dialog';
import Button from '../src/components/Button';

export default {
  title: 'Dialog',
  component: Dialog,
};

export const Default = () => {
  const onConfirm = (e) => {
    alert('확인');
    e.preventDefault();
  };

  const onCancel = (e) => {
    alert('취소');
    e.preventDefault();
  };

  return (
    <Dialog type="default" title="Title">
      <main>내용입니다</main>
      <footer>
        <Button size="normal" color="sub" onClick={onCancel}>
          취소
        </Button>
        <Button size="normal" color="primary" onClick={onConfirm}>
          확인
        </Button>
      </footer>
    </Dialog>
  );
};

export const HiddenTitle = () => {
  const onConfirm = (e) => {
    alert('확인');
    e.preventDefault();
  };

  const onCancel = (e) => {
    alert('취소');
    e.preventDefault();
  };

  return (
    <Dialog type="default">
      <main>내용입니다</main>
      <footer>
        <Button size="normal" color="sub" onClick={onCancel}>
          취소
        </Button>
        <Button size="normal" color="primary" onClick={onConfirm}>
          확인
        </Button>
      </footer>
    </Dialog>
  );
};

export const Alert = () => {
  const onConfirm = (e) => {
    alert('Confirm Alert');
    e.preventDefault();
  };

  return (
    <Dialog type="alert" onClick={onConfirm}>
      <main>담았어요!</main>
    </Dialog>
  );
};
