module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error', // این خط ارور می‌دهد اگر از متغیری استفاده نشود
      {
        vars: 'all', // برای تمام متغیرها اعمال می‌شود
        args: 'after-used', // فقط پارامترهای استفاده‌نشده بعد از آخرین استفاده بررسی می‌شود
        ignoreRestSiblings: true, // نادیده‌گرفتن بقیه‌ عناصر
        varsIgnorePattern: '^_', // متغیرهایی که با _ شروع می‌شوند نادیده گرفته می‌شوند
        argsIgnorePattern: '^_', // پارامترهایی که با _ شروع می‌شوند نادیده گرفته می‌شوند
      },
    ],
  },
}
