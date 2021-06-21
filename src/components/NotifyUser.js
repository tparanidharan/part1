import React from 'react'

const NotifyUser = ({message, notifType}) => {
  console.log(message, notifType);
  return <div className={notifType}> {message} </div>
}
export default NotifyUser
