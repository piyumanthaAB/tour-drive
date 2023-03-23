import React from 'react';
import * as i from './SingleTourIncludesElements';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
const SingleTourIncludes = ({ excludes, includes }) => {
  return (
    <>
      <i.IncludesSection>
        <i.IncludesCOntainer>
          <i.Text margin={'3rem 0'} fontsize={'4.5rem'} fontweight={'700'}>
            Included/Excluded
          </i.Text>
          <i.ListContainer>
            <i.Left>
              {includes.map((inc, i) => {
                return (
                  <>
                    <i.IncludeRow key={i}>
                      <i.IconContainer
                        color='var(--secondary-color)'
                        fontsize={'2.5rem'}
                      >
                        {' '}
                        <AiOutlineCheckCircle />{' '}
                      </i.IconContainer>
                      <i.Text
                        margin={'0 0 0 2rem'}
                        fontsize={'1.7rem'}
                        fontweight={'500'}
                      >
                        {/* {inc} */}asd
                      </i.Text>
                    </i.IncludeRow>
                  </>
                );
              })}
            </i.Left>
            <i.Right>
              {/* {excludes.map((exc, i) => {
                return (
                  <i.IncludeRow key={i}>
                    <i.IconContainer
                      color='var(--secondary-color)'
                      fontsize={'2.5rem'}
                    >
                      {' '}
                      <AiOutlineCheckCircle />{' '}
                    </i.IconContainer>
                    <i.Text
                      margin={'0 0 0 2rem'}
                      fontsize={'1.7rem'}
                      fontweight={'500'}
                    >
                      {exc}
                    </i.Text>
                  </i.IncludeRow>
                );
              })} */}
            </i.Right>
          </i.ListContainer>
        </i.IncludesCOntainer>
      </i.IncludesSection>
    </>
  );
};

export default SingleTourIncludes;
