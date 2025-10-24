import { atom } from 'jotai'
import type { User } from './_types'

export const userAtom = atom<User | null>(null)
export const isAuthenticatedAtom = atom(get => get(userAtom) !== null)
export const accessTokenAtom = atom<string | null>(null)
