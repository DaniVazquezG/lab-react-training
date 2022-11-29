const Greetings = (props) => {

    let langText = "";
    switch (props.lang) {
        case "de":
            langText = "hallo";
            break;
        case "en":
            langText = "hello";
            break;
        case "es":
            langText = "hola";
            break;
        case "fr":
            langText = "bonjour";
            break;
        default:
            break;
    }


    return (
        <div>
            <h1>{langText + " " + props.children}</h1>
        </div>
    );
}

export default Greetings;