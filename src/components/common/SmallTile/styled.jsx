import styled, { css } from "styled-components";
import { ReactComponent as VideoIcon } from "../../../assets/icons/video.svg";
import { ReactComponent as StarIcon } from "../../../assets/icons/star.svg";

export const Wrapper = styled.div`
	display: grid;
	background-color: ${({ theme }) => theme.colors.tile.background};
	grid-template-rows: auto 1fr;
	padding: 16px;
	box-shadow: ${({ theme }) => theme.properties.tile.boxShadow};
	gap: 16px;
	height: 100%;
	box-shadow: ${({ theme }) => theme.properties.tile.boxShadow};

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		grid-template-rows: 1fr;
		grid-template-columns: auto 1fr;
	}
`;

export const ImageWrapper = styled.div`
	border-radius: 5px;
	background-color: ${({ theme }) => theme.colors.tile.imageWrapper};
	aspect-ratio: 6/9;
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		width: 114px;
		min-width: 114px;
		height: 169px;
		min-height: 169px;
	}
`;

export const StyledVideoIcon = styled(VideoIcon)`
	width: 72px;
	color: ${({ theme }) => theme.colors.tile.background};

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		width: 48px;
	}
`;

export const Image = styled.img`
	border-radius: 5px;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		font-size: 16px;
		font-weight: 500;
		justify-content: start;
	}
`;

export const MovieInfo = styled.div``;

export const TileHeader = styled.header`
	font-size: 22px;
	font-weight: 500;
	line-height: 130%;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		font-size: 16px;
		font-weight: 500;
	}
`;

export const Subtitle = styled.p`
	margin-top: 8px;
	font-size: 16px;
	line-height: 150%;
	color: var(--Darker-grey, #7e839a);

	${({ actorFilmName }) =>
		actorFilmName &&
		css`
			font-size: 33px;
		`};

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		margin-top: 4px;
		font-size: 13px;
		line-height: 130%;
	}
`;

export const Genres = styled.ul`
	margin-top: 8px;
	display: flex;
	list-style: none;
	padding-left: 0px;
	gap: 10px;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		gap: 8px;
	}
`;

export const Genre = styled.li`
	display: flex;
	padding: 8px 16px;
	align-items: center;
	border-radius: 5px;
	background: #e4e6f0;
	font-family: Poppins;
	font-size: 14px;
	line-height: 140%;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		padding: 4px 8px;
		font-size: 10px;
		line-height: 110%;
	}
`;

export const Year = styled.p`
	margin-top: 8px;
	font-size: 16px;
	line-height: 150%;
	color: ${({ theme }) => theme.colors.tile.mutedText};

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		margin-top: 4px;
		font-size: 13px;
		line-height: 130%;
	}
`;

export const Rating = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
	font-size: 16px;
	line-height: 150%;
	margin-top: 16px;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		font-size: 13px;
		line-height: 130%;
		margin-top: 8px;
		gap: 8px;
	}
`;

export const IconStar = styled(StarIcon)`
	width: 24px;
	height: 24px;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
		width: 16px;
		height: 16px;
	}
`;

export const Rate = styled.span`
	font-weight: 600;
`;

export const Votes = styled.span`
	color: ${({ theme }) => theme.colors.tile.mutedText};
`;
