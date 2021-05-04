import React from 'react'

const Header = (props) => {
  console.log(props);
return(
  <div>
    <h1>{props.course}</h1>
  </div>
)
}

const Part = (props) => {
return(
<div>
  <p>{props.part} {props.numberOfExercises}</p>
</div>
)
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return(
    <div>
      <Part part={part1} numberOfExercises={exercises1}/>
      <Part part={part2} numberOfExercises={exercises2}/>
      <Part part={part3} numberOfExercises={exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p> Number of Exercises {props.parts}
      </p>
    </div>
  )
}

const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [{ 
//     name: 'Fundamentals of React',
//     exercises: 10
// },
//    {
//     name: 'Using props to pass data',
//     exercises: 7
// },
//    { 
//     name: 'State of a component',
//     exercises: 14
//   }]
const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}
const [first,second, third]=course.parts
console.log(course.parts[2].exercises)
//console.log(third)
const sum = (p1, p2,p3) => {
  return p1 + p2+p3
}
const result=sum(first.exercises,second.exercises,third.exercises)
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.parts.name} parts={course.parts.exercises}/>
      <Total parts={result} />
    </div>
    // <div>
    //   <Header course = {course}/>
    //   <Content />
    //   {/* <Content parts={part2} numberOfExercises={exercises2}/> */}
    //   {/* <Content parts={part3} numberOfExercises={exercises3}/> */}
    //   <Total totalNumber = {parts.exercises1+parts.exercises2+parts.exercises3}/>
    // </div>
  )
}

export default App