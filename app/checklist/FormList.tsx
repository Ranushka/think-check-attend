'use client'
import useGlobal from '../../context/globalContext'
import React, { useState } from 'react'

interface Option {
  name: string
  value: number
}

interface RadioItem {
  label: string
  help: string
  type: 'RADIO'
  options: Option[]
}

interface RangeItem {
  label: string
  help: string
  type: 'RANGE'
  options: {
    min: number
    max: number
    value: number
  }
}

type ChecklistItem = RadioItem | RangeItem

interface ChecklistSection {
  title: string
  subTitle: string
  items: ChecklistItem[]
}

interface ChecklistProps {
  checklist: ChecklistSection[]
}

const RadioInput: React.FC<RadioItem> = ({ label, help, options }) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const {
    setGlobalState,
    state: { scoreCard },
  } = useGlobal()

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value)
    setSelectedValue(newValue)
    setGlobalState({
      scoreCard: { ...scoreCard, [event.target.name]: newValue },
    })
  }

  return (
    <div className="mb-8">
      <p className="text-lg mb-2 text-gray-700">{help}</p>
      {options.map((option) => (
        <label
          key={option.name}
          className="flex items-center mb-1 cursor-pointer"
        >
          <input
            type="radio"
            name={label}
            value={option.value}
            className="mr-2"
            checked={selectedValue === option.value}
            onChange={handleRadioChange}
          />
          <span>{option.name}</span>
        </label>
      ))}
    </div>
  )
}

const RangeInput: React.FC<RangeItem> = ({ label, help, options }) => {
  const [selectedValue, setSelectedValue] = useState(0)
  const {
    setGlobalState,
    state: { scoreCard },
  } = useGlobal()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value)
    setSelectedValue(newValue)

    setGlobalState({
      scoreCard: {
        ...scoreCard,
        [event.target.name]: newValue * options.value,
      },
    })
  }

  return (
    <div className="mb-8">
      <p className="text-lg mb-2 text-gray-700">{help}</p>
      <input
        type="range"
        name={label}
        min={options.min}
        max={options.max}
        value={selectedValue}
        onChange={handleChange}
        className="w-full"
      />
    </div>
  )
}

const ChecklistSectionComponent: React.FC<ChecklistSection> = ({
  title,
  subTitle,
  items,
}) => (
  <div className="mb-20">
    <h2 className="text-4xl font-semibold mb-2">{title}</h2>
    <p className="text-md mb-8 text-gray-500">{subTitle}</p>
    {items.map((item, index) => (
      <div key={index}>
        {item.type === 'RADIO' && <RadioInput {...item} />}
        {item.type === 'RANGE' && <RangeInput {...item} />}
      </div>
    ))}
  </div>
)

const Checklist: React.FC<ChecklistProps> = ({ checklist }) => (
  <div className="p-6">
    {checklist.map((section, index) => (
      <ChecklistSectionComponent key={index} {...section} />
    ))}
  </div>
)

const FormList: React.FC = () => {
  const checklist: ChecklistSection[] = [
    {
      title: 'Organizers & Sponsors',
      subTitle: 'Questions about the conference organizers and sponsors',
      items: [
        {
          label: 'OrgSponsor_Question1',
          help: 'Are you aware of the society or the association organizing this conference?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.8 },
            { name: 'No', value: -0.2 },
          ],
        },
        {
          label: 'OrgSponsor_Question2',
          help: 'Can you easily identify the venue of the conference?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.7 },
            { name: 'No', value: -0.3 },
          ],
        },
        {
          label: 'OrgSponsor_Question3',
          help: 'Is it the first time that this conference is being held?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.3 },
            { name: 'No', value: -0.7 },
          ],
        },
        {
          label: 'OrgSponsor_Question4',
          help: 'Have you or your colleagues attended this conference before?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.6 },
            { name: 'No', value: -0.4 },
          ],
        },
        {
          label: 'OrgSponsor_Question5',
          help: 'Is it clear what fees will be charged and would these be waived if you are accepted as a speaker?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.8 },
            { name: 'No', value: -0.2 },
          ],
        },
        {
          label: 'OrgSponsor_Question6',
          help: 'Are any of the sponsors involved in the conference?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.7 },
            { name: 'No', value: -0.3 },
          ],
        },
        {
          label: 'OrgSponsor_Question7',
          help: 'Are you aware of any of the sponsors, especially with industry-related fields such as Engineering & Biomedical research?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.6 },
            { name: 'No', value: -0.4 },
          ],
        },
        {
          label: 'OrgSponsor_Question8',
          help: 'Did you check the conference website? Is all the information presented in a proper way?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.8 },
            { name: 'No', value: 0.2 },
          ],
        },
        {
          label: 'OrgSponsor_Question9',
          help: 'Have you read any papers from this conference proceedings before?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.6 },
            { name: 'No', value: -0.4 },
          ],
        },
      ],
    },
    {
      title: 'Agenda & Editorial Committee',
      subTitle: 'Questions about the conference agenda and editorial committee',
      items: [
        {
          label: 'AgendaEditorial_Question1',
          help: 'Is there clear information about the timeline and agenda for the conference?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.8 },
            { name: 'No', value: 0.2 },
          ],
        },
        {
          label: 'AgendaEditorial_Question2',
          help: 'Do the scope and objectives of the conference fit your field and core interest?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.7 },
            { name: 'No', value: 0.3 },
          ],
        },
        {
          label: 'AgendaEditorial_Question3',
          help: 'Have you heard of the Keynote speakers?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.6 },
            { name: 'No', value: 0.4 },
          ],
        },
        {
          label: 'AgendaEditorial_Question4',
          help: 'Is the Editorial Committee listed on the website?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.7 },
            { name: 'No', value: 0.3 },
          ],
        },
        {
          label: 'AgendaEditorial_Question5',
          help: 'Have you heard of the Editorial Committee members before?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.6 },
            { name: 'No', value: 0.4 },
          ],
        },
        {
          label: 'AgendaEditorial_Question6',
          help: 'Is the Committee clear about the editorial control over presentations and the type of peer-review it uses?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.7 },
            { name: 'No', value: -0.3 },
          ],
        },
      ],
    },
    {
      title: 'Conference Proceedings',
      subTitle: 'Questions about the conference proceedings',
      items: [
        {
          label: 'Proceedings_Question1',
          help: 'Is the Organizing Committee clear about where the proceedings will be published?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.8 },
            { name: 'No', value: 0.2 },
          ],
        },
        {
          label: 'Proceedings_Question2',
          help: 'Does the conference make it clear which indexing services it can guarantee for the published proceedings?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.7 },
            { name: 'No', value: -0.3 },
          ],
        },
        {
          label: 'Proceedings_Question3',
          help: 'Is the publisher of the proceedings a member of a recognized industry initiative such as COPE, DOAJ, OASPA?',
          type: 'RADIO',
          options: [
            { name: 'Yes', value: 0.6 },
            { name: 'No', value: 0.4 },
          ],
        },
        {
          label: 'Slider_Question1',
          help: 'Make it positive?',
          type: 'RANGE',
          options: {
            min: 0,
            max: 10,
            value: 0.5,
          },
        },
        {
          label: 'Slider_Question2',
          help: 'Make it negative?',
          type: 'RANGE',
          options: {
            min: 0,
            max: 10,
            value: -0.5,
          },
        },
      ],
    },
  ]

  return (
    <div>
      <Checklist checklist={checklist} />
    </div>
  )
}

export default FormList
