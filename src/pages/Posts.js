import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { fetchPosts } from "../redux/actions";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);
  
    useEffect(() => {
      dispatch(fetchPosts())
    }, [dispatch]);

    return ( 
        <>
        <h2>Posts:</h2>
        <div>
            {posts.map(post => 
            <div style={{margin: 10}}>{post.body}</div>)}
        </div>
        </>
     );
}
 
export default Posts;