import {useState, UseEffect} from "react";
import {POST} from "../POST";

const LIMIT = 2

export default function usePosts(){
    const [isLoading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])


    UseEffect((id)=>{
        POST(0, LIMIT).then(newPosts=>{
            setPosts(newPosts);
            setLoading(flase)
        })
    },[])

    return {isLoading, posts};
}

