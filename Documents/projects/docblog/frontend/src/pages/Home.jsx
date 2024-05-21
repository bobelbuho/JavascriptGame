import {useState, useEffect} from 'react'
import api from "../api"

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    
    return <h1>Home</h1>
}
export default Home

