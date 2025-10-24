import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/shared/ui'

export function AuthLayout({
  form,
  title,
  description,
  footerText,
}: {
  form: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  footerText: React.ReactNode
}) {
  return (
    <main className="grow flex flex-col pt-[200px] items-center [&_a]:underline [&_a]:text-primary">
      <Card className="w-full max-w-[400px]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{form}</CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">{footerText}</p>
        </CardFooter>
      </Card>
    </main>
  )
}
