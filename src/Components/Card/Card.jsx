import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Card.module.scss"


const Card = ({ results }) => {

    let screen;

    if (results) {
        screen = results.map((signleCourseInfo) => {

            const { id, thumbnail, name, enrollmentStatus, location, instructor } = signleCourseInfo;
            return (
                <Link
                    key={id}
                    to={`/course/${id}`}
                    style={{ textDecoration: "none" }}
                    className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
                >
                    <div className={`${styles.card} d-flex flex-column justify-content-center`}>

                        <img
                            className={`${styles.img} img-fluid`}
                            src={thumbnail} alt=""
                        />
                        <div className={`${styles.content}`}>
                            <div className="fs-5 fw-bold mb-4 text-primary">{name}</div>
                            <div className="">
                                <div className="fs-6 fw-normal">
                                    Instructor Name
                                </div>
                                <div className="fs-5 fw-bold text-success">
                                    {instructor}
                                </div>
                            </div>
                            <div className="">
                                <div className="fs-6 fw-normal">
                                    Location
                                </div>
                                <div className="fs-5 fw-bold text-warning">
                                    {location}
                                </div>
                            </div>
                        </div>
                    </div>

                    {
                        (() => {
                            if (enrollmentStatus === "Closed") {
                                return (
                                    <div
                                        className={`${styles.badge} position-absolute badge bg-danger`}
                                    >
                                        {enrollmentStatus}
                                    </div>
                                );
                            } else if (enrollmentStatus === "Open") {
                                return (
                                    <div
                                        className={`${styles.badge} position-absolute badge bg-success`}
                                    >
                                        {enrollmentStatus}
                                    </div>
                                );
                            } else {
                                return (
                                    <div
                                        className={`${styles.badge} position-absolute badge bg-secondary`}
                                    >
                                        {enrollmentStatus}
                                    </div>
                                );
                            }
                        })
                            ()
                    }

                </Link>
            )
        })
    } else {
        screen = "No Character Found!!"
    }


    return (
        <>
            {screen}
        </>
    )

}





export default Card