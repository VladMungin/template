interface Env {
  readonly BASE_URL: string
}

export const getEnv = (): Env => ({
  BASE_URL: import.meta.env.VITE_BASE_URL || 'https://jsonplaceholder.typicode.com',
})
