
const addDB  = (time) => {
    localStorage.setItem("break" , JSON.stringify({time}))
}
const getDB = ( ) => {
    const existTime = localStorage.getItem("break")
    return existTime
}


export { addDB, getDB }