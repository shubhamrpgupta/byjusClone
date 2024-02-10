import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CourseDetails = () => {

    const { courseId } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const fetchedData = useSelector((state) => state[0]);


    useEffect(() => {
        if (fetchedData == undefined) {
            setLoading(true);
        } else {
            const selectedCourseData = fetchedData.find((i) => i.id == courseId);
            setData(selectedCourseData);
            setLoading(false)
        }
    }, [loading, fetchedData])


    if (data == undefined) {
        return <h1>Loading...</h1>
    } else {
        return <>
            <div className="container d-flex justify-content-center mb-5 ">
                <div className="d-flex flex-column gap-3">
                    <h1 className="text-center text-primary">{data.name}</h1>

                    <img className="img-fluid" src={data.thumbnail} alt="" />
                    {(() => {
                        if (data.enrollmentStatus === "Closed") {
                            return <div className="badge w-25 m-auto bg-danger fs-5">{data.enrollmentStatus}</div>;
                        } else if (data.enrollmentStatus === "Open") {
                            return <div className=" badge w-25 m-auto bg-success fs-5">{data.enrollmentStatus}</div>;
                        } else {
                            return <div className="badge w-25 m-auto  bg-secondary fs-5">{data.enrollmentStatus}</div>;
                        }
                    })()}
                    <div className="content">
                        <div className="">
                            <span className="fw-bold">Description : </span>
                            {data.description}
                        </div>
                        <div className="">
                            <div className="fw-bold w-50 m-auto">
                                Content : <span className="fw-normal fst-italic">
                                    {Object.values(data.syllabus).map((i) => {
                                        return i.content + ", "
                                    }
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className="">
                            <div className="fw-bold w-50 m-auto">
                                Topic : <span className="fw-normal fst-italic">
                                    {Object.values(data.syllabus).map((i) => {
                                        return i.topic + ", "
                                    }
                                    )}
                                </span>
                            </div>
                        </div>
                        <div className="">
                            <span className="fw-bold">Schedule: </span>
                            {data.schedule}
                        </div>
                        <div className="">
                            <span className="fw-bold">Instructor : </span>
                            {data.instructor}
                        </div>
                        <div className="">
                            <span className="fw-bold">Location: </span>
                            {data.location}
                        </div>
                        <div className="">
                            <span className="fw-bold">Duration: </span>
                            {data.duration}
                        </div>
                        <div className="">
                            <div className="fw-bold"
                            >Prerequisites : <span className="fw-normal fst-italic">
                                    {Object.values(data.prerequisites).map((i) => {
                                        return i + ", "
                                    })}
                                </span>
                            </div>
                        </div>
                        <div className="">
                            <div className="fw-bold">
                                Students : <span className="fw-normal fst-italic">
                                    {Object.values(data.students).map((i) => {
                                        return i.name + ", "
                                    }
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    }

}

export default CourseDetails;