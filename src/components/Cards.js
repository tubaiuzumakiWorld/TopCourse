import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
 let courses = props.courses;
 let category= props.category;
 let allCourses = [];   //initially it is an empty array where we put each element of the each array named "array" in the "courses" array.
const[likedCourses, setLikedCourses]=useState([]);


 function getCourses(){
    if (category==="All") {
        Object.values(courses).forEach((array) =>{
            array.forEach((courseData) => {
                allCourses.push(courseData);
            })
        }) 
        return allCourses;
    } //push the datas in an single array named "allCourses"
    else{
        return courses[category];
    }
}



    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return( <Card key={course.id} 
                        course={course}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}/>)
                 })
            }
        </div>
    )
}
export default Cards;