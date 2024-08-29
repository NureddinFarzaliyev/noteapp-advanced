export const setLocalStorage = (id:string, token: string) => {
    localStorage.setItem('noteapp-id', id)
    localStorage.setItem('noteapp-token', token)
}

export const deleteLocalStorage = () => {
    localStorage.removeItem('noteapp-id')
    localStorage.removeItem('noteapp-token')
}