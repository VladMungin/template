import { atom } from 'jotai'
import type { Post } from '@/entities/post'

export const lastUpdatedPostAtom = atom<null | Post>(null)
