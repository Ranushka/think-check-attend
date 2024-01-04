'use client'

import React, { useCallback, useMemo } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, Slate } from 'slate-react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'

import { Toolbar } from '../components'
import { wrapFieldsWithMeta } from 'tinacms'

import {
  FaImage,
  FaBold,
  FaItalic,
  FaUnderline,
  FaParagraph,
  FaHeading,
  FaListOl,
  FaListUl,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaLink,
} from 'react-icons/fa'
import initialValue from './initialValue'
import Leaf from './Leaf'
import Element from './Elements'
import { toggleMark } from './helpers'
import { AddImage, AddLink, BlockButton, MarkButton } from './Buttons'

const HOTKEYS: any = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
}

const RichTextExample = ({ fields }: any) => {
  const renderElement = useCallback((props: any) => <Element {...props} />, [])
  const renderLeaf = useCallback((props: any) => <Leaf {...props} />, [])
  const editor = useMemo(
    () => withHistory(withReact(withLinks(createEditor()))),
    [],
  )

  const iconClass = 'w-4'

  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Toolbar>
        <div className="flex gap-2 bg-white py-1 px-3 mt-1.5 rounded-md">
          <MarkButton format="bold" icon={<FaBold className={iconClass} />} />
          <MarkButton
            format="italic"
            icon={<FaItalic className={iconClass} />}
          />
          <MarkButton
            format="underline"
            icon={<FaUnderline className={iconClass} />}
          />
        </div>

        <div className="flex gap-2 bg-white py-1 px-3 mt-1.5 rounded-md">
          <AddLink icon={<FaLink className={iconClass} />} />
          <AddImage icon={<FaImage className={iconClass} />} />
        </div>

        <div className="flex gap-2 bg-white py-1 px-3 mt-1.5 rounded-md">
          <BlockButton
            format="numbered-list"
            icon={<FaListOl className={iconClass} />}
          />
          <BlockButton
            format="bulleted-list"
            icon={<FaListUl className={iconClass} />}
          />
        </div>

        <div className="flex gap-2 bg-white py-1 px-3 mt-1.5 rounded-md">
          <BlockButton
            format="heading-one"
            icon={
              <div className="flex items-center">
                <FaHeading className={iconClass} />
                <span className="font-bold">1</span>
              </div>
            }
          />
          <BlockButton
            format="heading-two"
            icon={
              <div className="flex items-center">
                <FaHeading className={iconClass} />
                <span className="font-bold">2</span>
              </div>
            }
          />
          <BlockButton
            format="heading-three"
            icon={
              <div className="flex items-center">
                <FaHeading className={iconClass} />
                <span className="font-bold">3</span>
              </div>
            }
          />
          <BlockButton
            format="heading-four"
            icon={
              <div className="flex items-center">
                <FaHeading className={iconClass} />
                <span className="font-bold">4</span>
              </div>
            }
          />
          <BlockButton
            format="test-small"
            icon={
              <div className="flex items-center">
                <FaParagraph className={iconClass} />
                <span className="font-bold">s</span>
              </div>
            }
          />
        </div>

        <div className="flex gap-2 bg-white py-1 px-3 mt-1.5 rounded-md">
          <BlockButton
            format="left"
            icon={<FaAlignLeft className={iconClass} />}
          />
          <BlockButton
            format="center"
            icon={<FaAlignCenter className={iconClass} />}
          />
          <BlockButton
            format="right"
            icon={<FaAlignRight className={iconClass} />}
          />
          <BlockButton
            format="justify"
            icon={<FaAlignJustify className={iconClass} />}
          />
        </div>
      </Toolbar>
      <Editable
        className="min-h-[100px] max-w-full tina-prose relative shadow-inner focus-within:shadow-outline focus-within:border-gray-500 block w-full bg-white border border-gray-200 text-gray-600 focus-within:text-gray-900 rounded-md px-3 py-2"
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event as any)) {
              event.preventDefault()
              const mark = HOTKEYS[hotkey]
              toggleMark(editor, mark)
            }
          }
        }}
      />
    </Slate>
  )
}

const withLinks = (editor: any) => {
  const { isInline } = editor

  editor.isInline = (element: any) =>
    element.type === 'link' ? true : isInline(element)

  return editor
}

// export default withLinks;

export default wrapFieldsWithMeta(RichTextExample)
// export default wrapFieldsWithMeta(withLinks(RichTextExample))
