const Header = (props) => {
  return (
      <>
      <h1>{props.course}</h1>
      </>
  )

}

const Part = ({courseData}) => {
  return (
    <p> {courseData.name} {courseData.exercises}</p>
  )
}

const Content = (props) => {

  return (
    <>
    <Part courseData={props.parts[0]}/>
    <Part courseData={props.parts[1]}/>
    <Part courseData={props.parts[2]}/>
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
  
  const parts = [
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


  return (
    <div>
     
     <Header course={course}/>
      
      <Content parts={parts}/>
     
      
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
    </div>
  )
}

export default App