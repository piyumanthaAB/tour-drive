import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${(props) => props.fontsize || '1.5rem'};
  color: ${(props) => props.color || '1.5rem'};
  font-weight: ${(props) => props.fontweight || '1.5rem'};
  margin: ${(props) => props.margin || '0'};
  font-family: ${(props) => props.fontfamily || 'var(--primary-font)'};
  line-height: ${(props) => props.lineheight || '2.5rem'};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontsize || '1.5rem'};
  color: ${(props) => props.color || '1.5rem'};
  font-weight: ${(props) => props.fontweight || '1.5rem'};
  margin: ${(props) => props.margin || '0'};
`;

export const OverviewSection = styled.div`
  width: 100%;
  min-height: 50rem;
  ${'' /* background-color:red ; */}
  display: flex;
  padding: 3rem 12rem;
  flex-direction: column;
  position: relative;
`;

export const OverviewContainer = styled.div`
  width: 60%;
  ${'' /* background-color:red; */}
  display:flex;
  flex-direction: column;
`;

export const TourHighlightContainer = styled.div`
  width: 60%;
  ${'' /* background-color:green ; */}
  min-height:30rem;
  display: flex;
  flex-direction: column;
`;

export const HighLightRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const TourBookingContainer = styled.div`
  width: 30%;
  ${'' /* background-color:red ; */}
  ${'' /* min-height:100vh ; */}
    border-radius:1rem;
  position: absolute;
  top: -10%;
  right: 6%;
  background-color: #fff;
  box-shadow: 0px 0px 32px 0px rgba(143, 143, 143, 0.2);
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const BookingTopContainer = styled.div`
  flex: 1;
  min-height: 3rem;
  ${'' /* background-color:green; */}
  display:flex;
  flex-direction: column;
  position: relative;

  ::after {
    position: absolute;
    bottom: -10%;
    right: 0;
    width: 100%;
    height: 1px;
    background-color: #ccc;
    content: '';
  }
`;

export const PriceTagContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BookingBodyContainer = styled.div`
  flex: 1;
  ${'' /* max-height:3rem ; */}
  ${'' /* background-color:red ; */}
    display:flex;
  flex-direction: column;
  padding: 2rem 0;
`;

export const Group = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const Banner = styled.div`
  flex: 1;
  border-radius: 1rem;
  background-color: #eee;
  padding: 1rem 2rem;
`;

export const BookNowBtn = styled.button`
  width: 100%;
  padding: 2rem 2rem;
  background-color: var(--main-color);
  border: none;
  outline: none;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const HR = styled.hr`
  width: 100%;
  border-collapse: collapse;
  color: red;
`;

export const DateInput = styled.input`
  width: 100%;
  font-size: 1.6rem;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  outline: none;
  /* border:1px solid #333 ; */
  border: ${(props) => (props.page ? 'none' : '1px solid #333')};
  font-family: var(--primary-font);
  font-weight: 600;
  background-color: ${(props) => props.background || ''};
`;
