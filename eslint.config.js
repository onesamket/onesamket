import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  ...tanstackConfig,
  {
    rules: {
      "import-x/order": "off",
      "sort-imports": "off",
      "order": "off"
    },
  },
]