const ApiRequest = async (url:string, method:string, data?:any) => {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    if (!response.ok) {
        throw new Error("Failed to Perform the Operation,Reload the site")
    }
    return await response.json()
}
export default ApiRequest;