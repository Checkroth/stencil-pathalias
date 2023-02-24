import MarkdownIt from 'markdown-it'
const md = new MarkdownIt({
  breaks: true,
})

export function toMarkdown(markdownText: string) {
  return markdownText ? md.render(markdownText) : ''
}
