import Link from 'next/link'
import React from 'react'

// async function fetchCourses() {
//   const response = await fetch('http://localhost:3000/api/courses')
//   const courses = await response.json()
//   return courses
// }

const Courses = async ({ courses }) => {
  //const courses = await fetchCourses()
  return (
    <div className="grid-1">
      {courses?.map((course) => (
        <div key={course.id} className="bg-blue-200 p-4 m-4">
          <h2 className="text-xl font-bold">{course.title}</h2>
          <small>Level:{course.level}</small>
          <p className="mb-2">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg mb-4"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Courses
