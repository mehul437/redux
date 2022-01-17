const initialdata={
    studata:[{
        id:'101',
        name:'mehul',
        age:'21',
        course:'mern',
        batch:'sept'
    }]
}

const Reducer=(state= initialdata, action)=>{
    switch(action.type){
        case "ADD":
            return{
                ...state,
                studata:[
                    ...state.studata,
                        action.payload
                ]

            }
        case "UPDATE":
            const datase=state.studata.map((ele)=>ele.id===action.payload.id?action.payload:ele)
            
            return {
                ...state,
                studata:datase
            }
        
            default:
            return state
    
}
}
export default Reducer