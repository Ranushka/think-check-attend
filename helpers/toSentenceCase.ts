export default function toSentenceCase(str: string): string {
  if (!str) {
    return ''
  }

  return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()
}
