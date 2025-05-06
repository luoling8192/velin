import { readFile } from 'node:fs/promises'
import { renderSFCString } from '@velin-dev/core'
import { ref } from 'vue'

async function main() {
  const source = await readFile('./src/assets/MyComponent.vue', 'utf-8')
  const html = await renderSFCString(source, { language: ref('TypeScript') })

  // eslint-disable-next-line no-console
  console.log(html)
}

main()
