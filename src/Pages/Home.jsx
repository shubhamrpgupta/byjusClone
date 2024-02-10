import React, { useEffect, useState } from 'react'
import courseModel from "../api/api";
import Card from "../Components/Card/Card";
import { useSelector } from "react-redux";

const Home = () => {


    const fetchedData = useSelector(state => state[0])
    const [data, setData] = useState(fetchedData);
    const [search, setSearch] = useState("");




    useEffect(() => {
        if (search === '') {
            setData(fetchedData)
        } else {
            const filter = data.filter((singleCourse) => {
                if (singleCourse.name.toLowerCase().includes(search.toLowerCase()) || singleCourse.instructor.toLowerCase().includes(search.toLowerCase())) {
                    return singleCourse;
                }
            })
            setData(filter);
        }
    }, [search, fetchedData])


    const handleSearch = () => {
        alert("Results have already been shown")
    }

    return (
        <>
            <form
                className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5"
            >
                <input
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    className="form-control w-50 p-2 m-2"
                    placeholder="Search by Course Name or Instructor Name"
                    type="text"
                />
                < button
                    onClick={handleSearch}
                    className="btn btn-outline-success py-2 m-1 px-3"
                >
                    Search
                </button>
            </form >

            <div className="col-lg-8 col-12 m-auto">
                <div className="row m-1 ">
                    <Card results={data} />
                </div>
            </div>
        </>
    )
}

export default Home