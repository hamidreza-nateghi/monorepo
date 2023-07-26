/**
 * @author
 * Hamidreza Nateghi
 */

import { defaults as tsjPreset } from 'ts-jest/presets'

const modulesToTranspile = [].join('|')

export default {
  collectCoverage: true,
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  // preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    ...tsjPreset.transform,
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
        diagnostics: false,
        isolatedModules: true,
      },
    ],
  },
  transformIgnorePatterns: [`<rootDir>.*(node_modules)/?!(${modulesToTranspile})`],
  displayName: { name: 'Inspech Frontend', color: 'blue' },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'mjs', 'cjs', 'jsx', 'json', 'node'],
}
