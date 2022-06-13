import React from "react";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";



import HospitalIcon from "./../assets/hospital.png";
import LogoutIcon from "./../assets/logout.png";
// import  Channelsearch  ,Teamchannellist, teamchannelpreview

import ChannelSearch from "./ChannelSearch";
import Teamchannellist from "./teamchannellist";
import TeamChannelpreview from "./teamChannelpreview";
const cookies=new Cookies()

const Sidebar = ({ logout }) => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={HospitalIcon} alt="Hospital" width="30" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner" onClick={logout}>
        <img src={LogoutIcon} alt="Logout" width="30" />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Medical Pager</p>
  </div>
);

const Channellistcontainer = () => {

   const logout=()=>{
    cookies.remove("token");
    cookies.remove('userId');
    cookies.remove('username');
    cookies.remove('fullName');
    cookies.remove('avatarURL');
    cookies.remove('hashedPassword');
    cookies.remove('phoneNumber');

    window.location.reload();
   }

  return (
    <>
      <Sidebar logout={logout}></Sidebar>
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch></ChannelSearch>
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listprops) => (
            <Teamchannellist {...listprops} type="team"></Teamchannellist>
          )}


          Preview={(previewProps)=>{
            <TeamChannelpreview
            {...previewProps}
            type="team"
            ></TeamChannelpreview>
          }}
        ></ChannelList>


<ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listprops) => (
            <Teamchannellist {...listprops} type="messaging"></Teamchannellist>
          )}


          Preview={(previewProps)=>{
            <TeamChannelpreview
            {...previewProps}
            type="messaging"
            ></TeamChannelpreview>
          }}
        ></ChannelList>



      </div>
    </>
  );
};

export default Channellistcontainer;
