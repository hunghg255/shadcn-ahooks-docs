import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'shadcn-ahooks',
      transparentMode: 'top',
    },
    "githubUrl": "https://github.com/hunghg255/shadcn-ahooks",
    "links": [
      { text: 'llms-full.txt', external: true, "url": "https://shadcn-ahooks-docs.vercel.app/llms-full.txt", "on": "menu"},
    ],
  };
}
