//import logo from './logo.svg';
import './App.css';
//import SignIn from "./signin/signin"

import React, { useEffect, useRef, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import HeaderComponent from "./components/header/header"
import Layout from "./components/layout/layout"
import Card from "./components/card/card"

import { StyledLink, HeaderButton } from "./components/header/headerStyles"

import {  Container, 
          Section,
          DivChatArea,
          DivChatHeader,
          DivMessageSections,
          TextMessage,
          DivChatControls,
          Textarea,
          Button,
          DivUsers, 
          DivName,
          DivPic,
          Image,
          DivUserInfo,
          SpanOnline,
          SpanOffline,
          SpanAway,
          TextContainer} from "./styles/chatStyles"

import {  ContainerSignIn,
          CardButton,
          Form } from "./components/card/cardStyles"

firebase.initializeApp({
    apiKey: "",
    authDomain: "chat-for-testapp.firebaseapp.com",
    databaseURL: "https://chat-for-testapp.firebaseio.com",
    projectId: "chat-for-testapp",
    storageBucket: "chat-for-testapp.appspot.com",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
})


const auth = firebase.auth()
const firestore = firebase.firestore()
//const database = firebase.database()


function App() {

  const [user] = useAuthState(auth)    // All information about the user is stored in user

  // IF user is defined, show Chatroom etc, if not show SignIn
  return (
    <div className="App">
      {user ? 
        ( <Layout>
            {<HeaderComponent>
              <SignOut />
            </HeaderComponent>}
            
            <ChatRoom />
          </Layout>) : (<SignIn/>)
      }  
    </div>
  );
}

const SignIn = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();  // Google authentication handled by Firebase

    auth.signInWithPopup(provider)  // Triggers popup window
  }

  return (
    <Layout>
      <HeaderComponent/>

      <ContainerSignIn>
        <Card>
            <CardButton onClick={signInWithGoogle}>
              <span syle={{position: "fixed", zIndex: 1}}>Sign in with Google</span>
              </CardButton>
        </Card>
      </ContainerSignIn>
    </Layout>
  )
}


function SignOut() {
  return auth.currentUser && (    // If there is a currentUser, return a button that triggers auth.signOut()

    <StyledLink onClick={() => auth.signOut()}>Logout</StyledLink>
  )
}


function ChatRoom () {
  const [formValue, setFormValue] = useState('');        // To store message that is to be sent
  const [chatStarted, setChatStarted] = useState(false)  // Used to initialize chat when <User /> is clicked

  //const dummy = useRef()                                 // Reference to div under messages for use in scroll down
   

  const messagesRef = firestore.collection('messages');      // Reference to collection in Firestore 

  const query = messagesRef.orderBy('createdAt').limit(40);  // Make query for documents ordered by timestamp

  const [messages] = useCollectionData(query, {idField: 'id'});  // Listen to updates in messages in realtime. 
                                                                 // Returns the messages from the database

  console.log(messages)


  const sendMessage = async(e) => {

    e.preventDefault();                                 // Stop function from refreshing page on submit

    const { uid, photoURL, email } = auth.currentUser;  // currently logged in user

    await messagesRef.add({                             // Write new message to database. Added email for use as username
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid, 
      photoURL,
      email
    });

    setFormValue('');   // Reset formvalue

    //dummy.current.scrollIntoView({ behavior: 'smooth' });   // Automatically scroll down on sendMessage
  }

  // Put user info into a function to initialize chat when it is clicked
  const User = (props) => {    

    const { person, onClick } = props  

    return (
      <DivName onClick={() => onClick(person)}>
          <DivPic >
            <Image src="https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png"/>
          </DivPic>
          <DivUserInfo> 
              <span style={{ fontWeight: 500, lineHeight: "3em" }}>{person.email.split('@')[0]}</span>
              <SpanOnline />
              {/*<span>online</span>*/}
          </DivUserInfo>
      </DivName>
    )
  }



  const initChat = () => {
    setChatStarted(true)
  }

  
 /*
  const scrollToBottom = () => {
    dummy.current.scrollIntoView({ behavior: 'smooth' })     // Attempt at scrolling down on initialize chat
   }*/
 
   //debugger
   /*useEffect(() => {
     console.log(chatStarted)
     if (chatStarted) {
       scrollToBottom();
     }
 
   }, [messages])*/

  
  const person = messages ? messages.filter(message => message.email !== auth.currentUser.email)[0] : null  // Weakness: Depends on messages sent

  // Initiating chat with chatStarted which is set to true by initChatwhen User is clicked
  return (
    <Section>

      

      <DivUsers>
            {   person && <User key={person.uid} 
                                person={person}
                                onClick={initChat}
                          />
            }
    </DivUsers>

    
    <DivChatArea>
            <DivChatHeader>    
              {
                chatStarted ? `Talking to ${person.email.split('@')[0]} 💬👋` : null
              }
            </DivChatHeader>
                <DivMessageSections>
                  {
                    chatStarted ?
                    //scrollToBottom()
                    (<TextContainer>
                        <TextMessage>
                          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />) /*return ChatMessage with given message */}  
                          {/*<div ref={dummy}></div>*/}
                        </TextMessage>
                    </TextContainer>) : (null)
                  }
                </DivMessageSections>
                {
                  chatStarted ? 
                    (<DivChatControls onSubmit={sendMessage}>
                      <Textarea 
                        placeholder="Happy chatting!"
                        value={formValue} 
                        onChange={(e) => setFormValue(e.target.value)} 
                      />
                      <Button type="submit" disabled={formValue === ''}>Send</Button>
                    </DivChatControls>) : (null)
                }
        </DivChatArea>
    </Section>
  ) 

}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;    //  works because <ChatMessage message={msg} />

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';  // Distinguish between sent and recieved messages to style
                                                                            // them accordingly
  return (  
    
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>

  )
}

export default App;
