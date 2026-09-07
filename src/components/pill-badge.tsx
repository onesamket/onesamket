import React from 'react'

export const PillBadge: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="pill-badge">
    <span className="pill-badge-line" aria-hidden="true" />
    <span className="pill-badge-label">{children}</span>
    <span className="pill-badge-line pill-badge-line-rev" aria-hidden="true" />
  </div>
)
