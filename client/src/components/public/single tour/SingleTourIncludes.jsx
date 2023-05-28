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
              {includes.split('\r').map((inc, j) => {
                return (
                  <>
                    {inc !== '' && (
                      <i.IncludeRow key={j}>
                        <i.IconContainer
                          color="var(--secondary-color)"
                          fontsize={'2.8rem'}
                        >
                          {' '}
                          <AiOutlineCheckCircle />{' '}
                        </i.IconContainer>
                        <i.Text
                          margin={'0 0 0 2rem'}
                          fontsize={'1.9rem'}
                          fontweight={'500'}
                        >
                          {inc}
                        </i.Text>
                      </i.IncludeRow>
                    )}
                  </>
                );
              })}
            </i.Left>
            <i.Right>
              {excludes.split('\r').map((exc, j) => {
                return (
                  <>
                    {exc !== '' && (
                      <i.IncludeRow key={j}>
                        <i.IconContainer
                          color="var(--main-color)"
                          fontsize={'2.5rem'}
                        >
                          {' '}
                          <AiOutlineCloseCircle />{' '}
                        </i.IconContainer>
                        <i.Text
                          margin={'0 0 0 2rem'}
                          fontsize={'1.7rem'}
                          fontweight={'500'}
                        >
                          {exc}
                        </i.Text>
                      </i.IncludeRow>
                    )}
                  </>
                );
              })}
            </i.Right>
          </i.ListContainer>
        </i.IncludesCOntainer>
      </i.IncludesSection>
    </>
  );
};

export default SingleTourIncludes;
