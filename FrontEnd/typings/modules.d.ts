declare module '*svg' {
    const value: string
    export default value
}

type EmptyCallback = () => void

export type Callback<T = void> = T extends void ? EmptyCallback : (payload: T) => void