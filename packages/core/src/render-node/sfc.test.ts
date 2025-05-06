import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

import { renderSFCString } from './sfc'

describe('renderMarkdownString', async () => {
  it('should be able to render simple SFC', async () => {
    const content = await readFile(join(dirname(fileURLToPath(import.meta.url)), 'testdata', 'simple.velin.vue'), 'utf-8')
    const result = await renderSFCString(content)
    expect(result).toBeDefined()
    expect(result).not.toBe('')
    expect(result).toBe('# Hello, world!\n')
  })

  it('should be able to render script setup SFC', async () => {
    const content = await readFile(join(dirname(fileURLToPath(import.meta.url)), 'testdata', 'script-setup.velin.vue'), 'utf-8')
    const result = await renderSFCString(content)
    expect(result).toBeDefined()
    expect(result).not.toBe('')
    expect(result).toBe('# Count: 0\n')
  })
})
