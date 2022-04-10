import React from "react";
import { RowLeft } from "./Stats.style";
import { InfoContainer } from "../../../components/Container/Container.style";

const Stats = ( props ) => {
  //DESTRUCTURE PROPS
  const { count = ""} =  props

  return (
    <InfoContainer>
        <RowLeft>
          Uploads: {count} <br/>
          Comments: - <br/>
          Likes: - <br/>
        </RowLeft>
    </InfoContainer>
    );
}

export default Stats
  