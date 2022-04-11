import React from "react";
import { RowLeft } from "./Stats.style";


const Stats = ( props ) => {
  //DESTRUCTURE PROPS
  const { count = ""} =  props

  return (

        <RowLeft>
          Uploads: {count} <br/>
          Comments: - <br/>
          Likes: - <br/>
        </RowLeft>

    );
}

export default Stats
  