import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import Button from './Button';

import { ModalProps } from '../types';

const Modal = forwardRef(({ children, buttonCaption }: ModalProps, ref) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current!.showModal();
    },

    close() {
      dialog.current!.close();
    },
  }));

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button >{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')!
  );
});

export default Modal;
