import React, { useState } from 'react'
import useUser from '../../store/store'
import { useEffect } from 'react'

const AllUsers = () => {
    const [obj, setObj] = useState()
    const { addUser, allUsers, deleteUser, getAllUsers, loader } = useUser()



    function generateRandomId() {
        return Math.floor(10000000000000 + Math.random() * 90000000000000).toString();
    }

    const handleCreate = () => {
        const randomId = generateRandomId();
        const body = {
            ...obj,
            id: randomId,
        }
        if (!obj?.name) return alert("Name is required")
        addUser(body)
        setObj({ name: "" })
    }

    const handleDelete = (item) => {
        deleteUser(item)
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <div>
            <h1>Add User</h1>

            <input value={obj?.name} style={{ marginRight: "20px" }} type="text" onChange={(e) => { setObj({ ...obj, name: e?.target?.value }) }} />
            <button onClick={handleCreate}>Create</button>

            <div style={{ marginTop: "20px" }}>
                <p>List of Users</p>
                {
                    loader ?
                        <p>Loading...</p>
                        :
                        allUsers?.map((item, index) => {
                            return (
                                <div>
                                    {index + 1} - {item?.name}
                                    <button onClick={() => { handleDelete(item) }} style={{ marginLeft: "10px" }}>Delete</button>
                                </div>
                            )
                        })}
            </div>
        </div>
    )
}

export default AllUsers