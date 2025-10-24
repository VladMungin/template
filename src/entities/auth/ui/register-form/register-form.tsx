import { useForm, type SubmitHandler } from 'react-hook-form'
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
      <Input
        {...form.register('email', {
          required: 'Email обязателен',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Некорректный email',
          },
        })}
        type="email"
        placeholder="Email"
        disabled={registerMutation.isPending}
      />
      {form.formState.errors.email && (
        <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
      )}

      <Input
        {...form.register('password', {
          required: 'Пароль обязателен',
          minLength: {
            value: 6,
            message: 'Пароль должен содержать минимум 6 символов',
          },
        })}
        type="password"
        placeholder="Пароль"
        disabled={registerMutation.isPending}
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
