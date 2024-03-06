import { useState } from "react";
import "./styllexttolower.css"

function List() {
    const [selectValue, setSelectValue] = useState('0'); {/*para criar um switch de códigos renderizados você deve: uma constante para coletar o valor do case*/}
    let conteudo;
    {/* lembrar que a variavel é de texto,*/}
    switch (selectValue) { 
        case "1":
            conteudo = Hello(selectValue)
            break;
        case "2":
            conteudo = ParentComponent()
            break;
        case "3":
            conteudo = Lowercase()
            break;
        case "4":
            conteudo = role()
            break;
        case "5":
            conteudo = Myelement()
            break;
        case "6":
            conteudo = texttolower()
            break;
        case "7":
            conteudo = ParentComponentstate(props)
            break;
        case "8":
            conteudo = Greetings()
            break;
        case "9":
            conteudo = ParentComponentreturning()
            break;
        case "10":
            conteudo = States()
            break;
        case "11":
            conteudo = gotemails()
            break;
        case "12":
            conteudo = login()
            break;
        case "13":
            conteudo = togglediv()
            break;
        case "14":
            conteudo = ParentComponent()
            break;
        case "15":
            conteudo = className()
            break;
        case "16":
            conteudo = A1(selectValue)
            break;
        case "17":
            conteudo = ParentComponent()
            break;
        case "18":
            conteudo = className()
            break;
        case "19":
            conteudo = A1(selectValue)
            break;
        case "20":
            conteudo = ParentComponent()
            break;
        default:
            conteudo = "default"
            break;
    }
    // console.log(conteudo)
    return (
        <>
            <div>
                <label id="icode">Pick a code</label>
                <select name="code" id="icode" value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                    <option value="1">Hello</option>
                    <option value="2">ParentComponent</option>
                    <option value="3">Lowercase</option>
                    <option value="4">role</option>
                    <option value="5">Myelement</option>
                    <option value="6">texttolower</option>
                    <option value="7">ParentComponentstate</option>
                    <option value="8">Greetings</option>
                    <option value="9">ParentComponentreturning</option>
                    <option value="10">States</option>
                    <option value="11">gotemails</option>
                    <option value="12">login</option>
                    <option value="12">togglediv</option>
                    <option value="13">app</option>
                    <option value="14">app</option>
                    <option value="15">app</option>
                    <option value="16">app</option>
                    <option value="17">app</option>
                    <option value="18">app</option>
                    <option value="19">app</option>
                    <option value="20">app</option>

                </select>
            </div>

            <div id='res'>
                {conteudo}
            </div>
        </>
    );
}

export default List


function A1(selectValue) {
    return (<>
        <h1>Hello World {selectValue}!</h1>
        <h2>Learning to code with react</h2>
    </>
    );
}
function ParentComponent() {
    return(
        <>
        <UserComponent/>
        <ProfileComponent/>
        <FeedComponent/>
        </>
    );
}
function UserComponent(){
    return <h1>User Component</h1>
}

function ProfileComponent(){
    return <h1>Profile Component</h1>
}

function FeedComponent(){
    return <h1>Feed Component</h1>
}

function Lowercase(){
    return <h1 className="text-lowercase">LOWERCASE</h1>; {/* Para adicionar classe no react você usa o atributo className em vez do atributo class(reservado para javascript)*/}
}
function role(){
const users = [
    {id:1, name:'Nathan', role:'Web Developer'},
    {id:2, name:'John', role:'Web Designer'},
    {id:3, name:'Jane', role:'Team Leader'},
]
return(
    <>
        <p>The currently active user list:</p>
        <ul>
            {
                users.map(function(user){
                    {/* no react você não precisa guardar o valor de retorno dentro de uma variável*/}
                    return(
                        <li key={user.id}>{user.name} as the {user.role}</li>
                    )
                })
            }
        </ul>
    </>
)
}


function Myelement(){
    const myElement = <h1>Hello World</h1>;{/*O h1 aqui é parte de uma extenção JSX que funciona para produzir elementos HTML através de JavaScript*/}
    return myElement
}
function texttolower(){
    const lowercaseClass = 'text-lowercase';
    const text = 'Hello World!';{/*atribui a duas constantes e usa uma delas para atributo e outra para texto*/}
    const app = <h1  className={lowercaseClass}>{text}</h1>;
    return app
}
function ParentComponentstate(){
    const [name1,setName] = useState('John')
    return <ChildComponentstate name1 = {name1} setName={setName}/>
} 

function ChildComponentstate(Props1){
    return(
        <>
        <h1>Hello {Props1.name}</h1>
        <button onClick={()=> Props1.setName('Mark')}>Change Name</button>
        </>
    )
}

function Greetings(){
    function greetings(){
        return 'Hello world'
    }
    return <ChildComponent greetings={greetings}/>
}

function ChildComponent(props2){
    return <p>{props2.greetings()}</p>
}

function ParentComponentreturning(){
    return < ChildComponentreturning
     name2 = 'John'
     age = {29}
     hobbies = {["read books" ,"Drink coffee"]}
     ocupation = "Software Engineer" />
}
function ChildComponentreturning(props3){
    return <Fragment> <p> Hello World! My name is {props3.name2}.</p> 
    <p>My age is {props3.age}</p>
    <p>I am a {props3.ocupation}</p>
    </Fragment>

}
function States(){
    const [name4,SetName] = useState('John')
    return( <><h1>Hello {name4}</h1>
    <button onClick={()=> SetName('Mark')}>Change Name</button></> 
    )
} 
function gotemails (){
    const newEmails = 2
    return(
        <>
            <h1>Hello there</h1>
            {
                newEmails > 0 &&
                <h2>
                    you have {newEmails} new emails in your inbox.
                </h2>
            }
        </>
    )
}
function login(props){
    const {user} = props

    return( 
        <>
        <h1>Hello there!</h1>
        {user?<button>Logout</button>:<button>Login</button>} {/* em vez de fazer uma estrutura if você pode fazer uma estrutura ternária para detectar o login ou logout*/}
        </>
    )
}

function togglediv(){
    const [ isParagraphVisible, SetIsParagraphVisible] = useState(true);
    const toggleStatus= ()=>{
        SetIsParagraphVisible(!isParagraphVisible);
    };
    return (
        <>
        <h1>Change UI Based on click</h1>
        {isParagraphVisible &&(
        <p>This paragraph Will be shown/hidden on click</p>
    )}
    <button onClick={toggleStatus}>
        {isParagraphVisible?'Hide':'Show'} Paragraph
    </button>
        </>
    );
}