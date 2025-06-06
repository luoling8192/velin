import rehypeParse from 'rehype-parse'
import rehypeRemark from 'rehype-remark'
import rehypeRemoveComments from 'rehype-remove-comments'
import remarkStringify from 'remark-stringify'
import { unified } from 'unified'

export async function toMarkdown(html: string): Promise<string> {
  const htmlToMarkdownProcessor = unified()
    .use(rehypeParse)
    .use(rehypeRemoveComments)
    .use(rehypeRemark)
    .use(remarkStringify, { bullet: '-' })

  const result = await htmlToMarkdownProcessor.process(html)
  return result.toString()
}
