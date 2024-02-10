import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Dashboard = () => {

    const { studentId } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const fetchedData = useSelector((state) => state[0]);


    useEffect(() => {
        if (fetchedData == undefined) {
            setLoading(true);
        } else {
            const filteredData = (fetchedData.map((singleCourse) => {
                const allData = singleCourse.students.map((i) => {
                    if (i.id == studentId) return singleCourse;
                    else return null
                })
                return allData
            })).flat();
            const selectedCourseData = filteredData.filter((item) => item !== null)
            setData(selectedCourseData)
            setLoading(false)
        }
    }, [loading, fetchedData])


    if (data == undefined) {
        return <h1>Loading...</h1>
    } else {
        return <>
            <div className="card-deck">
                {data.map((i) => {
                    return <>
                        <div className="card w-50 m-auto mb-3">
                            <img className="card-img-top img-fluid m-auto" style={{ width: "50vh" }} src={i.thumbnail} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Course Name:  <span>{i.name}</span> </h5>
                                <div className="card-text">Instructor Name:  <span> {i.instructor}</span> </div>
                                <p className="card-text"> Description: <span>{i.description}</span>  </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Due Date : <span>
                                    {i.dueDate}
                                </span></small>
                            </div>
                        </div>
                    </>
                })}


            </div>
        </>
    }
}
export default Dashboard