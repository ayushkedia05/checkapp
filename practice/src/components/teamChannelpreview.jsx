import React from 'react'


import { Avatar,useChatContext } from 'stream-chat-react'
const TeamChannelpreview = ({channel,type}) => {


    const {channel:activeChannel,client}=useChatContext();



    const Channelpreview=()=>(
        <p className='channel-preview__item'>
            #{channel?.data?.name || channel?.data?.id}
        </p>
    );


  const Directpreview=()=>{
    const members=Object.values(channel.state.members).filter(({user})=>user.id !== client.userID)
   
   return(<div className='channel-peview__item single'>
      <Avatar
      image={members[0]?.user?.image}
      name={members[0]?.user?.fullname}
      size={24}
      >

      </Avatar>


    </div>)
  }

  return (
    <div  className={
      channel?.id === activeChannel?.id
          ? 'channel-preview__wrapper__selected'
          : 'channel-preview__wrapper'
  }
  onClick={()=>{
    console.log(channel);
  }}
  
  >

    {type==='team'? <Channelpreview/>:<Directpreview/>}
    
    </div>
  )
}

export default TeamChannelpreview