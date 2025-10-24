import { createRoute, Link } from '@tanstack/react-router'
import { Layout } from '@/pages'
import { AuthLayout, RegisterForm } from '@/entities/auth'
import { Button } from '@/shared/ui'

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Регистрация"
      description="Введите ваш email и пароль для регистрации в системе"
      footerText={
        <>
          Уже есть аккаунт?{' '}
          <Button asChild variant="link">
            <Link to="/login">Войти</Link>
          </Button>
        </>
      }
      form={<RegisterForm />}
    />
  )
}

export const registerRoute = createRoute({
  getParentRoute: () => Layout,
  path: '/register',
  component: RegisterPage,
})
