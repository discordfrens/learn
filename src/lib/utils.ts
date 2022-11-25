export const FormatString = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export const RemoveDupelicates = (a: any[]) => {
  return [...new Set(a)]
}