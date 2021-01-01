import React, { FC, useCallback, useState } from 'react'
import styled from 'styled-components'
import { SajjLogo } from '../assets/images/sajj-logo'
import { Container } from './container'
import { Hamburger } from './hamburger'

export const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = useCallback(() => {
    setIsOpen(isOpen => !isOpen)
  }, [])

  return (
    <HeaderContainer>
      <SajjLogo />
      <Hamburger isOpen={isOpen} onClick={toggle} />
    </HeaderContainer>
  )
}

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
`
