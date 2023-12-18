import styled from "styled-components";
import { ReactComponent as person } from "../../../assets/icons/person.svg";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  transition: 1s;
  display: grid;
  max-height: 450px;


  &:hover {
    box-shadow: -1px 2px 7px 8px rgba(148, 255, 249, 1);
  }
`;

export const Wrapper = styled.div`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.tile.background};
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 16px;
  gap: 12px;
  height: 100%;
  width: 100%;
  box-shadow: ${({ theme }) => theme.properties.tile.boxShadow};
`;

export const PersonIcon = styled(person)`
  width: 72px;
  height: 72px;
`;

export const ImageWrapper = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.tile.imageWrapper};
  aspect-ratio: 6/9;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Character = styled.div`
  overflow: hidden;
`;

export const Name = styled.p`
  font-size: 22px;
  text-align: center;
  font-weight: 500;
  line-height: 130%;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: 20px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 16px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 12px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 10px;
  }
`;

export const FilmName = styled.p`
  color: ${({ theme }) => theme.colors.tile.mutedText};
  font-size: 18px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: 20px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 16px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    font-size: 12px;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 10px;
  }
`;
