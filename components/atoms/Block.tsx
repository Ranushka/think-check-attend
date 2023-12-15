import { blockComponents } from '../blocks'

const blockComponentsSafe = blockComponents || {}

const blockMapping = Object.fromEntries(
  Object.entries(blockComponentsSafe).map(([key, value]) => [key, value]),
)

const Block: React.FC<{ block: any }> = ({ block }) => {
  if (!block) return null

  const blockName = block?.__typename?.split('BB_').pop()
  const BlockComponent = blockMapping[blockName]

  return BlockComponent ? <BlockComponent data={block} /> : null
}

export default Block
