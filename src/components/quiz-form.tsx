'use client'
import { FC, SubmitEvent, useCallback, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import styled from 'styled-components'
import { useTranslations } from 'next-intl'
import { Button } from './button'
import { TextInput } from './text-input'
import { Typography } from './typography'

type Props = {
  selectedService: string
}

export const QuizForm: FC<Props> = ({ selectedService }) => {
  const t = useTranslations('quiz.form')
  const [state, setState] = useState<'progress' | 'success' | 'error'>()

  // Slide in from below on mount
  const spring = useSpring({
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
    config: { tension: 200, friction: 24 },
  })

  const handleSubmit = useCallback(
    async (event: SubmitEvent<HTMLFormElement>) => {
      setState('progress')
      event.preventDefault()
      const formData = new FormData(event.target as HTMLFormElement)
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })
        .then(() => setState('success'))
        .catch(() => setState('error'))
    },
    [],
  )

  return (
    <FormWrapper style={spring}>
      <Typography variant="title" color="blue">
        {t('title')}
      </Typography>
      <Typography variant="body" color="blue">
        {t('subtitle')}
      </Typography>
      <Form name="Quiz Form" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="Quiz Form" />
        <input type="hidden" name="service" value={selectedService} />
        <TextInput label={t('nameLabel')} name="name" color="blue" required />
        <TextInput
          label={t('emailLabel')}
          name="email"
          type="email"
          color="blue"
          required
        />
        <TextInput label={t('companyLabel')} name="company" color="blue" />
        <TextInput
          render="textarea"
          label={t('commentsLabel')}
          name="comments"
          color="blue"
          // @ts-ignore
          rows="5"
        />
        <SubmitRow>
          {/* @ts-ignore */}
          <Button as="button" type="submit" state={state}>
            {t('send')}
          </Button>
        </SubmitRow>
      </Form>
    </FormWrapper>
  )
}

const FormWrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0 2rem;
`

const Form = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
`

const SubmitRow = styled.div`
  text-align: center;
  margin-top: 1rem;
`
