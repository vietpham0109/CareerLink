export const GLOBALTYPES = {
    AUTH: "AUTH",
    ALERT: "ALERT",
    ALERT2: "ALERT2",
    THEME: 'THEME',
    STATUS: 'STATUS',
    MODAL: 'MODAL',
    SOCKET: 'SOCKET',
    ONLINE: 'ONLINE',
    OFFLINE: 'OFFLINE',
    CALL: 'CALL',
    PEER: 'PEER',
    HOMEJOB: 'HOMEJOB',
    ALLJOB: 'ALLJOB',
    LISTCOMPANY: 'LISTCOMPANY',
    ALLRESUME: 'ALLRESUME',
    DATARESUME: 'DATARESUME',
    ALLUSER: 'ALLUSER',
    TOPCOMPANY: 'TOPCOMPANY',
    SUBMITEDRESUME: 'SUBMITEDRESUME'
}

export const EditData = (data, id, post) => {
    const newData = data.map(item =>
        (item._id === id ? post : item)
    )
    return newData;
}

export const DeleteData = (data, id) => {
    const newData = data.filter(item => item._id !== id)
    return newData;
}

export const DeleteDataFollow = (data, id) => {
    
    const newData = data.filter(item => item !== id)
    
    return newData;
}