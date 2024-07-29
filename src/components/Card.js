import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = (props) => {
    let course = props.course;
    let likedCourses= props.likedCourses;
    let setLikedCourses= props.setLikedCourses;
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //pehle se liked hay
            setLikedCourses((prev)=> prev.filter((cid)=>(cid !== course.id)));
            toast.warning("Like removed");
        }
        else{
            //pehle se like nahi hay
            //insert karna h ye course liked course pe
            if(likedCourses.length ===0){
                setLikedCourses([course.id])
            }
            else{
                setLikedCourses((prev) => [...prev,course.id])
            }
            toast.success("Like successfully");

        }
    }
    return(
        <div className="w-[310px] bg-gray-950 rounded-md overflow-hidden bg-opacity-80 bottom-[100px]">
            <div className="relative ">
                <img src={course.image.url} ></img>
                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
                    <button onClick={clickHandler} >{
                        !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />) : (<FcLike fontSize="1.75rem"/>)
                    }               
                    </button>
                </div>
            </div>
            
            <div>
                <p className="text-white font-semibold text-lg leading-6 mt-3">{course.title}</p>
                <p className="text-white mt-3">
                    {
                        course.description.length>100 ? (course.description.substr(0,100)+"..."):(course.description)
                    }
                    </p>
            </div>
        </div>
    )
}
export default Card;