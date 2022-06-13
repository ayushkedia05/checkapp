import React, { useState, useEffect } from "react";

import { getChannel, useChatContext } from "stream-chat-react";

import { SearchIcon } from "./../assets";
const ChannelSearch = () => {



const [query,setquery]=useState('');
const [loading,setloading]=useState(false);

const getChannels=async(text)=>{
    try{
//   fetch channel
    }
    catch(error){
        setquery('');
    }
}


const onSearch=(event)=>{
    event.preventDefault();


    setloading(true);
    setquery(event.target.value);

    getChannels(event.target.value);
}



  return (
    <div className='"channel-search__container'>
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon></SearchIcon>
        </div>

        <input
          className="channel-search__input__text"
          placeholder="search"
          type="text"
          value={query}
          onChange={onSearch}
        >
        </input>
      </div>
    </div>
  );
};

export default ChannelSearch;
