export function filterProps<T extends {}, K extends keyof T>(object: T, ...filter: Array<K>): Omit<T, K> {
  const result: any = {}
  const keys = (Object.keys(object) as any) as Array<K>
  for (const key of keys) {
    if (!filter.includes(key)) {
      result[key] = object[key]
    }
  }
  return result
}
