import React from 'react'

import { useSelected, useFocused, useSlateStatic } from 'slate-react'
import { FaTrashAlt } from 'react-icons/fa'
import { Editor, Element, Transforms } from 'slate'

export const addLink = (editor: any) => {
  const url = window.prompt('Enter the URL:')

  if (!url) return
  const { selection } = editor

  const link = {
    type: 'link',
    href: url,
    children: selection
      ? [{ text: Editor.string(editor, selection) }]
      : [{ text: 'new link' }],
  }

  if (selection) {
    Transforms.wrapNodes(editor, link, { split: true })
    Transforms.collapse(editor, { edge: 'end' })
  } else {
    Transforms.insertNodes(editor, link)
  }
}

const Link = ({ attributes, element, children }: any) => {
  const editor = useSlateStatic()
  const selected = useSelected()
  const focused = useFocused()

  const removeLink = (opts = {}) => {
    Transforms.unwrapNodes(editor, {
      ...opts,
      match: (n) =>
        // @ts-expect-error
        !Editor.isEditor(n) && Element.isElement(n) && n.type === 'link',
    })
  }

  return (
    <div className="inline-block ">
      <a {...attributes} href={element.href}>
        {children}
      </a>
      {selected && focused && (
        <div
          className="absolute shadow-md py-1 px-2 rounded-md flex align-middle z-10 bg-white gap-4 border-gray-100 border"
          contentEditable={false}
        >
          <a href={element.href} rel="noreferrer" target="_blank">
            {element.href}
          </a>
          <button
            onClick={() => removeLink(editor)}
            className="w-4 fill-error text-error"
          >
            <FaTrashAlt className="w-3 fill-error text-gray-600" />
          </button>
        </div>
      )}
    </div>
  )
}

export default Link
