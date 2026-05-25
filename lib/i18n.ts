// Description: loads translations from JSON locale files and exports typed helpers
// Author: Pinchas
// Created with claude.md rules

import en from './locales/en.json'
import he from './locales/he.json'

export type Lang = 'en' | 'he'

export type Segment = string | { em: string } | { stroke: string }

export type Translation = typeof en

const translations: Record<Lang, Translation> = { en, he }

export default translations
