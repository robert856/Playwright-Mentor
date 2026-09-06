import type { PropsWithChildren, ReactNode } from 'react'

interface CardProps {
  icon?: ReactNode
  title?: string
  action?: ReactNode
  className?: string
}

export default function Card({
  icon,
  title,
  action,
  className = '',
  children,
}: PropsWithChildren<CardProps>) {
  return (
    <div
      className={`rounded-2xl border border-card-border bg-card p-5 shadow-[0_1px_2px_rgba(43,38,32,0.04)] ${className}`}
    >
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between">
          {title && (
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              {icon}
              {title}
            </div>
          )}
          {action}
        </div>
      )}
      {children}
    </div>
  )
}
