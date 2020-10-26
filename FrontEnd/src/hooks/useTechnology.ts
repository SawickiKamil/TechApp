import * as React from 'react'
import { useHistory } from 'react-router-dom'
import ITechnology from '../model/technology'
import { getTechnologies, deleteTechnology } from '../api/fetchApi'

export function useTechnology() {
    const [technologies, setTechnologies] = React.useState<ITechnology[]>([])
    const [loadingPage, setLoadingPage] = React.useState(true)

    const loadTechnologies = React.useCallback(async () => {
        const data = await getTechnologies()
        await new Promise((resolve) => setTimeout(resolve, 800))
        setLoadingPage(false)
        setTechnologies((prev) => [...prev, ...data])
    }, [])

    React.useEffect(() => {
        loadTechnologies()
    }, [])


    const handleDelete = React.useCallback(async (itemToDelete: string) => {
        await deleteTechnology(itemToDelete)
        setTechnologies((prev: ITechnology[]) => prev.filter((item) => item._id !== itemToDelete))
    }, [setTechnologies])

    let history = useHistory()

    const handleClick = React.useCallback(() => {
        history.push('/')
    }, [history])

    const handleOnTechCreated = React.useCallback((tech: ITechnology) => {
        setTechnologies((prev) => [...prev, tech])
    }, [])

    return {
        technologies,
        loadingPage,
        handleDelete,
        handleClick,
        handleOnTechCreated
    }
}