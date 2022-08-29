import { ReactElement, ReactSVG } from 'react'
import { NavItemContainer } from './styles'

interface NavItemProps {
  icon: ReactElement<ReactSVG>
  title: string
  subtitle?: string
  path: string
  isSidebarClosed: boolean
}

export function NavItem({
  icon,
  title,
  subtitle,
  path,
  isSidebarClosed,
}: NavItemProps) {
  const isLinkActive = window.location.pathname === path

  return (
    <NavItemContainer
      to={path}
      isActive={isLinkActive}
      isClosed={isSidebarClosed}
    >
      {icon}

      {!isSidebarClosed && (
        <div>
          <h3>{title}</h3>
          <span>{subtitle}</span>
        </div>
      )}
    </NavItemContainer>
  )
}
