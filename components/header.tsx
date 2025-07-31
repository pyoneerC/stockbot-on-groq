import * as React from 'react'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import { Session } from '@/lib/types'

async function UserOrLogin() {
  return (
    <>
      <div className="flex items-center">
        <div className="text-xl font-bold text-primary">
          AI Stock Assistant
        </div>
      </div>

      <div className="flex items-center font-semibold">
        <div className="mx-4 text-muted-foreground">|</div>
        <a href="/new">Dashboard</a>
        <div className="mx-4 text-muted-foreground">|</div>
        <a
          href="/new"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'ghost' }))}
          style={{ borderRadius: 0, color: '#0066cc', padding: '4px' }}
        >
          <span className="flex">Start New Chat</span>
        </a>
      </div>
    </>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 backdrop-blur-xl">
      <div className="flex items-center">
        <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
          <UserOrLogin />
        </React.Suspense>
      </div>
      <div className="flex items-center justify-end space-x-2">
        {/* Additional features can be added here */}
      </div>
    </header>
  )
}
