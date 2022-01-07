import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { fetchUsers } from "../redux/actions";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
  
    useEffect(() => {
      dispatch(fetchUsers())
    }, [dispatch]);
  
    return (
        <>
        <h2>Users:</h2>
        <div>
            {users.map(user => 
            <div style={{margin: 10}}>{user.name}</div>)}
        </div>
        </>
     );
}

export default Users;
