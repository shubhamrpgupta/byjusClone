import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const Select = () => {

    const navigate = useNavigate();
    const [allIds, setAllIds] = useState();
    const [loading, setLoading] = useState();
    const fetchedData = useSelector((state) => state[0]);


    useEffect(() => {
        if (fetchedData == undefined) {
            setLoading(true);
        } else {
            const allAvailableIds = fetchedData.map((singleCourse) => singleCourse.students.map((studentinfo) => studentinfo.id)).flat();
            const uniqueIds = allAvailableIds.filter((item, index, totalIds) => totalIds.indexOf(item) === index)
            setAllIds(uniqueIds)
            setLoading(false)
        }
    }, [loading])

    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedId = e.target.selectedId.value;
        navigate(`/select/${selectedId}`)
    }



    if (allIds == undefined) {
        return <h1>Loading...</h1>
    } else {
        return <>
            <div className="col-md">
                <form
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="floatingSelectGrid" className="fw-bold fs-2 mb-3" >
                        Select Your Id:
                    </label>
                    <select
                        name="selectedId"
                        id="floatingSelectGrid"
                        className="form-select w-50 m-auto"
                    >
                        {allIds.map((i) => {
                            return <option
                                key={i} value={i}>
                                {i}
                            </option>
                        })}
                    </select>

                    <button type="submit" className="btn btn-outline-primary mt-3"
                    >
                        Submit
                    </button>

                </form>
            </div>
        </>
    }
}

export default Select


