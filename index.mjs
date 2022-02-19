import { visit } from 'unist-util-visit'

export default function remarkRegexp(...transformers) {
  return () => tree =>
    visit(tree, node => {
      const { children = [] } = node

      // only process paragraph
      if (node.type !== 'paragraph') return node

      const [child] = children

      // only process text paragraph
      if (child.type !== 'text') return node

      const transformer = transformers.find(({ test: regexp }) =>
        regexp.test(child.value)
      )

      // check for findings
      if (!transformer) return node

      // clean the marker
      child.value = child.value.replace(transformer.test, '')

      // process to modification
      node.data = {
        ...node.data,
        hName: transformer.type,
      }

      return node
    })
}
