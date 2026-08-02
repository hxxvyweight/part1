const Header = (props) => {
  return (
      <>
      <h1>{props.course}</h1>
      </>
  )

}

const Part = ({courseData}) => {
  return (
    <p> {courseData.name} {courseData.exercises} </p>
  )
}

const Content = (props) => {

  return (
    <>
    <Part courseData={props.part1}/>
    <Part courseData={props.part2} />
    <Part courseData={props.part3} />
    </>
  )

}


const Total = (props) => {
  return (
    <p>{props.total}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }
  console.log(part1.name)
  
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
     
     <Header course={course}/>
      
      <Content part1={part1} part2={part2} part3={part3}/>
     
      
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App