import { createRoute, Link } from '@tanstack/react-router'
import { Layout } from '@/pages'
import { AuthLayout, LoginForm } from '@/entities/auth'
import { Button } from '@/shared/ui'

const LoginPage = () => {
  return (
    <AuthLayout
      title="Вход в систему"
      description="Введите ваш email и пароль для входа в систему"
      footerText={
        <>
          Нет аккаунта?{' '}
          <Button asChild variant="link">
            <Link to="/register">Зарегистрироваться</Link>
          </Button>
        </>
      }
      form={<LoginForm />}
    />
  )
}

export const loginRoute = createRoute({
  getParentRoute: () => Layout,
  path: '/login',
  component: LoginPage,
})
