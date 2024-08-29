
export const sendPostRequest = async (url:string, body:object) => {
    let result = await fetch(`/api${url}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return result.json()
}