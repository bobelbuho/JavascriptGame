import {useState, useEffect} from 'react'
import api from "../api"

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    const getNote = () => {
        api
        .get("/api/notes/")
        .then((res) => res.data)
        .then((data) => setNotes(data))
        .catch((err) => alert(err));
    }

    return <h1>Home</h1>
}
export default Home

