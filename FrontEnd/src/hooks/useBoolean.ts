import { useState } from 'react'

export const useBoolean = (initValue: boolean) => {
    const [value, setValue] = useState(initValue)

    return { value, setTrue: () => setValue(true), setFalse: () => setValue(false) }
}