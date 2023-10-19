import React from 'react'
import Papa from 'papaparse'
import FormGenerator from './FormGenerator'
import formatGoogleSheetData from '@/helpers/formatGoogleSheetData'

const CSV_FILE_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vQrIfiKbE1n08igSN2uMNJBbfe4_N_mKZSsy5t4NrWtjW7GwKAOJNXlAsUp6I9s4zQXQBbbYPF9Wn_8/pub?output=csv'

async function getData() {
  const response = await fetch(CSV_FILE_URL)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const csvText = await response.text()

  const { data }: any = await Papa.parse(csvText, { header: true })

  const doneData = formatGoogleSheetData(data)

  return doneData
}

const GoogleSheetForm = async () => {
  const sheetDataJson = await getData()

  return sheetDataJson && <FormGenerator formatedData={sheetDataJson} />
}

export default GoogleSheetForm
