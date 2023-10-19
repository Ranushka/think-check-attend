'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '../components/atoms/Button'
import Link from '../components/atoms/Link'
import { classNames } from '../helpers/classNames'

const isDarkImage = false

export default function ConferenceForm() {
  const [conferenceInput, setConferenceInput] = useState('')
  const router = useRouter()

  const handleFormSubmit = (e: any) => {
    e.preventDefault()
    // Use router.push to navigate to the 'checklist' page with the input value as the 'q' parameter
    router.push(`/checklist?q=${encodeURIComponent(conferenceInput)}`)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        id="validate-conference"
        name="conferenceInput"
        type="text"
        autoComplete="conferenceInput"
        required
        className={classNames(
          'w-full px-3.5 py-3',
          'min-w-0 rounded-md border-2 border-primary-500 shadow-sm',
          'ring-primary ring-inset focus:ring-1 focus:ring-inset focus:ring-primary-600 focus:shadow-primary-700',
        )}
        placeholder="Name or website URL of your conference"
        value={conferenceInput}
        onChange={(e) => setConferenceInput(e.target.value)}
      />
      <div className="flex items-center justify-center gap-x-6 mt-5">
        <Link
          className={classNames(
            'underline underline-offset-4',
            isDarkImage ? 'text-white' : 'text-gray-700',
          )}
          href={'#'}
        >
          Download checklist <span aria-hidden="true">↓</span>
        </Link>
        <Button variant="primary" type="submit" title="Start Validating">
          Start Validating
        </Button>
      </div>
    </form>
  )
}
