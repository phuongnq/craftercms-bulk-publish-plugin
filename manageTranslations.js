const extract = require('./src/i18n/messages/extract.json')
const manageTranslations = require('react-intl-translations-manager').default

manageTranslations({
  messagesDirectory: './src/i18n/messages',
  translationsDirectory: './src/i18n/translations',
  whitelistsDirectory: './src/i18n/whitelists',
  languages: ['es'],
  singleMessagesFile: false,
  overrideCoreMethods: {
    provideExtractedMessages() {
      return [
        {
          descriptors: Object.entries(extract).map(([id, descriptor]) => ({
            id,
            defaultMessage: descriptor.defaultMessage
          }))
        }
      ]
    }
  }
})
