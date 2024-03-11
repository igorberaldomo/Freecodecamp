import styles from "./7-App2.module.css"

function App(){
    return(
        <>
        <p className={styles.BlueParagraph}>
            The weather is sunny today
        </p>
        <p className={styles.GreenParagraph}>
            Still, dont forget to bring your umbrella
        </p>
        </>
    )
}
export default App