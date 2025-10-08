export interface ITab<T> {
  label: string,
  category: T
}

export interface TabProps {
  isActive?: boolean
}

export enum ProductDetailTab {
  Description = 'description',
  AdditionalInfo = 'additionalInfo',
  Reviews = 'reviews',
  Video = 'video',
}