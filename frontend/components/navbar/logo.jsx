import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
      <div className="logo">
        <Link to='/'><img src="https://portlandtable.s3.us-west-2.amazonaws.com/banner+images/pngaaa.com-443257.png" alt="image" /></Link>
        <Link to='/'><h2>PortlandTable</h2></Link>
      </div>
  )
}

export default Logo