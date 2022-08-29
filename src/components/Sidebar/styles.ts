import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

interface SidebarProps {
  isClosed: boolean
}

export const SidebarContainer = styled.aside<SidebarProps>`
  position: relative;

  width: ${(props) => (props.isClosed ? '5.75rem' : '16.25rem')};
  height: 100vh;

  background-color: ${(props) => props.theme.colors['base-background']};
`

export const Wrapper = styled.div`
  position: relative;
  max-width: 12.875rem;
  margin: 0 auto;
  padding: 1.5rem 0;
  height: 100%;
`

export const LogoContainer = styled.header<SidebarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  margin-bottom: 1.875rem;

  strong {
    display: ${(props) => (props.isClosed ? 'none' : 'block')};

    font-size: 1.375rem;
    color: ${(props) => props.theme.colors['base-brand-200']};
  }
`

export const SearchBox = styled.form<SidebarProps>`
  margin-top: 0.75rem;
  margin-bottom: 1.875rem;

  width: ${(props) => (props.isClosed ? '2.25rem' : '100%')};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${(props) => props.theme.colors['base-input-bg']};
  border-radius: 6px;
  border: 0;
  padding: 0 0.75rem;

  ${(props) =>
    props.isClosed &&
    css`
      margin-left: auto;
      margin-right: auto;
      height: 2.25rem;
      padding: 0 0.65rem;
      cursor: pointer;
    `}

  svg {
    color: ${(props) => props.theme.colors['base-input-search']};
  }

  input {
    background-color: transparent;
    outline: 0;
    border: none;

    width: 100%;
    height: 2.25rem;

    color: ${(props) => props.theme.colors['base-input-search']};

    display: none;

    ${(props) =>
      !props.isClosed &&
      css`
        display: block;
        &::placeholder {
          color: ${(props) => props.theme.colors['base-input-search']};
        }
      `}
  }
`

export const NavGroup = styled.div`
  display: grid;
  gap: 1.125rem;
`

interface NavItemContainerProps extends SidebarProps {
  isActive: boolean
}

export const NavItemContainer = styled(Link)<NavItemContainerProps>`
  width: fit-content;
  height: 1.875rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${(props) =>
    props.isClosed &&
    css`
      display: block;
      margin: 0 auto;
    `}

  svg {
    color: ${(props) =>
      props.isActive
        ? props.theme.colors['base-brand-200']
        : props.theme.colors['base-brand-100']};
  }

  > div {
    h3 {
      color: ${(props) =>
        props.isActive
          ? props.theme.colors['base-text-selected']
          : props.theme.colors['base-text']};

      font-size: 1rem;
    }

    span {
      color: ${(props) => props.theme.colors['base-text-subtitle']};
      font-size: 0.75rem;
    }
  }

  ${(props) =>
    !props.isActive &&
    css`
      &:hover {
        filter: brightness(1.3);
        transition: 0.2s;
      }
    `}
`

export const FooterGroup = styled.div<SidebarProps>`
  ${(props) =>
    props.isClosed &&
    css`
      display: flex;
      justify-content: center;
    `}
`
interface ThemeSwitcherProps extends SidebarProps {
  isChecked: boolean
}

export const ThemeSwitcherContainer = styled.div<ThemeSwitcherProps>`
  height: ${(props) => (props.isClosed ? '5rem' : '2.5rem')};
  width: ${(props) => (props.isClosed ? '2.5rem' : '5rem')};
  border-radius: 1.875rem;
  background-color: ${(props) => props.theme.colors['base-input-bg']};
  padding: 0.5rem;

  display: flex;
  flex-direction: ${(props) => (props.isClosed ? 'column' : 'row')};
  align-items: center;
  justify-content: ${(props) => (props.isChecked ? 'flex-end' : 'flex-start')};

  button {
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors['base-theme-button']};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Divider = styled.div<ThemeSwitcherProps>`
  width: ${(props) => (props.isClosed ? '2.625rem' : '100%')};
  height: 1px;
  background-color: ${(props) =>
    props.isChecked ? props.theme.colors['base-theme-button'] : '#fff'};
  opacity: ${(props) => (props.isChecked ? '1' : '15%')};

  ${(props) =>
    props.isClosed &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}
`

export const ToggleButton = styled.button`
  position: absolute;
  top: 1.82rem;
  right: -12px;

  svg {
    color: ${(props) => props.theme.colors['base-brand-200']};
  }
`
