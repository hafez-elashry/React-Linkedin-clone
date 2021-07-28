import React, {useState, useEffect} from 'react';
import './Feed.css';
import InputOption from './InputOption';
import Post from './Post'
import FlipMove from 'react-flip-move';

import CreateIcon from '@material-ui/icons/Create';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc=> ({
                    id: doc.id,
                    data: doc.data()
                })))
            )
        );
    })

    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon className="Feed__creatIcon"/>
                    <form >
                        <input 
                            type="text"
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} />
                        <button 
                            type="submit"
                            onClick={sendPost}>send</button>
                    </form>
                </div>
                <div className="feed__inputOption">
                    <InputOption 
                        Icon={InsertPhotoIcon}
                        title="Photo"
                        color="#78b9f9"
                        />
                    <InputOption 
                        Icon={SubscriptionsIcon}
                        title="Video"
                        color="#7fc15e"
                        />
                    <InputOption 
                        Icon={EventNoteIcon}
                        title="Event"
                        color="#e7a33e"
                        />
                    <InputOption 
                        Icon={CalendarViewDayIcon}
                        title="Article"
                        color="#fc9295"
                        />
                </div>
            </div>
            {/* Posts */}
            <FlipMove>
                {posts.map(({id, data})=> (
                    <Post
                        key={id} 
                        name={data.name}
                        description={data.description}
                        message={data.message}
                        photoUrl={user.photoURL} />
                ))}
            </FlipMove>
            
            

        </div>
    )
}

export default Feed;
