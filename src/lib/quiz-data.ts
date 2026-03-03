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
  id: 'web-design' | 'hosting' | 'seo'
  Icon: FC
  color: QuizColor
  labelKey: string
  startQuestion: string
  questions: Record<string, QuizQuestion>
}

export const quizzes: QuizDefinition[] = [
  {
    id: 'web-design',
    Icon: WebDesignIcon,
    color: 'orange',
    labelKey: 'quiz.web-design.label',
    startQuestion: 'has-website',
    questions: {
      'has-website': {
        id: 'has-website',
        questionKey: 'has-website',
        yes: 'needs-redesign',
        no: 'is-platform',
      },
      'needs-redesign': {
        id: 'needs-redesign',
        questionKey: 'needs-redesign',
        yes: 'has-brand-identity-for-redesign',
        no: 'needs-new-features',
      },
      'has-brand-identity-for-redesign': {
        id: 'has-brand-identity-for-redesign',
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
      'needs-new-features': {
        id: 'needs-new-features',
        questionKey: 'needs-new-features',
        yes: 'needs-external-services-existing',
        no: 'needs-content-management',
      },
      'needs-external-services-existing': {
        id: 'needs-external-services-existing',
        questionKey: 'needs-external-services',
        yes: null,
        no: null,
      },
      'needs-content-management': {
        id: 'needs-content-management',
        questionKey: 'needs-content-management',
        yes: null,
        no: null,
      },
      'is-platform': {
        id: 'is-platform',
        questionKey: 'is-platform',
        yes: 'needs-auth',
        no: 'needs-cms-new',
      },
      'needs-auth': {
        id: 'needs-auth',
        questionKey: 'needs-auth',
        yes: 'needs-roles',
        no: 'needs-external-services-platform',
      },
      'needs-roles': {
        id: 'needs-roles',
        questionKey: 'needs-roles',
        yes: 'has-brand-identity',
        no: 'has-brand-identity',
      },
      'needs-external-services-platform': {
        id: 'needs-external-services-platform',
        questionKey: 'needs-external-services',
        yes: 'has-brand-identity',
        no: 'has-brand-identity',
      },
      'needs-cms-new': {
        id: 'needs-cms-new',
        questionKey: 'needs-cms',
        yes: 'has-brand-identity',
        no: 'has-brand-identity',
      },
      'has-brand-identity': {
        id: 'has-brand-identity',
        questionKey: 'has-brand-identity',
        yes: null,
        no: null,
      },
    },
  },
  {
    id: 'hosting',
    Icon: BrandingIcon,
    color: 'blue',
    labelKey: 'quiz.hosting.label',
    startQuestion: 'wants-managed-hosting',
    questions: {
      'wants-managed-hosting': {
        id: 'wants-managed-hosting',
        questionKey: 'wants-managed-hosting',
        yes: 'needs-content-updates-managed',
        no: 'wants-monitoring',
      },
      'needs-content-updates-managed': {
        id: 'needs-content-updates-managed',
        questionKey: 'needs-content-updates',
        yes: 'wants-bundle-plan',
        no: 'wants-monitoring-managed',
      },
      'wants-bundle-plan': {
        id: 'wants-bundle-plan',
        questionKey: 'wants-bundle-plan',
        yes: 'wants-security-monitoring',
        no: 'wants-security-monitoring',
      },
      'wants-security-monitoring': {
        id: 'wants-security-monitoring',
        questionKey: 'wants-security-monitoring',
        yes: null,
        no: null,
      },
      'wants-monitoring-managed': {
        id: 'wants-monitoring-managed',
        questionKey: 'wants-monitoring',
        yes: 'wants-monthly-report-managed',
        no: 'needs-backup-managed',
      },
      'wants-monthly-report-managed': {
        id: 'wants-monthly-report-managed',
        questionKey: 'wants-monthly-report',
        yes: null,
        no: null,
      },
      'needs-backup-managed': {
        id: 'needs-backup-managed',
        questionKey: 'needs-backup',
        yes: null,
        no: null,
      },
      'wants-monitoring': {
        id: 'wants-monitoring',
        questionKey: 'wants-monitoring',
        yes: 'wants-monthly-report',
        no: 'needs-backup',
      },
      'wants-monthly-report': {
        id: 'wants-monthly-report',
        questionKey: 'wants-monthly-report',
        yes: 'needs-backup-after-report',
        no: 'needs-backup-after-report',
      },
      'needs-backup-after-report': {
        id: 'needs-backup-after-report',
        questionKey: 'needs-backup',
        yes: null,
        no: null,
      },
      'needs-backup': {
        id: 'needs-backup',
        questionKey: 'needs-backup',
        yes: 'needs-content-updates-basic',
        no: 'needs-content-updates-basic',
      },
      'needs-content-updates-basic': {
        id: 'needs-content-updates-basic',
        questionKey: 'needs-content-updates',
        yes: null,
        no: null,
      },
    },
  },
  {
    id: 'seo',
    Icon: SocialMediaIcon,
    color: 'red',
    labelKey: 'quiz.seo.label',
    startQuestion: 'wants-seo',
    questions: {
      'wants-seo': {
        id: 'wants-seo',
        questionKey: 'wants-seo',
        yes: 'has-seo-review',
        no: 'needs-social-profiles',
      },
      'has-seo-review': {
        id: 'has-seo-review',
        questionKey: 'has-seo-review',
        yes: 'wants-seo-reports',
        no: 'wants-seo-reports',
      },
      'wants-seo-reports': {
        id: 'wants-seo-reports',
        questionKey: 'wants-seo-reports',
        yes: 'needs-social-setup-seo',
        no: 'needs-social-setup-seo',
      },
      'needs-social-setup-seo': {
        id: 'needs-social-setup-seo',
        questionKey: 'needs-social-setup-seo',
        yes: null,
        no: null,
      },
      'needs-social-profiles': {
        id: 'needs-social-profiles',
        questionKey: 'needs-social-profiles',
        yes: 'should-match-brand',
        no: 'wants-visibility',
      },
      'should-match-brand': {
        id: 'should-match-brand',
        questionKey: 'should-match-brand',
        yes: 'wants-seo-with-social',
        no: 'wants-seo-with-social',
      },
      'wants-seo-with-social': {
        id: 'wants-seo-with-social',
        questionKey: 'wants-seo-with-social',
        yes: null,
        no: null,
      },
      'wants-visibility': {
        id: 'wants-visibility',
        questionKey: 'wants-visibility',
        yes: 'wants-seo-general',
        no: null,
      },
      'wants-seo-general': {
        id: 'wants-seo-general',
        questionKey: 'wants-seo-general',
        yes: null,
        no: null,
      },
    },
  },
]
