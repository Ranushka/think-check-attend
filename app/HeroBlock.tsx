'use client'

import { useTina, tinaField } from 'tinacms/dist/react'

export default function HeroBlock(props: any) {
  const { data } = useTina(props)
  return (
    <div>
      <h1 data-tina-field={tinaField(data, 'title')}>
        -{JSON.stringify(data)}-
      </h1>
    </div>
  )
}
