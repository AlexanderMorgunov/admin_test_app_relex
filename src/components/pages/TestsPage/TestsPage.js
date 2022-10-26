import AppHeader from "../../AppHeader/AppHeader";
import TestItems from "../../TestItems/TestItems";
import InputForm from "../../input-form/InputForm";




const TestsPage = ({log, isLogged, exitLog}) => {

    const getContent = () => {
        if(isLogged === true) {
            return (
                <>
                <AppHeader log={log} exitLog={exitLog}/>
                <TestItems/>
                </>
            ) 
        } else {
            return (
                <InputForm log={log} isLogged={isLogged} exitLog={exitLog}/>
            )
        }
    }

    const content = getContent();

    return (
        content
    )
}

export default TestsPage;