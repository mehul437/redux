
export const add=(data)=>{
    return{
        type:'ADD',
        payload:{
            id:new Date().getTime().toString(),
            ...data
        }

    }
}
export const update=(data)=>{
    
    return{
        type:"UPDATE",
         payload:data
    }
}