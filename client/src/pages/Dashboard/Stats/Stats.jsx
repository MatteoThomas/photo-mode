import React from "react";
import { StatsContainer, RowLeft } from "./Stats.style";

const Stats = ( props ) => {
  //DESTRUCTURE PROPS
  const { count = ""} =  props

  return (
    <StatsContainer>
        <RowLeft>
          Uploads: {count} <br/>
          Comments: - <br/>
          Likes: - <br/>
        </RowLeft>
    </StatsContainer>
    );
}

export default Stats
  