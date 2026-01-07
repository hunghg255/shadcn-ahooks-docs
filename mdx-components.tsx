import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import { OpenInV0Button } from '@/components/ui/v0-open-button';
import {Preview} from '@/components/preview';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    OpenInV0Button,
    Preview,
    ...components,
  };
}
