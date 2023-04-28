import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Text = styled.p`
  font-size: ${(props) => props.fontsize || "1.5rem"};
  color: ${(props) => props.color || "1.5rem"};
  font-weight: ${(props) => props.fontweight || "1.5rem"};
  margin: ${(props) => props.margin || "0"};
  font-family: ${(props) => props.fontfamily || "var(--primary-font)"};
  line-height: ${(props) => props.lineheight || "2.5rem"};
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontsize || "1.5rem"};
  color: ${(props) => props.color || "1.5rem"};
  font-weight: ${(props) => props.fontweight || "1.5rem"};
  margin: ${(props) => props.margin || "0"};
  ${"" /* padding:2rem ; */}
`;

const Container = styled.div`
  width: 100%;
  /* padding: 0rem 1rem; */
  position: relative;
  ${"" /* background-color:#eee ; */}
`;

const HeaderContainer = styled.div`
  width: 100%;
  ${"" /* min-height:5rem ; */}
  /* background-color:var(--fourth-blue); */
  border: 1px solid #333;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  :hover {
    cursor: pointer;
  }
`;

const BodyContainer = styled.div`
  width: 90%;
  ${"" /* min-height:30rem ; */}
  background-color:#fff;
  margin: 1.5rem 0;
  border-radius: 1rem;
  padding: 1rem 0;
  border: 1px solid #ccc;
  position: absolute;
  top: 80%;
  left: 5%;
  z-index: 13;
  display: ${(props) => (props.open ? "block" : "none")};
  max-height: 20rem;
  overflow-y: scroll;
  box-shadow: 0px 0px 32px 0px rgba(143, 143, 143, 0.2);
  ::-webkit-scrollbar {
    background-color: #ccc;
    width: 1rem;
    height: 10%;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--fourth-blue);
    border-radius: 0.5rem;
  }
`;

const ItemContainer = styled.div`
  width: 100%;
  ${"" /* background-color: blue; */}
  padding:1rem 2rem;
  margin: 2rem 0;
  transition: all 0.3s;
  :hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;

const PendingLabel = styled.p`
  font-size: 1.4rem;
  font-family: var(--dashboard-font);
  color: #333;
  margin: 0 1rem;
  font-weight: 600;
`;

const DropDown = ({
  dropDownValues,
  currentDropdownVal,
  setCurrentDropdownVal,
}) => {
  const [open, setOpen] = useState(false);
  //   const [currentVal, setCurrentVal] = useState('Select Item');

  const dropDownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <HeaderContainer ref={dropDownRef} onClick={() => setOpen(!open)}>
        <Text fontweight="600" color="#222" fontsize="1.6rem">
          {/* {currentDropdownVal} */}
          {currentDropdownVal.label}
        </Text>
        <IconContainer
          onClick={() => setOpen(!open)}
          fontsize="2rem"
          color="#222"
          margin="0 0 0 auto"
        >
          {open ? <FiChevronUp /> : <FiChevronDown />}
        </IconContainer>
      </HeaderContainer>

      <BodyContainer open={open}>
        {dropDownValues?.length > 0 ? (
          dropDownValues.map((item) => (
            <ItemContainer
              onClick={(e) => {
                setCurrentDropdownVal({
                  label: item.label,
                  value: item.value,
                });
              }}
            >
              <Text fontsize="1.6rem">{item.label} </Text>
            </ItemContainer>
          ))
        ) : (
          <PendingLabel>loading data</PendingLabel>
        )}
      </BodyContainer>
    </Container>
  );
};

export default DropDown;
