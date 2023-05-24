import styled from "styled-components";
import { mobile } from "../responsive";
import {categories} from "../data.js";
import CategoryItem from "./CategoryItem";


const Container = styled.div`
display:flex;
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const Categories  = () => {
  return (
    <Container>
      {/*
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
      */}
      {categories.map(item=>(
        <CategoryItem item={item}/>
      ))}
      <Info>
        
        
      </Info>
    </Container>
  );
};

export default Categories;