import { Fragment } from "react"

export default function ParentComponent(){
    return < ChildComponent
     name = 'John'
     age = {29}
     hobbies = {["read books" ,"Drink coffee"]}
     ocupation = "Software Engineer" />
}
function ChildComponent(props){
    return <> <p> Hello World! My name is {props.name}.</p> 
    <p>My age is {props.age}</p>
    <p>I am a {props.ocupation}</p></>

}