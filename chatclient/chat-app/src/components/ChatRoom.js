import React, { useState } from 'react'

const ChatRoom = () => {
    const [userData, setUserData] = useState({
        username:"",
        receiverName:"",
        connected:false,
        message:""
    })
  return (
    <div className="container">
        {userData.connected?
        <div>    
        </div>
        :
        <div>
        </div>}
    </div>

  )
}

export default ChatRoom