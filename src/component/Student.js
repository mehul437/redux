import React, { useState, useRef } from 'react'
import TextField from '@mui/material/TextField';
import { add,update } from './Action/Action';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
export default function Student({show}) {
    const dataset=useSelector(state=>state.Reducer.studata)
    const id=useParams()
    const dispatch= useDispatch()
    const [status, setstatus] = useState({
        name: "",
        age: "",
        course: "",
        batch: ""
    })
    const change = (event) => {
        setstatus({ ...status, [event.target.name]: event.target.value })
    }
    const navi=useNavigate()
    const temp=useRef()
    const addhandle=()=>{
        if(status.name===" " || status.age==='' || status.course==='' || status.batch==='')
        {
            alert('please fill details')
            return
        }
        dispatch(add(status))
        navi('/student')

    }
    const updation=()=>{
        if (status.name === '' || status.age ==='' || status.course === '' || status.batch === '') {
            alert('please fill data')
            return
        }
        dispatch(update(status))
        navi('/student')
        

    }
    temp.current=funset
    useEffect(()=>{
      temp.current()
    },[])
    function funset() {
        if (show) {
            const newelement = dataset.find((el) => el.id === id.id);
            setstatus(newelement)
        }
    }
    let button;
    if(show){
    button=<button className='sub' onClick={updation}>update</button>
    }
    else
    {
        button=<button className='sub' onClick={addhandle}>submit</button>
    }
    return (
        <div className='main2'>

                <div className='frow'>

                    <span className='first'> <TextField

                        name="name"
                        label="name"
                        type="text"
                        maxRows={4}
                        value={status.name}
                        onChange={change}
                    /></span>

                    <span className='second'> <TextField

                        name="age"
                        label="age"
                        type="number"
                        maxRows={4}
                        value={status.age}
                        onChange={change}
                    /></span>
                </div>

                <div className='frow'>
                    <span className='third'> <TextField

                        name="course"
                        label="course"
                        type="text"
                        maxRows={4}
                        value={status.course}
                        onChange={change}
                    /></span>

                    <span className='fourth'> <TextField

                        name="batch"
                        label="batch"
                        type="text"
                        maxRows={4}
                        value={status.batch}
                        onChange={change}
                    /></span>
                  </div>

                  {button}
        
        </div>
    )

}
