export default interface ITechnology {
    _id: string
    name: string
    language: string
    description?: string
    initRelease?: number
}

export interface NewTechnology {
    name?: string
    language?: string
    description?: string
    initRelease?: number
}