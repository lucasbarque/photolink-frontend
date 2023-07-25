import { createToast } from 'vercel-toast';
import 'vercel-toast/css';

import '../styles/toast.css';

interface ToastProps {
  message: string;
  timeout?: number;
  type?: 'success' | 'error';
  position?: 'bottom-center';
}

export const useToast = () => {
  const toast = ({ message, type = 'error', timeout = 3500 }: ToastProps) => {
    createToast(message, {
      timeout,
      type,
      cancel: 'x',
    });
  };
  return {
    toast,
  };
};
