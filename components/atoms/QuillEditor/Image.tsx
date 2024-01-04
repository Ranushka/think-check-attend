import React from 'react'

import { useSelected, useFocused, useSlateStatic } from 'slate-react'
import { FaTrashAlt } from 'react-icons/fa'
import { Editor, Element, Transforms } from 'slate'

export const addTianaImage = (editor: any, cms: any) => {
  cms.media.open({
    onSelect: (media: any) => {
      if (!media) return

      const url = media.previewSrc || media.src
      const { selection } = editor

      const image = {
        type: 'image',
        url,
        children: [{ text: '' }],
      }

      if (selection) {
        Transforms.insertNodes(editor, image)
      } else {
        Transforms.insertNodes(editor, image)
      }
    },
  })
}

const Image = ({ attributes, element, children }: any) => {
  const editor = useSlateStatic()
  const selected = useSelected()
  const focused = useFocused()

  // const removeImage = (opts = {}) => {
  //   Transforms.unwrapNodes(editor, {
  //     ...opts,
  //     match: (n) =>
  //       // @ts-expect-error
  //       !Editor.isEditor(n) && Element.isElement(n) && n.type === 'image',
  //   })
  // }

  const removeImage = () => {
    Transforms.removeNodes(editor, {
      // @ts-expect-error
      match: (n) => !Editor.isEditor(n) && n.type === 'image',
      // @ts-expect-error
      at: selected,
    })
  }

  return (
    <div className="block ">
      <img src={element.url} />
      {selected && focused && (
        <div className="absolute shadow-md py-1 px-2 rounded-md flex align-middle z-10 bg-white gap-4 border-gray-100 border">
          {element.url}
          <button onClick={() => removeImage()}>
            <FaTrashAlt className="w-3 text-gray-600" />
          </button>
        </div>
      )}
    </div>
  )
}

export default Image
