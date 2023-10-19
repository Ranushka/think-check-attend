import locationsListSchema from './schema'
export { locationsListSchema }

export default function LocationsList({ data }: any) {
  const { title, locations } = data

  return (
    <div className="max-w-7xl mx-auto py-24 sm:py-28 px-10">
      <h2 className="text-2xl font-bold block mb-5">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {locations?.map((item: any, index: number) => (
          <li key={index} className="px-3 py-2 bg-gray-50 rounded-md">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
