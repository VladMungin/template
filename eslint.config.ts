import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import unusedImports from 'eslint-plugin-unused-imports'
import prettier from 'eslint-config-prettier'
import globals from 'globals'
import nextPlugin from '@next/eslint-plugin-next'

export default [
  // Базовые настройки для всех файлов
  {
    ignores: ['**/dist/', '**/build/', '**/node_modules/', '**/.next/'],
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2018,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2015,
        ...globals.node,
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...typescriptEslint.configs.recommended.rules,

      // Базовые правила
      'no-var': 'error',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'eol-last': ['error', 'always'],
      'arrow-body-style': ['warn', 'as-needed'],
      'jsx-quotes': ['warn', 'prefer-single'],
      'no-extra-semi': 'off',
      'no-case-declarations': 'off',
      'no-restricted-imports': 'off',
      'import/no-unresolved': 'off',
      'no-irregular-whitespace': 'off',
      'no-restricted-exports': 'off',
      'no-restricted-globals': 'off',
      'no-async-promise-executor': 'off',
      'no-unsafe-optional-chaining': 'off',

      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],

      // React правила
      'react/jsx-uses-vars': 'error',
      'react/no-unescaped-entities': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Конфигурация для TypeScript файлов
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2018,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2015,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      'unused-imports': unusedImports,
      react: reactPlugin,
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
    },
    rules: {
      // Базовые правила
      'no-var': 'error',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'eol-last': ['error', 'always'],
      'arrow-body-style': ['warn', 'as-needed'],
      'jsx-quotes': ['warn', 'prefer-single'],
      'no-extra-semi': 'off',
      'no-case-declarations': 'off',
      'no-restricted-imports': 'off',
      'import/no-unresolved': 'off',
      'no-irregular-whitespace': 'off',
      'no-restricted-exports': 'off',
      'no-restricted-globals': 'off',
      'no-async-promise-executor': 'off',
      'no-unsafe-optional-chaining': 'off',
      'consistent-return': 'off',
      'no-empty-pattern': 'off',
      'no-use-before-define': 'off',
      'no-shadow': 'off',
      'no-param-reassign': 'off',
      'max-params': ['error', 3],

      // Консоль
      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],

      // React правила
      'react/jsx-uses-vars': 'error',
      'react/no-unescaped-entities': 'off',
      'react/jsx-filename-extension': [
        2,
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'react/jsx-no-constructed-context-values': 'off',
      'react/function-component-definition': 'off',
      'react/destructuring-assignment': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-unstable-nested-components': 'off',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',

      // TypeScript правила
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
        },
      ],
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-throw-literal': 'off',
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/default-param-last': 'off',
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/comma-dangle': 'off',

      // Именование
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
        },
        {
          selector: 'enum',
          format: ['UPPER_CASE'],
          leadingUnderscore: 'forbid',
          suffix: ['_ENUM'],
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
      ],

      // Импорты
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'warn',

      // Неиспользуемые импорты
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // Синтаксические ограничения
      'no-restricted-syntax': ['error', 'WithStatement'],

      // Next.js правила
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-before-interactive-script-outside-document': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Prettier конфигурация (применяется последней)
  prettier,
]
