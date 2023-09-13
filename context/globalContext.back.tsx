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
}

interface GlobalContextValue {
  state: GlobalState
  setGlobalState: (data: Partial<GlobalState>) => void
}

const globalContext = createContext<GlobalContextValue | null>(null)

interface GlobalProviderProps {
  children: ReactNode
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, setState] = useState<GlobalState>({
    finalScore: 0,
    scoreCard: null,
    prevPath: null,
    userAnswers: {},
  })

  const updateGlobalState = (data: Partial<GlobalState>): void => {
    setState((prevState) => ({
      ...prevState,
      ...data,
    }))
  }

  const globalStateValue = useMemo(
    () => ({ state, setGlobalState: updateGlobalState }),
    [state],
  )

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
