import React from "react"

export function PageHeader({ title, description, children }) {
  return (
    <div className="flex items-center justify-between pb-6 border-b">
      <div className="space-y-1">
        <h1 className="text-2xl font-heading font-semibold text-foreground">{title}</h1>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      {children && <div className="flex items-center space-x-2">{children}</div>}
    </div>
  )
}
