import React from 'react'
import { useSlate } from 'slate-react'
import {
  TEXT_ALIGN_TYPES,
  isBlockActive,
  isMarkActive,
  toggleBlock,
  toggleMark,
} from './helpers'
import { Button, Icon } from '../components'
import { addLink } from './Link'
import { addTianaImage } from './Image'
import { useCMS } from 'tinacms'

const AddLink = ({ format, icon }: any) => {
  const editor = useSlate()

  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event: any) => {
        event.preventDefault()
        addLink(editor)
      }}
    >
      {icon}
    </Button>
  )
}

export const AddImage = ({ format, icon }: any) => {
  const editor = useSlate()
  const cms = useCMS()

  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event: any) => {
        event.preventDefault()

        addTianaImage(editor, cms)
      }}
    >
      {icon}
    </Button>
  )
}

const MarkButton = ({ format, icon }: any) => {
  const editor = useSlate()

  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event: any) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      {icon}
    </Button>
  )
}

const BlockButton = ({ format, icon }: any) => {
  const editor = useSlate()

  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type',
      )}
      onMouseDown={(event: any) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      {icon}
    </Button>
  )
}
// display: flex;
// align-items: center;
export { BlockButton, MarkButton, AddLink }
