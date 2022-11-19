import { createContext, useContext, useState } from 'react'

type Props = {
    children: React.ReactNode;
}
interface InitialState {
    score: number,
    addScore: () => void,
    subScore: () => void,
}

const Context = createContext<InitialState>({
    score: 0,
    addScore: () => {},
    subScore: () => {}
})

export const StateContext = ({ children }: Props) => {
    const [score, setScore] = useState(0)

    const addScore = () => {
        setScore(prevState => prevState + 1)
    }

    const subScore = () => {
        setScore(prevState => prevState - 1)
    }

    return (
        <Context.Provider value={{ score, addScore, subScore }}>
            {children}
        </Context.Provider>
    )
}

export default StateContext

export const useStateContext = () => useContext(Context)