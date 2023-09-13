'use client'

import React, {
  useState,
  createContext,
  useContext,
  useMemo,
  ReactNode,
} from 'react'

// Define your types/interfaces at the top
interface GlobalState {
  finalScore: number
  scoreCard: any
  prevPath: any
  userAnswers: any
  workingTab: any
}

interface GlobalContextValue {
  state: GlobalState
  setGlobalState: (data: Partial<GlobalState>) => void
}

const globalContext = createContext<GlobalContextValue | null>(null)

interface GlobalProviderProps {
  children: ReactNode
}

function getDefaultState(): GlobalState {
  return {
    finalScore: 0,
    scoreCard: null,
    prevPath: null,
    userAnswers: {},
    workingTab: 0,
    // workingTab: { parent: 0, child: 0 },
  }
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, setState] = useState<GlobalState>(() => {
    try {
      const storedState = localStorage.getItem('globalState')
      return storedState ? JSON.parse(storedState) : getDefaultState()
    } catch (error) {
      console.error('Error parsing globalState from localStorage:', error)
      return getDefaultState()
    }
  })

  const setGlobalState = (data: Partial<GlobalState>): void => {
    const newState = { ...state, ...data }
    setState(newState)
    try {
      localStorage.setItem('globalState', JSON.stringify(newState))
    } catch (error) {
      console.error('Error parsing globalState from localStorage:', error)
    }
  }

  const globalStateValue = useMemo(() => ({ state, setGlobalState }), [state])

  return (
    <globalContext.Provider value={globalStateValue}>
      {children}
    </globalContext.Provider>
  )
}

export default function useGlobal() {
  const context = useContext(globalContext)
  if (context === null) {
    throw new Error('useGlobal must be used within a GlobalProvider')
  }
  return context
}
