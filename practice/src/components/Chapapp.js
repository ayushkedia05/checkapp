import React from "react";

import {StreamChat} from 'stream-chat';

import {Chat} from 'stream-chat-react';
import Auth from "./Auth";

import Channelcontainer from "./channelcontainer";
import Channellistcontainer from "./channellistcontainer";
import Cookies from "universal-cookie";
import { ConnectionStatus } from "stream-chat-react";
// import Cookies from "universal-cookie";


const apikey='rc6s6y5c9g5g';


const client =StreamChat.getInstance(apikey);


const cookies= new Cookies();
const authToken=cookies.get("token");

if(authToken)
{
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  },authToken)
}

console.log(authToken);



const Chatapp=()=>{


// const client = StreamChat.getInstance("dz5f4d5kzrue");
// await client.connectUSer({
//   id: "shrill-boat-7",
//   name: "shrill",
//   image: "https://bit.ly/2u9Vc0r",
// }, "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic2hyaWxsLWJvYXQtNyIsImV4cCI6MTY1NTA4MDE2M30.QSIZDP6aRUFjRwXmoPOPeuEcx7kWT_aX2OYtGCJZWUs"); // token generated server side
// return client;



  {if(!authToken) return <Auth></Auth>}  

    return (
<>

 
  <div className="app__wrapper">
      <Chat client={client} theme="team light">
          <Channellistcontainer>
              
          </Channellistcontainer>

          <Channelcontainer>

          </Channelcontainer>
      </Chat>
  </div>


</>

    )
}


export default Chatapp;