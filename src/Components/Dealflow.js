import React, { useState } from 'react'
import data from '../data'
import { useEffect } from 'react';

const Dealflow = () => {
    const [temp, setTemp] = useState([]);
    const [tab, setTab] = useState(0);
    const [process, setProcess] = useState(false)


    // initial
    const getData = () => {
        setTemp(data);
        setProcess(!process)
    }


    // handle action
    const handleAction = (item, type) => {
        setTemp(prevData => {
            const check = prevData?.map((elem, ind) => {
                if (item?.id == elem?.id) {
                    return { ...elem, type: elem.type === type ? 0 : type }
                } else {
                    return { ...elem }    
                }
            })
            return check
        })
    }

    // handle process
    const handleProcess = (num) => {

    }


    useEffect(() => {
        getData()
    }, [])



    // useEffect(() => {
    //     setTab(tab)
    // }, [process])


    return (
        <div>
            <p>Tabs</p>
            <div style={{ display: "flex" }}>
                <button onClick={() => setTab(0)}>Unprocesed {temp?.filter(res => res?.type == 0)?.length} </button>
                <button onClick={() => setTab(1)}>Move to Stars {temp?.filter(res => res?.type == 1)?.length}</button>
                <button onClick={() => setTab(2)}>Move to Trash {temp?.filter(res => res?.type == 2)?.length}</button>
                <button onClick={() => setTab(3)}>Move to Watch {temp?.filter(res => res?.type == 3)?.length}</button>
            </div>

            {
                temp?.filter(res => res?.type == tab)?.map((item, index) => {
                    return (
                        <div style={{ marginTop: "20px" }}>
                            <div>
                                <button onClick={() => handleAction(item, 1)}>{item?.type === 1 ? "unStar" : "Star"}</button>
                                <button onClick={() => handleAction(item, 2)}>{item?.type === 2 ? "unTrash" : "Trash"}</button>
                                <button onClick={() => handleAction(item, 3)}>{item?.type === 3 ? "unWatch" : "Watch"}</button> <p>{item?.id}</p>  </div>

                        </div>

                    )
                })

            }

            <button onClick={() => handleProcess()}>Process</button>
        </div>
    )
}

export default Dealflow