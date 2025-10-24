import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { useLogin } from '../../model'
import { Button, Input, Spinner } from '@/shared/ui'
import { useNavigate } from '@tanstack/react-router'
import type { LoginRequest } from '../../model/_types'

export function LoginForm() {
  const loginMutation = useLogin()
  const navigate = useNavigate()

  const form = useForm<LoginRequest>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<LoginRequest> = data => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        navigate({ to: '/' })
      },
    })
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Controller
        control={form.control}
        render={({ field }) => (
          <Input {...field} type="email" placeholder="Email" disabled={loginMutation.isPending} />
        )}
        name="email"
      />

      {form.formState.errors.email && (
        <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
      )}
      <Controller
        render={({ field }) => (
          <Input
            {...field}
            type="password"
            placeholder="Пароль"
            disabled={loginMutation.isPending}
          />
        )}
        name="password"
        control={form.control}
      />

      {form.formState.errors.password && (
        <p className="text-sm text-destructive">{form.formState.errors.password.message}</p>
      )}

      {loginMutation.isError && (
        <p className="text-sm text-destructive">{loginMutation.error?.message || 'Ошибка входа'}</p>
      )}

      <Button type="submit" disabled={loginMutation.isPending}>
        {loginMutation.isPending ? <Spinner /> : 'Войти'}
      </Button>
    </form>
  )
}
