import { WithTanstakRouter } from './_with-tanstak-router.tsx'
import { WithTanstakQuery } from './_with-tanstak-query'
import { composeProviders } from '@/shared/helpers'
import { WithJotai } from './_with-jotai'
import { WithTheme } from '@/app/providers/_with-theme'

export const WithProviders = composeProviders(WithTanstakQuery, WithJotai, WithTheme)

export const Providers = () => {
  return (
    <WithProviders>
      <WithTanstakRouter />
    </WithProviders>
  )
}
