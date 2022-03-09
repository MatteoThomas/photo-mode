import React from "react";
import styled from "styled-components"


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
  
const StatsContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  color:aliceblue;
`

const RowLeft = styled.div`
`