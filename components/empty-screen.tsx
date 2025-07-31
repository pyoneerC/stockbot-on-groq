import { UseChatHelpers } from 'ai/react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to AI Stock Assistant!
        </h1>
        <p className="leading-normal text-sm">
          Advanced AI chatbot that provides comprehensive stock market analysis with interactive charts and real-time data.{' '}
          <span className="font-muted-foreground">
            Get instant access to market insights, financial data, and trading tools powered by cutting-edge AI technology.
          </span>
        </p>
      </div>
    </div>
  )
}
