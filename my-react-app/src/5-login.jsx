function App(props){
    const {user} = props

    return( 
        <>
        <h1>Hello there!</h1>
        {user?<button>Logout</button>:<button>Login</button>} {/* em vez de fazer uma estrutura if você pode fazer uma estrutura ternária para detectar o login ou logout*/}
        </>
    )
}

export default App