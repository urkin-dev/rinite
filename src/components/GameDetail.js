import styled from 'styled-components'
import { motion } from 'framer-motion'

import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { smallImage } from '../utils'

//Icons
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

export default function GameDetail() {
	const history = useHistory()

	const { game, screens, isLoading } = useSelector((state) => state.detail)

	//Exit detail
	const exitDetailHandler = (e) => {
		const el = e.target

		if (el.classList.contains('card-shadow')) {
			document.body.style.overflow = `auto`
			history.push('/')
		}
	}

	//Get platform image
	const getPlatform = (platform) => {
		if (platform.includes('PlayStation')) {
			return playstation
		} else if (platform.includes('Xbox')) {
			return xbox
		} else if (platform === 'PC') {
			return steam
		} else if (platform === 'Nintendo Switch') {
			return nintendo
		} else if (platform.includes('OS')) {
			return apple
		} else {
			return gamepad
		}
	}

	//Get stars
	const getRating = () => {
		const stars = []
		const rating = Math.floor(game.rating)

		for (let i = 0; i <= 5; i++) {
			if (i <= rating) {
				stars.push(<img alt="star" key={i} src={starFull}></img>)
			} else {
				stars.push(<img alt="star" key={i} src={starEmpty}></img>)
			}
		}

		return stars
	}

	return (
		<>
			{!isLoading ? (
				<CardShadow className="card-shadow" onClick={exitDetailHandler}>
					<Detail>
						<Stats>
							<div className="rating">
								<h3>{game.name}</h3>
								{getRating()}
							</div>
							<Info>
								<h3>Platforms</h3>
								<Platforms>
									{game.platforms.map((data) => (
										<img
											src={getPlatform(data.platform.name)}
											alt={data.platform.name}
											key={data.platform.id}
										/>
									))}
								</Platforms>
							</Info>
						</Stats>
						<Media>
							<img
								src={smallImage(game.background_image, 1280)}
								alt="background"
							/>
						</Media>
						<Description>
							<p>{game.description_raw}</p>
						</Description>
						<div className="gallery">
							{screens.map((screen) => (
								<img
									key={screen.id}
									src={smallImage(screen.image, 1280)}
									alt="screen"
								/>
							))}
						</div>
					</Detail>
				</CardShadow>
			) : (
				<Preloader />
			)}
		</>
	)
}

const CardShadow = styled(motion.div)`
	width: 100%;
	min-height: 100vh;
	overflow-y: scroll;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 5;
	scrollbar-width: thin;
	background: rgba(0, 0, 0, 0.4);
	scrollbar-color: #ff7676 #fff;

	&::-webkit-scrollbar {
		width: 0.5rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #ff7676;
	}

	&::-webkit-scrollbar-track {
		background: white;
	}
`

const Detail = styled(motion.div)`
	width: 80%;
	border-radius: 1rem;
	padding: 2rem 5rem;
	background: white;
	position: absolute;
	left: 10%;
	color: black;
	z-index: 10;

	img {
		width: 100%;
	}

	h3 {
		padding: 1.5rem 0;
	}
`

const Stats = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	img {
		width: 1.3rem;
		height: 1.3rem;
		display: inline;
	}
`

const Info = styled(motion.div)`
	text-align: center;
`
const Platforms = styled(motion.div)`
	display: flex;
	justify-content: space-evenly;

	img {
		margin-left: 3rem;
	}
`

const Media = styled(motion.div)`
	margin-top: 5rem;
	img {
		width: 100%;
	}
`

const Description = styled(motion.div)`
	margin: 5rem 0rem;
`

const Preloader = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.404);
	width: 100%;
	height: 100vh;
	pointer-events: none;
`
