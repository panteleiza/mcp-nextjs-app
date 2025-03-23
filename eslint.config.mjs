import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import nextPlugin from 'eslint-config-next';

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: [
      'node_modules',
      '.next',
      'out',
      'public',
      'build',
      'dist',
    ],
  },
];