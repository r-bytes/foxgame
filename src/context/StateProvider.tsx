import { createContext, useContext, useState } from 'react'

type Props = {
    children: React.ReactNode;
}

const defaultType: any = 0;
const Context = createContext(defaultType)

export const StateContext = ({ children }: Props) => {
    const [score, setScore] = useState(0)

    return (
        <Context.Provider value={{ score, setScore }}>
            {children}
        </Context.Provider>
    )
}

export default StateContext

export const useStateContext = () => useContext(Context)