import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { useRegister } from '../../model'
import { Button, Input, Spinner } from '@/shared/ui'
import { useNavigate } from '@tanstack/react-router'
import type { RegisterRequest } from '../../model/_types'

export function RegisterForm() {
  const registerMutation = useRegister()
  const navigate = useNavigate()

  const form = useForm<RegisterRequest>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<RegisterRequest> = data => {
    registerMutation.mutate(data, {
      onSuccess: () => {
        navigate({ to: '/' })
      },
    })
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Controller
        render={({ field }) => (
          <Input
            {...field}
            type="email"
            placeholder="Email"
            disabled={registerMutation.isPending}
          />
        )}
        name="email"
        control={form.control}
      />

      {form.formState.errors.email && (
        <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
      )}
      <Controller
        render={({field}) => (
          <Input
            {...field}
            type="password"
            placeholder="Пароль"
            disabled={registerMutation.isPending}
          />
        )}
        name="password"
        control={form.control}
      />

      {form.formState.errors.password && (
        <p className="text-sm text-destructive">{form.formState.errors.password.message}</p>
      )}

      {registerMutation.isError && (
        <p className="text-sm text-destructive">
          {registerMutation.error?.message || 'Ошибка регистрации'}
        </p>
      )}

      <Button type="submit" disabled={registerMutation.isPending}>
        {registerMutation.isPending ? <Spinner /> : 'Зарегистрироваться'}
      </Button>
    </form>
  )
}
