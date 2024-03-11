export default function role(){
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