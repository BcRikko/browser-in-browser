import { describe, expect, test } from 'vitest'
import { parseURL } from './URLParser'

describe('URL Parser', () => {
  test('', () => {
    const url = parseURL('https://example.com:8080/path/to/resource?query=string')
    console.log({ url })
    expect(url).toEqual({
      url: 'https://example.com:8080/path/to/resource?query=string',
      scheme: 'https',
      host: 'example.com',
      port: 8080,
      path: '/path/to/resource',
      query: '?query=string',
    })
  })
})