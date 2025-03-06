type URL = {
  url: string
  scheme: string
  host: string
  port?: number
  path?: string
  query?: string
}

export function parseURL(url: string): URL {
  return {
    url,
    scheme: extractScheme(url),
    host: extractHost(url),
    port: extractPort(url),
    path: extractPath(url),
    query: extractQuery(url),
  }
}

function extractScheme(url: string): string {
  const parts = url.match(/^(?<scheme>https?):\/\//)?.groups
  if (!parts) {
    throw new Error('Invalid URL')
  }

  return parts.scheme
}

function extractHost(url: string): string {
  const parts = url.match(/^(https?:\/\/)?(?<host>[^:/?#]+)/)?.groups
  if (!parts) {
    throw new Error('Invalid URL')
  }

  return parts.host
}

function extractPort(url: string): number | undefined {
  const parts = url.match(/(?<port>\d+)/)?.groups
  if (!parts) {
    return undefined
  }

  return parseInt(parts.port)
}

function extractPath(url: string): string | undefined {
  const parts = url.match(/https?:\/\/[^/]+(?<path>\/[^?#]*)/)?.groups
  if (!parts) {
    return undefined
  }

  return parts.path
}

function extractQuery(url: string): string | undefined {
  const parts = url.match(/(?<query>\?.*)/)?.groups
  if (!parts) {
    return undefined
  }

  return parts.query
}