module.exports = {
  rules: {
    'declaration-no-important': true,

    /**
     * The following rules have been set to 'severity: 'warning'' so as not to
     * delay the Psammead change-freeze during the migration to Emotion.
     * Components failing these rules should be resolved independently.
     */
    'no-empty-source': [
      true,
      {
        severity: 'warning',
      },
    ],
    'unit-no-unknown': [
      true,
      {
        severity: 'warning',
      },
    ],
    'property-no-unknown': [
      true,
      {
        severity: 'warning',
      },
    ],
    'no-extra-semicolons': [
      true,
      {
        severity: 'warning',
      },
    ],
  },
  extends: ['stylelint-config-recommended'],
};
