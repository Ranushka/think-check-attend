import React, { useState, useEffect } from 'react'
import Papa from 'papaparse'
import FormGenerator from './FormGenerator'
const YOUR_CSV_FILE_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQrIfiKbE1n08igSN2uMNJBbfe4_N_mKZSsy5t4NrWtjW7GwKAOJNXlAsUp6I9s4zQXQBbbYPF9Wn_8/pub?output=csv'

const GoogleSheetForm = () => {
  const [csvData, setCsvData] = useState([])
  const [csvTextVal, setCsvText] = useState()

  useEffect(() => {
    const fetchCsvData = async () => {
      try {
        const response = await fetch(YOUR_CSV_FILE_URL)
        const csvText = await response.text()
        setCsvText(csvText)

        const { data }: any = Papa.parse(csvText, { header: true })
        setCsvData(data)
      } catch (error) {
        console.error('Error fetching CSV data:', error)
      }
    }

    fetchCsvData()
  }, [])

  return <div>{csvTextVal && <FormGenerator csvData={csvData} />}</div>
}

export default GoogleSheetForm
