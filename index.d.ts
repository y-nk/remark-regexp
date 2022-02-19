export default function remarkRegexp(
  ...transformers: {
    test: RegExp
    type: string
  }[]
): void
