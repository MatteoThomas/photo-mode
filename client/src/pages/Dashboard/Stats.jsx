import React from "react";
import styled from "styled-components"
import "../../App.css";

const StatsContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  color:aliceblue;
`

const RowLeft = styled.div`
  padding: 0 0 0 1rem;
`

const Stats = ( props ) => {
    //DESTRUCTURE PROPS
  const { count = ""} =  props

  return (
    <StatsContainer className="stats-container">

        <RowLeft>
            Uploads: {count} <br/>
            Comments: - <br/>
            Likes: - <br/>
        </RowLeft>
    </StatsContainer>

);}

export default Stats