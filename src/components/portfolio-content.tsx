'use client'
import { FC } from 'react'
import styled, { css } from 'styled-components'
import { useTranslations } from 'next-intl'
import { Container } from './container'
import { ProjectCard } from './project-card'
import { portfolioProjects } from '@/lib/portfolio-data'

export const PortfolioContent: FC = () => {
  const t = useTranslations('portfolio')
  return (
    <_Section>
      <Container>
        <_Title>{t('title')}</_Title>
        <_Grid>
          {portfolioProjects.map(({ id, ...project }) => (
            <ProjectCard key={id} {...project} />
          ))}
        </_Grid>
      </Container>
    </_Section>
  )
}

const _Section = styled.section`
  ${({ theme }) => css`
    padding: 3rem 0 5rem;

    ${theme.media.desktop} {
      padding: 4rem 0 6rem;
    }
  `}
`

const _Title = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.typography.sansSerif};
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 2.5rem;
    color: ${theme.colors.orange};
    margin: 0 0 2.5rem;
  `}
`

const _Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 3.5rem 2rem;

    ${theme.media.desktop} {
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem 2rem;
    }
  `}
`
