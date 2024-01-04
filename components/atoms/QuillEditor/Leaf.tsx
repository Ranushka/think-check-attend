import React from 'react'

const Leaf = ({ attributes, children, leaf, element }: any) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  if (leaf.link) {
    return (
      <a {...attributes} href={element.url}>
        {children}
      </a>
    )
  }

  return <span {...attributes}>{children}</span>
}

export default Leaf
