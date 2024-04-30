import React from "react";
import styled from "styled-components";
import Viewer from "../../../components/ThreeDViewer";
interface PartitionProps {
  color: string;
}

const MainContainer = styled.div`
  box-shadow: 6px 6px 16px rgba(127, 255, 212, 0.4),
    -6px -6px 16px rgba(255, 255, 255, 0.6);
  background-color: rgba(127, 255, 212, 0.4);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 400px;
`;

const ImageContainer = styled.div`
  position: relative;
  grid-column: 2 / span 1;
  grid-row: 2 / span 1;
`;

const TopImage = styled.div`
  position: absolute;
  top: -50px;
  left: -50px;
  right: -50px;
  bottom: -50px;
  object-fit: cover;
  box-shadow: 6px 6px 16px rgba(127, 255, 212, 0.4),
    -6px -6px 16px rgba(255, 255, 255, 0.6);
`;

const Partition = styled.button<PartitionProps>`
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: transform 0.2s ease;
  cursor: pointer;
  border: 1;
  border-color: white;
  box-shadow: 6px 6px 16px rgba(127, 255, 212, 0.4),
    -6px -6px 16px rgba(255, 255, 255, 0.6);

  &:hover {
    transform: scale(1.05);
    border-color: white;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Partition1 = styled.button<PartitionProps>`
  position: relative;
 
  background-color: #ccc;
  cursor: pointer;

  
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: transform 0.2s ease;
  cursor: pointer;
  border: 1;
  border-color: white;
  box-shadow: 6px 6px 16px rgba(127, 255, 212, 0.4),
    -6px -6px 16px rgba(255, 255, 255, 0.6);
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: -10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 35px 10px;
    border-color: transparent transparent transparent #ccc;
  }
  &:hover {
    transform: scale(1.05);
    border-color: white;
    background-color: #aaa;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ProfilePost: React.FC = () => {
  return (
    <MainContainer>
      <Partition color="" onClick={() => console.log("Navigate to side 1")}>
        Our New Stove
      </Partition>
      <Partition color="" onClick={() => console.log("Navigate to side 2")}>
      Stove Top
      </Partition>
      <Partition1 color="" onClick={() => console.log("Navigate to side 3")}>
      Stove Body
      </Partition1>
      <Partition color="" onClick={() => console.log("Navigate to side 4")}>
      Ventilation System
      </Partition>
      <Partition color="" onClick={() => console.log("Navigate to side 1")}>
      Safety Features
      </Partition>
      <Partition color="" onClick={() => console.log("Navigate to side 2")}>
      Fuel Chamber
      </Partition>
      <Partition color="" onClick={() => console.log("Navigate to side 3")}>
      Base Structure
      </Partition>
      <Partition color="" onClick={() => console.log("Navigate to side 4")}>
      Stove Materials
      </Partition>
      <ImageContainer>
        <TopImage>
          <Viewer />
        </TopImage>
      </ImageContainer>
    </MainContainer>
  );
};

export default ProfilePost;
