import React, { memo } from "react"

//  使用memo，模拟PureComponent
const Profile = memo(function (props) {
  console.log("Profile render")

  return (
    <div>
      <h2>Profile</h2>
      <div>{props.message}</div>
    </div>
  )
})

export default Profile