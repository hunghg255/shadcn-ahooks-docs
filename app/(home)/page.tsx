'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4 py-16">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl animate-pulse">
              <svg
                className="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-bold">⚡</span>
            </div>
          </div>
        </div>

        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              shadcn/ui Registry for ahooks
            </span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            shadcn-ahooks
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-2xl md:text-3xl font-semibold text-muted-foreground max-w-3xl mx-auto">
          Production-ready React Hooks
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A comprehensive collection of <span className="font-semibold text-foreground">75+ React hooks</span> from{' '}
          <a
            href="https://ahooks.js.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold underline decoration-2 underline-offset-2"
          >
            ahooks
          </a>
          {' '}library, installable via shadcn/ui CLI. Copy-paste the hooks you need and own the code.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/docs"
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2"
          >
            Browse Hooks
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <a
            href="https://github.com/alibaba/hooks"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 font-semibold hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">75+</div>
            <div className="text-sm text-muted-foreground mt-2">React Hooks</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">100%</div>
            <div className="text-sm text-muted-foreground mt-2">TypeScript</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">0</div>
            <div className="text-sm text-muted-foreground mt-2">Dependencies</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 pt-16 max-w-6xl mx-auto">
          <div className="group p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 hover:shadow-xl transition-all hover:scale-105">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Battle-Tested</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Used in production by thousands of developers. Each hook is thoroughly tested and optimized for real-world scenarios.
            </p>
          </div>

          <div className="group p-8 rounded-2xl border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 hover:shadow-xl transition-all hover:scale-105">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3">Copy & Own</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Install via shadcn/ui CLI and own the code. Customize freely without worrying about breaking changes.
            </p>
          </div>

          <div className="group p-8 rounded-2xl border-2 border-pink-200 dark:border-pink-800 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950/50 dark:to-pink-900/50 hover:shadow-xl transition-all hover:scale-105">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-3">Full Documentation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Comprehensive docs with TypeScript types, examples, and API references for every hook.
            </p>
          </div>
        </div>

        {/* Installation Example */}
        <div className="pt-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Quick Start</h2>
          <div className="text-left space-y-4">
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-2">1. Install a hook</div>
              <div className="flex items-center gap-2 p-4 rounded-xl bg-gray-100 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 font-mono text-sm">
                <span className="flex-1">npx shadcn@latest add https://shadcn-ahooks.vercel.app/r/useRequest.json</span>
                <button
                  onClick={() => navigator.clipboard.writeText('npx shadcn@latest add https://shadcn-ahooks.vercel.app/r/useRequest.json')}
                  className="text-blue-600 hover:text-blue-700 transition-colors p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
                  title="Copy to clipboard"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-muted-foreground mb-2">2. Use in your component</div>
              <pre className="p-4 rounded-xl bg-gray-900 dark:bg-black border-2 border-gray-800 overflow-x-auto text-sm">
                <code className="text-gray-100">
{`import { useRequest } from '@/hooks/useRequest';

function UserProfile() {
  const { data, loading } = useRequest(
    () => fetch('/api/user').then(res => res.json())
  );

  if (loading) return <div>Loading...</div>;
  return <div>Hello {data.name}!</div>;
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
