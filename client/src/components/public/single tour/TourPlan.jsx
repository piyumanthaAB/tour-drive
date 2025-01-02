import React, { useState, useEffect, useRef } from 'react';
import * as p from './TourPlanElements.js';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { RxDotFilled } from 'react-icons/rx';

const TourPlan = ({ plan }) => {
  const [open, setOpen] = useState(undefined);

  const planRef = useRef(null);

  const handleClickOutside = (e) => {
    if (planRef.current && !planRef.current.contains(e.target)) {
      setOpen(undefined);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const tourPlans = plan.map((plan, i) => {
    const record = plan.split(',');
    return {
      day: i + 1,
      title: record[1],
      description: record[2],
    };
  });

  const data = [
    {
      day: 1,
      title: 'Departure',
      description: [
        'Pretium vitae tempus sem enim enim.Tempus, leo, taciti augue aliquam hendrerit.',
        'Pretium vitae tempus sem enim enim.Tempus, leo, taciti augue aliquam hendrerit.',
        'Pretium vitae tempus sem enim enim.Tempus, leo, taciti augue aliquam hendrerit.',
      ],
    },
    {
      day: 2,
      title: 'The South Coast',
      description: [
        'Pretium vitae tempus sem enim enim.Tempus, leo, taciti augue aliquam hendrerit.',
        'Pretium vitae tempus sem enim enim.Tempus, leo, taciti augue aliquam hendrerit.',
        'Pretium vitae tempus sem enim enim.Tempus, leo, taciti augue aliquam hendrerit.',
      ],
    },
    {
      day: 3,
      title: 'Optional Activities',
      description: [
        'Pretium vitae tempus sem enim enim.Tempus, leo, taciti augue aliquam hendrerit.',
        'Pretium vitae tempus sem enim enim.Tempus, leo, taciti augue aliquam hendrerit.',
        'Pretium vitae tempus sem enim enim.Tempus, leo, taciti augue aliquam hendrerit.',
      ],
    },
    {
      day: 4,
      title: 'Climb the mountain',
      description: [
        'Pretium vitae tempus sem enim enim.Tempus, leo, taciti augue aliquam hendrerit.',
        'Pretium vitae tempus sem enim enim.Tempus, leo, taciti augue aliquam hendrerit.',
        'Pretium vitae tempus sem enim enim.Tempus, leo, taciti augue aliquam hendrerit.',
      ],
    },
  ];

  return (
    <>
      <p.PlanSection>
        <p.Container ref={planRef}>
          <p.Text
            color="#222"
            margin="3rem 0"
            fontweight="700"
            fontsize="4.5rem"
          >
            Tour Plan{' '}
          </p.Text>

          {tourPlans.map((data, i) => {
            return (
              <p.PlanWrapper key={i}>
                <p.PlanRow
                  onClick={() => {
                    setOpen(i);
                  }}
                >
                  <p.DayLabel>
                    <p.Text color="#fff" fontweight="500" fontsize="1.7rem">
                      Day {data.day}{' '}
                    </p.Text>
                  </p.DayLabel>
                  <p.Text
                    color="#333"
                    margin="0 0 0 1rem"
                    fontweight="600"
                    fontsize="1.9rem"
                  >
                    {data.title}
                  </p.Text>
                  <p.IconContainer margin="0 2rem 0 auto">
                    <AiOutlineDown />
                  </p.IconContainer>
                </p.PlanRow>
                <p.PlanBody key={i} open={open === i ? true : false}>
                  <p.PlanBodyRow>
                    <p.IconContainer>
                      <RxDotFilled color="var(--main-color)" />
                      <p.Text
                        color="#333"
                        margin="0 0 0 1rem"
                        fontweight="500"
                        fontsize="1.8rem"
                      >
                        {data.description}
                      </p.Text>
                    </p.IconContainer>
                  </p.PlanBodyRow>
                  {/* {data.description.map((desc, i) => {
                    return (
                      
                    );
                  })} */}
                </p.PlanBody>
              </p.PlanWrapper>
            );
          })}
        </p.Container>
      </p.PlanSection>
    </>
  );
};

export default TourPlan;
