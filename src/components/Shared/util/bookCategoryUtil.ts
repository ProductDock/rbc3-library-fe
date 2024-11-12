import { SelectChangeEvent } from '@mui/material'

export const categories = [
  'All categories',
  'Software development',
  'Marketing',
  'Product management',
  'Design',
  'Psychology',
]

export const categoryToSnakeCase = (categories: string[]): string[] => {
  return categories.map(category =>
    category.toLocaleUpperCase().split(' ').join('_')
  )
}
export const handleCategoryChange = (
  event: SelectChangeEvent<string[]>,
  setBookCategory: (categories: React.SetStateAction<string[]>) => void
) => {
  const {
    target: { value },
  } = event

  const selectedCategories =
    typeof value === 'string' ? value.split(',') : value

  setBookCategory(prevBookCategory => {
    const isAllSelected = selectedCategories.includes('All categories')
    const isCurrentlyAllSelected = prevBookCategory.length === categories.length
    const selectedCount = selectedCategories.filter(
      category => category !== 'All categories'
    ).length

    if (isAllSelected) {
      if (prevBookCategory.length === 0) {
        categories.unshift()
        return categories
      }
      if (isCurrentlyAllSelected || selectedCount <= 4) {
        return []
      }
    }

    if (prevBookCategory.includes('All categories')) {
      return []
    }

    const filteredCategories = selectedCategories.filter(
      category => category !== 'All categories'
    )

    if (filteredCategories.length === categories.length - 1) {
      return [...filteredCategories, 'All categories']
    }

    return filteredCategories
  })
}
