import styled from "styled-components";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 height: 100%;
`;

export const MainWrapper = styled.div`
 display: flex;
 flex-direction: column;
 gap: 64px;
 align-items: center;
 background-color: ${({ theme }) => theme.colors.moviePage.background};
 margin-bottom: 64px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  margin-bottom: 16px;
 }
`;

export const Header = styled.div`
 background-image: ${({ backdroppath }) => `url(${backdroppath})`};
 background-size: cover;
 background-position: center;
 max-width: 1368px;
 width: 100%;
 height: 770px;
 display: flex;
 justify-content: center;
 align-items: center;
 position: relative;
 box-shadow: inset 8px -3px 100px 74px rgba(0, 0, 0, 1);

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
  height: 400px;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  height: 200px;
 }
`;

export const Wrapper = styled.div`
 max-width: 1400px;
 padding: 0 16px 32px 16px;
 margin: 0 auto;
 

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  gap: 16px;
 }
`;

export const Section = styled.section`
 display: grid;
 justify-content: center;
 grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
 gap: 24px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
  grid-template-columns: repeat(5, minmax(150px, 1fr));
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  grid-template-columns: repeat(4, minmax(110px, 1fr));
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  grid-template-columns: repeat(3, minmax(110px, 1fr));
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  grid-template-columns: repeat(2, minmax(110px, 1fr));
 }
`;

export const SectionTitle = styled.h2`
 margin: 64px 0 32px 0;
 line-height: 120%;
 font-size: 36px;
 font-weight: 600;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 20px;
  margin: 21px 0 12px 0;
 }
`;

export const RatingTopContent = styled.div`
 display: flex;
 position: absolute;
 bottom: 10px;
 left: 1%;
 flex-direction: column;
 color: ${({ theme }) => theme.colors.moviePage.headerText};
 margin-bottom: 56px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xl}) {
  left: 5%;
  margin-bottom: 20px;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
  margin-bottom: 8px;
 }
`;

export const LongTitle = styled.h1`
 font-size: 64px;
 margin: 0;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  font-size: 50px;
 }

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
  font-size: 24px;
 }
`;

export const Rating = styled.div`
 margin-top: 24px;
 font-size: 30px;
 font-weight: 500;
 display: flex;
 align-items: flex-end;
 max-width: 170px;
 flex-wrap: wrap;
 row-gap: 16px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  font-size: 14px;
  margin-top: 8px;
  flex-wrap: nowrap;
 }
`;

export const IconStar = styled(StarIcon)`
 margin-right: 8px;
 width: 40px;
 height: 40px;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  height: 16px;
  width: 16px;
 }
`;

export const Rate = styled.span`
 font-size: 16px;
 font-weight: 500;
 margin-right: 12px;
 margin-left: 8px;
 color: white;
 align-items: flex-end;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  display: none;
 }
`;

export const Votes = styled.span`
 font-size: 16px;
 font-weight: 400;

 @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
  font-size: 10px;
  margin-left: 7px;
 }
`;

export const ContainerRateText = styled.div`
 align-items: flex-end;
`;