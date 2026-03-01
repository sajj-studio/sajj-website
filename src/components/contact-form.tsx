'use client'
import { FC, SubmitEvent, useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { Button } from './button'
import { Checkbox } from './checkbox'
import { Container } from './container'
import { TextInput } from './text-input'
import { Typography } from './typography'
import { useTranslations } from 'next-intl'

export const ContactForm: FC = () => {
  const [state, setState] = useState<'progress' | 'success' | 'error'>()
  const t = useTranslations('contact')

  const sendResponses = useCallback(
    async (event: SubmitEvent<HTMLFormElement>) => {
      setState('progress')
      event.preventDefault()

      const formData = new FormData(event.target as HTMLFormElement)
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })
        .then(() => {
          setState('success')
        })
        .catch(() => {
          setState('error')
        })
    },
    [],
  )

  return (
    <SectionContainer>
      <Form name="Contact Form" onSubmit={sendResponses}>
        <FormSection>
          <input type="hidden" name="form-name" value="Contact Form" />

          <Typography variant="title" color="blue">
            {t('contact')}
          </Typography>
          <Typography variant="body" color="blue">
            {t('takeAFewSeconds')}
          </Typography>

          <TextInput label={t('nameLabel')} name="name" color="blue" />
          <TextInput label={t('emailLabel')} name="email" color="blue" />
          <TextInput label={t('companyLabel')} name="company" color="blue" />
        </FormSection>

        <FormSection>
          <Typography variant="subtitle" color="red">
            {t('services')}
          </Typography>
          <Typography variant="body" color="red">
            {t('selectMany')}
          </Typography>

          <Checkbox
            label={t('branding')}
            id="branding"
            name="services[]"
            value="branding"
            color="red"
          />
          <Checkbox
            label={t('design')}
            id="design"
            name="services[]"
            value="design"
            color="red"
          />
          <Checkbox
            label={t('socialMedia')}
            id="media"
            name="services[]"
            value="media"
            color="red"
          />
        </FormSection>

        <FormSection>
          <Typography variant="subtitle" color="blue">
            {t('additional')}
          </Typography>
          <TextInput
            render="textarea"
            label={t('typeHere')}
            name="additional"
            color="blue"
            // @ts-ignore
            rows="7"
          />

          <AlignCenter>
            {/* @ts-ignore */}
            <Button as="button" type="submit" state={state}>
              {t('send')}
            </Button>
          </AlignCenter>
        </FormSection>
      </Form>
    </SectionContainer>
  )
}

const SectionContainer = styled(Container)`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const Form = styled.form`
  margin: 1.25rem 0;
  display: grid;
  grid-gap: 2rem 8rem;
`

const FormSection = styled.fieldset`
  ${({ theme }) => css`
    ${theme.media.desktop} {
      :nth-child(1) {
        grid-column-start: 1;
        grid-column-end: 2;
      }
      :nth-child(2) {
        grid-column-start: 2;
        grid-column-end: 3;
      }
      :nth-child(3) {
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  `}
`

const AlignCenter = styled.div`
  text-align: center;

  ${Button} {
    margin-bottom: 1.25rem;
  }
`
