import React from 'react'
import { CheckIcon, ISelectProps, Select as NbSelect } from 'native-base'

interface Props extends ISelectProps {
  placeholder: string
  items: {
    label: string
    value: string
  }[]
  onChange: (value: string) => void
}

export const Select = ({ placeholder, items, onChange, ...rest }: Props) => {
  return (
    <NbSelect
      minWidth="180"
      placeholder={placeholder}
      accessibilityLabel={placeholder}
      _selectedItem={{
        bg: 'blue.200',
        endIcon: <CheckIcon size="5" />,
      }}
      mt={1}
      onValueChange={(value) => onChange(value)}
      {...rest}
    >
      {items.map(({ label, value }) => (
        <NbSelect.Item key={value} label={label} value={value} />
      ))}
    </NbSelect>
  )
}
