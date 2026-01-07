import { source } from '@/lib/source';
// import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { DocsLayout } from '@/components/layout/docs';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}
    githubUrl='https://github.com/hunghg255/shadcn-ahooks'
    >
        {children}
    </DocsLayout>
  );
}
