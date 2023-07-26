/**
 * @author
 * Hamidreza Nateghi
 */

import { defaults as tsjPreset } from 'ts-jest/presets'
import type { JestConfigWithTsJest } from 'ts-jest'

const modulesToTranspile = [].join('|')

export default {
  collectCoverage: true,
  coverageProvider: 'v8',
  // coverageReporters: ['text-summary'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
  // testRegex: `\\.(${['unit-test', 'test'].join('|')})\\.[jt]sx?$`,
  transform: {
    ...tsjPreset.transform,
    '^.+\\.(t|j)sx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
        diagnostics: false,
        isolatedModules: true,
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: [`<rootDir>.*(node_modules)/?!(${modulesToTranspile})`],
}
