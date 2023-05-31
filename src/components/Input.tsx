import React, { InputHTMLAttributes, useState } from 'react';

import { clsx } from 'clsx';
import { Controller } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  name: string;
  control: any;
  label?: string;
  error?: string;
  mask?: any;
  viewPassword?: boolean;
  isPassword?: boolean;
  handleViewPassoword?: () => void;
}

export const Input: React.FC<InputProps> = ({
  isPassword,
  label,
  error,
  name,
  control,
  mask,
  ...rest
}) => {
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <div className="flex w-full flex-col">
      {label && (
        <label className="mb-[6px] font-medium text-gray-500" htmlFor={name}>
          {label}
        </label>
      )}

      <div className="relative flex w-full items-center">
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <input
              type={
                isPassword ? (viewPassword ? 'text' : 'password') : rest.type
              }
              id={name}
              value={mask ? mask(field.value) : field.value}
              onChange={field.onChange}
              className={clsx(
                {
                  'bg-[#FCEDEF] ring-2 ring-red-500': error,
                  'focus:ring-esmerald-500': !error,
                },
                'border-gray-4 hover:border-gray-3 relative w-full rounded-md border px-4 py-3 outline-0 transition-all duration-200 placeholder:text-[#A0A6AD] focus:ring-2',
              )}
              {...rest}
            />
          )}
        />

        {isPassword && (
          <div className="absolute right-3 z-50">
            <button
              type="button"
              onClick={() => setViewPassword(!viewPassword)}
              className="flex cursor-pointer items-center justify-center p-1"
            >
              {viewPassword ? (
                <img src="/images/eye-show.svg" alt="" />
              ) : (
                <img src="/images/eye-hide.svg" alt="" />
              )}
            </button>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-[6px] flex items-center gap-[6px] text-red-500">
          {error}
        </div>
      )}
    </div>
  );
};
