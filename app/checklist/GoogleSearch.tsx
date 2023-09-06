import React, { useState, useEffect } from 'react'
const GGL_API_KEY = 'AIzaSyB0HPYKSPYbsoo8qaB2iHWVyByTvUIJfRQ'
const GGL_SEARCH_ENGINE_ID = 'f16d2b8da7c0f44ab'

function GoogleSearch({ query }: any) {
  const [results, setResults] = useState([])

  const fetchSearchResults = async (query: string) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${GGL_API_KEY}&cx=${GGL_SEARCH_ENGINE_ID}&q=${query}`,
      )
      const data = await response.json()
      setResults(data.items)
    } catch (error) {
      console.error('Error fetching search results:', error)
    }
  }

  useEffect(() => {
    if (query) {
      fetchSearchResults(query)
    }
  }, [query])

  return (
    <div>
      <div>
        {results?.map((result: any, index) => (
          <div key={index} className="py-4">
            <h3>{result.title}</h3>
            <p className="text-xs">{result.snippet}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GoogleSearch
