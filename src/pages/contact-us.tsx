import React, { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import styled, { css } from 'styled-components'
import { Button } from '../components/button'
import { Checkbox } from '../components/checkbox'
import { Container } from '../components/container'
import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { TextInput } from '../components/text-input'
import { Typography } from '../components/typography'

const ContactUsPage: FC = () => {
  const methods = useForm()

  return (
    <Layout>
      <SEO title="Contact us" />
      <SectionContainer>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(() => {})}>
            <FormSection>
              <Typography variant="title" color="red">
                Contact us
              </Typography>
              <Typography variant="body" color="red">
                Please take a few seconds to tell us more about you and your
                project!
              </Typography>

              <TextInput label="Name" name="name" color="red" />
              <TextInput label="Email" name="email" color="red" />
              <TextInput
                label="Company or project name"
                name="company"
                color="red"
              />
            </FormSection>

            <FormSection>
              <Typography variant="subtitle" color="blue">
                What services are you interested in?
              </Typography>
              <Typography variant="body" color="blue">
                Select as many as you want.
              </Typography>

              <Checkbox
                label="Logo & Branding"
                name="services.0"
                value="branding"
                color="blue"
              />
              <Checkbox
                label="Web design"
                name="services.1"
                value="design"
                color="blue"
              />
              <Checkbox
                label="Social media"
                name="services.2"
                value="media"
                color="blue"
              />
            </FormSection>

            <FormSection>
              <Typography variant="subtitle" color="blue">
                Additional information
              </Typography>
              <TextInput
                render="textarea"
                label="Type here"
                name="additional"
                color="blue"
                //@ts-ignore
                rows="7"
              />

              <AlignCenter>
                <Button as="button" type="submit">
                  Send
                </Button>
              </AlignCenter>
            </FormSection>
          </Form>
        </FormProvider>
      </SectionContainer>
    </Layout>
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

export default ContactUsPage
