interface JSON {
  parse<T>(text: string, reviver?: (this: any, key: string, value: any) => any): T
}
