import React from 'react';

import * as DialogPrimitive from '@radix-ui/react-alert-dialog';
import clsx from 'clsx';

import { Button } from './Button';
import { NavButton } from './NavButton';

export type ModalProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
  overlay?: boolean;
};

const Modal = ({ children, overlay = true, ...props }: ModalProps) => (
  <DialogPrimitive.Root {...props}>
    <DialogPrimitive.Portal>
      {overlay && (
        <DialogPrimitive.Overlay className="fixed inset-0 bg-[#3F4D54] bg-opacity-[48%] backdrop-blur-sm" />
      )}
      {children}
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);

const ModalWrapper = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentProps<typeof DialogPrimitive.Content> & {
    showBackButton?: boolean;
    title?: string;
    description?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    hideCloseButton?: boolean;
    hideActionButton?: boolean;
    closeButtonText?: string;
    actionButtonText?: string;
    cancelButtonFunction?: () => void;
    actionButtonFunction?: () => void;
  }
>(
  (
    {
      showBackButton = false,
      title,
      description,
      size = 'sm',
      hideCloseButton = false,
      hideActionButton = false,
      closeButtonText = 'Fechar',
      actionButtonText = 'Cancelar',
      cancelButtonFunction,
      actionButtonFunction,
      children,
      ...props
    },
    forwardedRef,
  ) => (
    <DialogPrimitive.Content
      {...props}
      className={clsx(
        {
          'max-w-[388px]': size === 'sm',
          'max-w-[592px]': size === 'md',
          'max-w-[796px]': size === 'lg',
        },
        'border-gray-4 fixed left-1/2 top-1/2 w-full min-w-[388px] max-w-[592px] -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-white px-8 pb-8 pt-8',
      )}
      ref={forwardedRef}
    >
      {showBackButton && (
        <DialogPrimitive.Action asChild>
          <div className="absolute left-8 top-6">
            <NavButton kind="back-single" size="md" />
          </div>
        </DialogPrimitive.Action>
      )}
      <DialogPrimitive.Cancel asChild>
        <div className="absolute right-8 top-6">
          <NavButton kind="close" />
        </div>
      </DialogPrimitive.Cancel>
      {title && (
        <DialogPrimitive.Title asChild>
          <h3 className="font-work-sans text-title-semibold text-gray-800">
            {title}
          </h3>
        </DialogPrimitive.Title>
      )}
      {description && (
        <DialogPrimitive.Description asChild>
          {description}
        </DialogPrimitive.Description>
      )}
      {children}
      <div className="mt-10 flex justify-end gap-4">
        {!hideCloseButton && (
          <div className={clsx({ 'flex w-full flex-col': size === 'sm' })}>
            <Button
              size="md"
              appearance="secondary"
              style={{ width: '177px' }}
              onClick={cancelButtonFunction}
            >
              {closeButtonText}
            </Button>
          </div>
        )}

        {!hideActionButton && (
          <div className={clsx({ 'flex w-full flex-col': size === 'sm' })}>
            <Button
              size="md"
              style={{ width: '177px' }}
              onClick={actionButtonFunction}
            >
              {actionButtonText}
            </Button>
          </div>
        )}
      </div>
    </DialogPrimitive.Content>
  ),
);

Modal.Wrapper = ModalWrapper;

export default Modal;
