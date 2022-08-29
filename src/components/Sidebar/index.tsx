import { useContext, useState } from 'react'
import {
  CaretCircleDoubleLeft,
  CaretCircleDoubleRight,
  ChatCircleDots,
  Cube,
  Handbag,
  Heart,
  ImageSquare,
  Lightning,
  MagnifyingGlass,
  MoonStars,
  SlidersHorizontal,
  Sun,
} from 'phosphor-react'
import { useLocation } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import { ThemeContext } from '../../contexts/ThemeContext'
import { NavItem } from './NavItem'

import {
  SidebarContainer,
  Wrapper,
  LogoContainer,
  Divider,
  SearchBox,
  ToggleButton,
  NavGroup,
  FooterGroup,
  ThemeSwitcherContainer,
} from './styles'

export function Sidebar() {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false)

  const { changeTheme, theme } = useContext(ThemeContext)

  const path = useLocation().pathname

  const setIconWeight = (pathname: string) => {
    return path === pathname ? 'fill' : 'regular'
  }

  const isLightTheme = theme.title === 'light'

  return (
    <SidebarContainer isClosed={isSidebarClosed}>
      <Wrapper>
        <LogoContainer isClosed={isSidebarClosed}>
          <img src={logoImg} alt="" />

          <strong>ModGallery</strong>
        </LogoContainer>

        <Divider isClosed={isSidebarClosed} isChecked={isLightTheme} />

        <SearchBox isClosed={isSidebarClosed}>
          <MagnifyingGlass
            size={18}
            weight={'bold'}
            onClick={() => isSidebarClosed && setIsSidebarClosed(false)}
          />

          <input
            type="text"
            placeholder={`${isSidebarClosed ? '' : 'Search instances'}`}
          />
        </SearchBox>

        <NavGroup>
          <NavItem
            icon={<Lightning size={20} weight={setIconWeight('/')} />}
            path="/"
            title="Weekly top "
            subtitle="promoted"
            isSidebarClosed={isSidebarClosed}
          />

          <NavItem
            icon={<Cube size={20} weight={setIconWeight('/single-objects')} />}
            path="/single-objects"
            title="Single Objects"
            isSidebarClosed={isSidebarClosed}
          />

          <NavItem
            icon={<Handbag size={20} weight={setIconWeight('/bag')} />}
            path="/bag"
            title="Bag"
            isSidebarClosed={isSidebarClosed}
          />
        </NavGroup>

        <Divider
          className="mt"
          isClosed={isSidebarClosed}
          isChecked={isLightTheme}
        />

        <NavGroup className="mt">
          <NavItem
            icon={
              <ImageSquare size={20} weight={setIconWeight('/my-gallery')} />
            }
            path="/my-gallery"
            title="My gallery"
            isSidebarClosed={isSidebarClosed}
          />

          <NavItem
            icon={<Heart size={20} weight={setIconWeight('/favourites')} />}
            path="/favourites"
            title="Favourites"
            isSidebarClosed={isSidebarClosed}
          />
        </NavGroup>

        <Divider
          className="mt"
          isClosed={isSidebarClosed}
          isChecked={isLightTheme}
        />

        <FooterGroup isClosed={isSidebarClosed} className="mt">
          <NavGroup className="center">
            <NavItem
              icon={
                <SlidersHorizontal
                  size={20}
                  weight={setIconWeight('/settings')}
                />
              }
              path="/settings"
              title="Settings"
              isSidebarClosed={isSidebarClosed}
            />

            <NavItem
              icon={<ChatCircleDots size={20} weight={setIconWeight('/faq')} />}
              path="/faq"
              title="FAQ"
              isSidebarClosed={isSidebarClosed}
            />

            <ThemeSwitcherContainer
              isChecked={isLightTheme}
              isClosed={isSidebarClosed}
            >
              <button onClick={() => changeTheme()}>
                {isLightTheme ? <Sun size={20} /> : <MoonStars size={20} />}
              </button>
            </ThemeSwitcherContainer>
          </NavGroup>
        </FooterGroup>
      </Wrapper>

      <ToggleButton onClick={() => setIsSidebarClosed(!isSidebarClosed)}>
        {isSidebarClosed ? (
          <CaretCircleDoubleRight size={24} weight={'fill'} />
        ) : (
          <CaretCircleDoubleLeft size={24} weight={'fill'} />
        )}
      </ToggleButton>
    </SidebarContainer>
  )
}
