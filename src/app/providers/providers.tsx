import { WithTanstakRouter } from './_with-tanstak-router.tsx'
import { WithTanstakQuery } from './_with-tanstak-query'
import { composeProviders } from '@/shared/helpers'
import { WithJotai } from './_with-jotai'
import { WithTheme } from '@/app/providers/_with-theme'
import { WithAuth } from './_with-auth'

export const WithProviders = composeProviders(WithTanstakQuery, WithJotai, WithTheme, WithAuth)

export const Providers = () => {
  return (
    <WithProviders>
      <WithTanstakRouter />
    </WithProviders>
  )
}
