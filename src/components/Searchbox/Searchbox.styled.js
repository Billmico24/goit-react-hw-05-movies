import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Container = styled.div`
width: 295px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
/* width: 300px; */
  display: inline-flex;
  position: relative;
  text-transform: uppercase;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  width: 250px;
  border-radius: 4px;
  border-width: 2px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  bottom: 40px;
  cursor: pointer;
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  height: 30px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  min-height: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
`;