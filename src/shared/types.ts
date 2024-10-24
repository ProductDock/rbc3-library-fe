export interface ApiService {
  fetchMockData(): Promise<Record<string, string>>
}

export type Headers = {
  [key: string]: string
}

export type TestObject = {
  count: number
  testEndpoint: TestList[]
}

export type TestList = { info: string; info2: number; info3: string }
