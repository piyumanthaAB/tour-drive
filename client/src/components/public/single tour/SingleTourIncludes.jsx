import React from 'react'
import * as i from './SingleTourIncludesElements';
import { AiOutlineCheckCircle,AiOutlineCloseCircle } from "react-icons/ai";
const SingleTourIncludes = () => {
  return (
    <>

      <i.IncludesSection>
        <i.IncludesCOntainer>
          <i.Text margin={'3rem 0'} fontsize={'4.5rem'} fontweight={'700'}>Included/Excluded</i.Text>
          <i.ListContainer>
            <i.Left>
              
              <i.IncludeRow>
                <i.IconContainer color='var(--secondary-color)' fontsize={'2.5rem'}> <AiOutlineCheckCircle/> </i.IconContainer>
                <i.Text margin={'0 0 0 2rem'} fontsize={'1.7rem'} fontweight={'500'}>Specialized bilingual guide</i.Text>
              </i.IncludeRow>
              <i.IncludeRow>
                <i.IconContainer color='var(--secondary-color)' fontsize={'2.5rem'}> <AiOutlineCheckCircle/> </i.IconContainer>
                <i.Text margin={'0 0 0 2rem'} fontsize={'1.7rem'} fontweight={'500'}>Private Transport</i.Text>
              </i.IncludeRow>
              <i.IncludeRow>
                <i.IconContainer color='var(--secondary-color)' fontsize={'2.5rem'}> <AiOutlineCheckCircle/> </i.IconContainer>
                <i.Text margin={'0 0 0 2rem'} fontsize={'1.7rem'} fontweight={'500'}>Entrance fees (Cable and car and Moon Valley)</i.Text>
              </i.IncludeRow>
              <i.IncludeRow>
                <i.IconContainer color='var(--secondary-color)' fontsize={'2.5rem'}> <AiOutlineCheckCircle/> </i.IconContainer>
                <i.Text margin={'0 0 0 2rem'} fontsize={'1.7rem'} fontweight={'500'}>Box lunch water, banana apple and chocolate</i.Text>
              </i.IncludeRow>


            </i.Left>
            <i.Right>
            <i.IncludeRow>
                <i.IconContainer color='var(--main-color)' fontsize={'2.5rem'}> <AiOutlineCloseCircle/> </i.IconContainer>
                <i.Text margin={'0 0 0 2rem'} fontsize={'1.7rem'} fontweight={'500'}>Departure Taxes</i.Text>
              </i.IncludeRow>
              <i.IncludeRow>
                <i.IconContainer color='var(--main-color)' fontsize={'2.5rem'}> <AiOutlineCloseCircle/> </i.IconContainer>
                <i.Text margin={'0 0 0 2rem'} fontsize={'1.7rem'} fontweight={'500'}>Entry Fees</i.Text>
              </i.IncludeRow>
              <i.IncludeRow>
                <i.IconContainer color='var(--main-color)' fontsize={'2.5rem'}> <AiOutlineCloseCircle/> </i.IconContainer>
                <i.Text margin={'0 0 0 2rem'} fontsize={'1.7rem'} fontweight={'500'}>5 Star Accommodation</i.Text>
              </i.IncludeRow>
              <i.IncludeRow>
                <i.IconContainer color='var(--main-color)' fontsize={'2.5rem'}> <AiOutlineCloseCircle/> </i.IconContainer>
                <i.Text margin={'0 0 0 2rem'} fontsize={'1.7rem'} fontweight={'500'}>Airport Transfers</i.Text>
              </i.IncludeRow>
            </i.Right>
          </i.ListContainer>
        </i.IncludesCOntainer>
      </i.IncludesSection>

    </>

    )
}

export default SingleTourIncludes