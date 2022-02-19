# remark-regexp

## What is it?

A deadly simple plugin to help you unlock markdown and mdx. It will only process paragraphs based on a regexp you'll give, and it will set the rendered html tag based on the type you pass.

### Example

With these settings:

```js
{
  test: /^!&gt;|!>\s/,
  type: 'mark',
}
```

...when you write: `!> hello :)`, instead of `<p>hello :)<p>` it will render `<mark>hello :)</mark>`

## How to use it?

1. `npm i -S remark-regexp`

2. In your `next.config.mjs`, add:

  ```js
  import remarkRegexp from "remark-regexp";

  const confMdx = withMdx({
    extension: /\.mdx$/,
    options: {
      remarkPlugins: [
        remarkRegexp({
          test: /^!&gt;|!>\s/,
          type: 'mark',
        }),
      ],
      rehypePlugins: [],
    },
  });

  export default confMdx({
    pageExtensions: ["mdx"],
  });
  ```
