'use client';

import { SandboxProvider } from './sandbox';
import { useTheme } from 'next-themes';
import { useId, type ComponentProps } from 'react';

type PreviewProviderProps = Omit<
  ComponentProps<typeof SandboxProvider>,
  'theme'
>;

export const PreviewProvider = ({
  options,
  ...props
}: PreviewProviderProps) => {
  const { resolvedTheme } = useTheme();
  const id = useId();

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <SandboxProvider
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      {...props}
      key={id}
      options={{
        ...options,
        externalResources: [
          ...(options?.externalResources || []),
          // new URL('/preview/shadcn.css', window.location.origin).toString(),
          // new URL(
          //   '/preview/tailwind-config.js',
          //   window.location.origin
          // ).toString(),
        ],
      }}
    />
  );
};
