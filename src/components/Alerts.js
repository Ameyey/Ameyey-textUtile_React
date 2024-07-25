import React from 'react'

function Alerts(props) {

  const capitalize=(word)=>{
    const lower =word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
    <div>
    <div className="alert alert-primary alert-dismissible fade show my-2" role="alert">
      <strong>{props.alert.type}</strong>{props.alert.msg}
    </div>
  </div>
  )
}

export default Alerts
