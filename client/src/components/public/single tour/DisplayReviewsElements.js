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
  background-color: ${(props) => props.bacgroundcolor || 'none'};
  border-radius: ${(props) => props.borderradius || '0'};
  padding: ${(props) => props.padding || '0'};
`;

export const Section = styled.div`
  width: 100%;
  ${'' /* min-height:30rem ; */}
  display:flex;
  ${'' /* background-color:red ; */}
  padding:3rem 12rem;
`;

export const Container = styled.div`
  width: 60%;
  ${'' /* min-height:100% ; */}
  display:flex;
  flex-direction: column;
  ${'' /* background-color:green ; */}
`;

export const ReviewContainerTopBar = styled.div`
  flex: 0 1 25%;
  background-color: #eee;
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
`;

export const ReviewRowContainer = styled.div`
  flex: 0 1 40%;
  ${'' /* background-color:red ; */}
  margin:1rem 0;
  display: flex;
  padding: 2rem 0;

  position: relative;

  ::after {
    position: absolute;
    bottom: 0;
    left: 5%;
    width: 90%;
    height: 1px;
    background-color: #ccc;
    content: '';
  }
`;

export const ReviewRowContainerLeft = styled.div`
  flex: 0 1 20%;
  ${'' /* background-color:green ; */}
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ReviewRowContainerRight = styled.div`
  flex: 1;
  ${'' /* background-color:blue ; */}
  display:flex;
  flex-direction: column;
`;

export const AvatarContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #eee;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ReviewStarsContainer = styled.div`
  flex: 0 1 20%;
  ${'' /* background-color:red ; */}
  width:30%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 0 1rem;
`;

export const ReviewDateRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${'' /* background-color:green ; */}
  padding:2rem 0;
`;
