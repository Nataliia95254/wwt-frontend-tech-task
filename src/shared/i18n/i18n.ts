import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'

import { I18N_DEFAULT_LANGUAGE, I18N_DEFAULT_NS } from './i18nConstants'
import { resources } from './locales'

i18n.use(initReactI18next).init({
	resources: resources,
	debug: process.env.NODE_ENV === 'development',
	lng: I18N_DEFAULT_LANGUAGE,
	fallbackLng: I18N_DEFAULT_LANGUAGE,
	interpolation: {
		escapeValue: false
	},
	defaultNS: I18N_DEFAULT_NS
})

export default i18n
