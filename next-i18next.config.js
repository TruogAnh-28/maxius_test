module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
  },
  /** To avoid issues with SSR and browser-specific logic */
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
};
