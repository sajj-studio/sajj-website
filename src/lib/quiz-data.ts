import { FC } from 'react'
import { BrandingIcon } from '@/assets/images/branding-icon'
import { WebDesignIcon } from '@/assets/images/web-design-icon'
import { SocialMediaIcon } from '@/assets/images/social-media-icon'

export type QuizQuestion = {
  id: string
  questionKey: string // translation key within "quiz.{quizId}" namespace
  yes: string | null // id of next question, or null = quiz complete
  no: string | null
}

export type QuizColor = 'blue' | 'orange' | 'red'

export type QuizDefinition = {
  id: 'web-presence' | 'ongoing-support' | 'web-application'
  Icon: FC
  color: QuizColor
  labelKey: string
  startQuestion: string
  questions: Record<string, QuizQuestion>
}

export const quizzes: QuizDefinition[] = [
  {
    id: 'web-presence',
    Icon: BrandingIcon,
    color: 'blue',
    labelKey: 'quiz.web-presence.label',
    startQuestion: 'has-website',
    questions: {
      'has-website': {
        id: 'has-website',
        questionKey: 'has-website',
        yes: 'needs-redesign',
        no: 'has-brand-identity',
      },
      'needs-redesign': {
        id: 'needs-redesign',
        questionKey: 'needs-redesign',
        yes: 'has-brand-identity-redesign',
        no: null,
      },
      'has-brand-identity-redesign': {
        id: 'has-brand-identity-redesign',
        questionKey: 'has-brand-identity',
        yes: null,
        no: null,
      },
      'has-brand-identity': {
        id: 'has-brand-identity',
        questionKey: 'has-brand-identity',
        yes: 'needs-cms',
        no: 'needs-cms',
      },
      'needs-cms': {
        id: 'needs-cms',
        questionKey: 'needs-cms',
        yes: null,
        no: null,
      },
    },
  },
  {
    id: 'web-application',
    Icon: WebDesignIcon,
    color: 'orange',
    labelKey: 'quiz.web-application.label',
    startQuestion: 'is-app-project',
    questions: {
      'is-app-project': {
        id: 'is-app-project',
        questionKey: 'is-app-project',
        yes: 'has-existing-app',
        no: null,
      },
      'has-existing-app': {
        id: 'has-existing-app',
        questionKey: 'has-existing-app',
        yes: 'needs-api-integrations',
        no: 'needs-auth',
      },
      'needs-api-integrations': {
        id: 'needs-api-integrations',
        questionKey: 'needs-api-integrations',
        yes: null,
        no: null,
      },
      'needs-auth': {
        id: 'needs-auth',
        questionKey: 'needs-auth',
        yes: 'needs-roles',
        no: 'needs-database',
      },
      'needs-roles': {
        id: 'needs-roles',
        questionKey: 'needs-roles',
        yes: null,
        no: null,
      },
      'needs-database': {
        id: 'needs-database',
        questionKey: 'needs-database',
        yes: null,
        no: null,
      },
    },
  },
  {
    id: 'ongoing-support',
    Icon: SocialMediaIcon,
    color: 'red',
    labelKey: 'quiz.ongoing-support.label',
    startQuestion: 'has-live-site',
    questions: {
      'has-live-site': {
        id: 'has-live-site',
        questionKey: 'has-live-site',
        yes: 'needs-content-updates',
        no: null,
      },
      'needs-content-updates': {
        id: 'needs-content-updates',
        questionKey: 'needs-content-updates',
        yes: 'needs-hosting-managed',
        no: 'needs-monitoring',
      },
      'needs-hosting-managed': {
        id: 'needs-hosting-managed',
        questionKey: 'needs-hosting-managed',
        yes: null,
        no: null,
      },
      'needs-monitoring': {
        id: 'needs-monitoring',
        questionKey: 'needs-monitoring',
        yes: 'needs-seo',
        no: 'needs-social-setup',
      },
      'needs-seo': {
        id: 'needs-seo',
        questionKey: 'needs-seo',
        yes: null,
        no: null,
      },
      'needs-social-setup': {
        id: 'needs-social-setup',
        questionKey: 'needs-social-setup',
        yes: null,
        no: null,
      },
    },
  },
]
