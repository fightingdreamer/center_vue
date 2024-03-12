export function absoluteUrl(relative: string): string {
  return `${location.protocol}//${location.host}/${relative}`
}

export function redirectionLink(name: string): string {
  return absoluteUrl('-' + name)
}
