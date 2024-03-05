function App (){
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
export default App