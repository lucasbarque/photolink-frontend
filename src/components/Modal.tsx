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
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-[#3F4D54] bg-opacity-[48%] backdrop-blur-sm" />
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
    dangerButtonText?: string;
    cancelButton?: {
      text: string;
      fn: () => void;
      appearance: 'secondary' | 'tertiary';
    };
    actionButton?: {
      text: string;
      fn: () => void;
      appearance: 'primary' | 'danger';
    };
    dangerButtonFunction?: () => void;
  }
>(
  (
    {
      showBackButton = false,
      title,
      description,
      size = 'sm',
      cancelButton,
      actionButton,
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
        'border-gray-4 fixed left-1/2 top-1/2 z-[99] w-[90%]  max-w-[592px] -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-white px-8 pb-8 pt-8 md:w-full',
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
          <h3 className="w-4/5 font-work-sans text-subtitle-semibold text-gray-800 md:text-title-semibold">
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
      <div className="mt-10 flex flex-col justify-end gap-4 sm:flex-row">
        {cancelButton && (
          <div className="w-full sm:w-[177px]">
            <Button
              size="md"
              fullSize
              appearance={cancelButton.appearance}
              onClick={cancelButton.fn}
            >
              {cancelButton.text}
            </Button>
          </div>
        )}

        {actionButton && (
          <div className="w-full sm:w-[177px]">
            <Button
              size="md"
              appearance={actionButton.appearance}
              fullSize
              onClick={actionButton.fn}
            >
              {actionButton.text}
            </Button>
          </div>
        )}
      </div>
    </DialogPrimitive.Content>
  ),
);

Modal.Wrapper = ModalWrapper;

export default Modal;
