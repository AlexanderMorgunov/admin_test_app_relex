import Users from '../../Users/Users';
import AppHeader from '../../AppHeader/AppHeader';
import InputForm from '../../input-form/InputForm'



const UsersPage = ({log, isLogged, exitLog}) => {

    const getContent = () => {
        if(isLogged === true) {
            return (
                <>
                <AppHeader log={log} exitLog={exitLog}/>
                <Users/>
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

export default UsersPage;