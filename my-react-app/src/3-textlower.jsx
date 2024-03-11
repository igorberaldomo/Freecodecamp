export default function textotlower(){
    const lowercaseClass = 'text-lowercase';
    const text = 'Hello World!';{/*atribui a duas constantes e usa uma delas para atributo e outra para texto*/}
    const app = <h1  className={lowercaseClass}>{text}</h1>;
    return app
}