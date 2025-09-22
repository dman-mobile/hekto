export interface ITab<T> {
  label: string,
  category: T
}

export interface TabProps {
  isActive?: boolean
}