export default function ParentComponent(){
    function greetings(){
        return 'Hello world'
    }
    return <ChildComponent greetings={greetings}/>
}

function ChildComponent(props){
    return <p>{props.greetings()}</p>
}

{/*
Props são imutaveis se você tentar mudar eles vai dar erro

function ChildComponent(props){
  props.name = 'Mark';
  return <p>Hello World! my name is {props.name}</p>
}

function ParentComponent() {
  return <ChildComponent name='John'/>
}

export default ParentComponent*/}