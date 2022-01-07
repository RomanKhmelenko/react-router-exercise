import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { fetchComments } from "../redux/actions";

const Comments = () => {
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments);
  
    useEffect(() => {
      dispatch(fetchComments())
    }, [dispatch]);

    return ( 
        <>
        <h2>Comments:</h2>
        <div>
            {comments.map(comment => 
            <div style={{margin: 10}}>{comment.body}</div>)}
        </div>
        </>
     );
}
 
export default Comments;