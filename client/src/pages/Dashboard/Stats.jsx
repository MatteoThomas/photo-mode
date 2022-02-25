import React from "react";
import {Container} from "react-bootstrap"
import styled from "styled-components"
import "../../App.css";

const StatsContainer = styled(Container)`
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