import React from 'react'
import Link from './Link'

const Element = (props: any) => {
  const { attributes, children, element } = props

  const style = { textAlign: element.align }

  switch (element.type) {
    case 'link':
      return <Link {...props} />
    case 'bulleted-list':
      return (
        <ul style={style} {...attributes} className="list-disc pl-8 my-2">
          {children}
        </ul>
      )
    case 'heading-one':
      return (
        <h1 style={style} {...attributes} className="text-4xl font-bold my-4">
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 style={style} {...attributes} className="text-2xl font-bold my-3">
          {children}
        </h2>
      )
    case 'heading-three':
      return (
        <h3 style={style} {...attributes} className="text-xl font-bold my-3">
          {children}
        </h3>
      )
    case 'heading-four':
      return (
        <h4 style={style} {...attributes} className="text-lg font-bold my-3">
          {children}
        </h4>
      )
    case 'test-small':
      return (
        <small style={style} {...attributes} className="text-xs">
          {children}
        </small>
      )
    case 'list-item':
      return (
        <li style={style} {...attributes} className="list-disc mb-2">
          {children}
        </li>
      )
    case 'numbered-list':
      return (
        <ol style={style} {...attributes} className="list-decimal pl-8 my-2">
          {children}
        </ol>
      )
    default:
      return (
        <p style={style} {...attributes} className="mb-2">
          {children}
        </p>
      )
  }
}

export default Element
