// @ts-check
// eslint.config.js
import js from '@eslint/js'
import tseslintPlugin from '@typescript-eslint/eslint-plugin'
import tseslintPraser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tseslintPraser,
    },
    plugins: {
      '@typescript-eslint': tseslintPlugin,
      react,
      'react-hooks': reactHooks,
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          jsxBracketSameLine: false,
          parser: 'typescript',
        },
      ],
      curly: ['error', 'multi-line'],
      'react/prop-types': 'warn',
      'no-extra-boolean-cast': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-commonjs': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-inferrable-types': [
        'warn',
        {
          ignoreParameters: true,
          ignoreProperties: true,
        },
      ],
      'no-param-reassign': 'error',
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-redeclare': 'error',
      'react/jsx-key': 'error',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      strict: ['error', 'never'],
      'no-debugger': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/order': [
        'error',
        {
          groups: [
            'external', // react 和其他第三方依赖
            'builtin', // Node 内置模块
            'internal', // 项目内部路径，比如 @/utils
            ['parent', 'sibling', 'index'], // 相对路径
            'unknown', // 用来放样式等其他导入
          ],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
            {
              pattern: '**/*.css',
              group: 'unknown',
              position: 'after',
            },
            {
              pattern: '**/*.scss',
              group: 'unknown',
              position: 'after',
            },
            {
              pattern: '**/*.less',
              group: 'unknown',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always', // 组间空行
          alphabetize: { caseInsensitive: true },
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: [
      '/lambda/',
      '/scripts',
      '/config',
      '.history',
      'public',
      'dist',
      'node_modules/',
      '.umi',
      '.umi-production',
      'mock',
      '**/.umi/**',
      '**/.umi-test/**',
      '**/.umi-production/**',
      'config/',
      '**/public/**',
      'public/',
      '.history/',
    ],
  },
]
