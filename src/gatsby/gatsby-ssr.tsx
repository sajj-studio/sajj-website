import React from 'react'
import { WrapPageElementBrowserArgs } from 'gatsby'
import {
  PageContextController,
  PageContextValue,
} from '../contexts/page-context'
import { ThemeProvider } from 'styled-components'
import { theme } from '../components/sc-theme'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n'
import { GlobalStyles } from '../components/global-styles'

export const wrapPageElement = ({
  element,
  props,
}: WrapPageElementBrowserArgs<never, PageContextValue>): JSX.Element => (
  <ThemeProvider theme={theme}>
    <I18nextProvider i18n={i18n}>
      <PageContextController value={props.pageContext}>
        <GlobalStyles />
        {element}
      </PageContextController>
    </I18nextProvider>
  </ThemeProvider>
)
