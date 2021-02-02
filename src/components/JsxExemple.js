const user = {
    firstName: "Jennifer",
    lastName: "Nukafu"
}

function FormatName(user) {
    return user.firstName + ' ' + user.lastName
}
// Les accolades en Jsx permet d'écrire du JS
const JsxExemple = () =>{
        return(
            <> 
                <p>Bonjour {FormatName(user)} !</p>
            </>
        )
    }
    
export default JsxExemple