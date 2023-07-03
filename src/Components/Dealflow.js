import React, { useState } from 'react'
import data from '../data'
import { useEffect } from 'react';

const Dealflow = () => {
    const [update, setUpdate] = useState(false)
    const [tab, setTab] = useState(0);
    const [dataToSend1, setDataToSend1] = useState([])

    const [unprocesed, setUnProcessed] = useState([])
    const [stars, setStars] = useState([])
    const [trash, setTrash] = useState([])
    const [watch, setWatch] = useState([])


    // initial
    const getData = () => {
        setUnProcessed(data)
    }


    // handle action unprocessed
    const handleAction1 = (item, type, index) => {
        unprocesed[index].type = unprocesed[index].type === type ? 0 : type
        if (item?.type !== type) {
            setDataToSend1(dataToSend1?.filter(res => res?.id !== item?.id))
        }
        if (dataToSend1?.find(res => res?.id == item?.id)) {
            const check = dataToSend1?.find(res => res?.id == item?.id)
            check.type = check.type === type ? 0 : type
            setUpdate(!update)
        } else {
            const body = {
                ...item,
                type
            }
            dataToSend1.push(body)
        }
        setUpdate(!update)
        // setTemp(prevData => {
        //     const check = prevData?.map((elem, ind) => {
        //         if (item?.id == elem?.id) {
        //             return { ...elem, type: elem.type === type ? 0 : type }
        //         } else {
        //             return { ...elem }   
        //         }
        //     })
        //     return check
        // })

    }


    useEffect(() => {
        getData()
    }, [])


    // handle process
    const handleProces1 = () => {
        setUnProcessed(data?.filter(res => res?.type == 0))
        setStars(data?.filter(res => res?.type === 1))
        setTrash(data?.filter(res => res?.type === 2))
        setWatch(data?.filter(res => res?.type === 3))
    }


    console.log("dataToSend1 ======>", dataToSend1)




    return (
        <div>
            <p>Tabs</p>
            <div style={{ display: "flex" }}>
                <button onClick={() => setTab(0)}>Unprocesed  </button>
                <button onClick={() => setTab(1)}>Move to Stars</button>
                <button onClick={() => setTab(2)}>Move to Trash</button>
                <button onClick={() => setTab(3)}>Move to Watch </button>
            </div>

            {
                tab == 0 &&
                unprocesed?.map((item, index) => {
                    return (
                        <div style={{ marginTop: "20px" }}>
                            <div>
                                <button onClick={() => handleAction1(item, 1, index)}>{item?.type === 1 ? "unStar" : "Star"}</button>
                                <button onClick={() => handleAction1(item, 2, index)}>{item?.type === 2 ? "unTrash" : "Trash"}</button>
                                <button onClick={() => handleAction1(item, 3, index)}>{item?.type === 3 ? "unWatch" : "Watch"}</button> <p>{item?.id}</p>  </div>

                        </div>

                    )
                })

            }





            {
                tab == 1 &&
                stars?.map((item) => {
                    return (
                        <div style={{ marginTop: "20px" }}>
                            <div>
                                <button onClick={() => handleAction1(item, 1)}>{item?.type === 1 ? "unStar" : "Star"}</button>
                                <button onClick={() => handleAction1(item, 2)}>{item?.type === 2 ? "unTrash" : "Trash"}</button>
                                <button onClick={() => handleAction1(item, 3)}>{item?.type === 3 ? "unWatch" : "Watch"}</button> <p>{item?.id}</p>  </div>

                        </div>

                    )
                })

            }


            {
                tab == 2 &&
                trash?.map((item) => {
                    return (
                        <div style={{ marginTop: "20px" }}>
                            <div>
                                <button onClick={() => handleAction1(item, 1)}>{item?.type === 1 ? "unStar" : "Star"}</button>
                                <button onClick={() => handleAction1(item, 2)}>{item?.type === 2 ? "unTrash" : "Trash"}</button>
                                <button onClick={() => handleAction1(item, 3)}>{item?.type === 3 ? "unWatch" : "Watch"}</button> <p>{item?.id}</p>  </div>

                        </div>

                    )
                })

            }



            {
                tab == 3 &&
                watch?.map((item) => {
                    return (
                        <div style={{ marginTop: "20px" }}>
                            <div>
                                <button onClick={() => handleAction1(item, 1)}>{item?.type === 1 ? "unStar" : "Star"}</button>
                                <button onClick={() => handleAction1(item, 2)}>{item?.type === 2 ? "unTrash" : "Trash"}</button>
                                <button onClick={() => handleAction1(item, 3)}>{item?.type === 3 ? "unWatch" : "Watch"}</button> <p>{item?.id}</p>  </div>

                        </div>

                    )
                })

            }

            <button onClick={handleProces1}>Process</button>
        </div>
    )
}

export default Dealflow