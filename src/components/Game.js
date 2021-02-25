import styled from 'styled-components'
import { motion } from 'framer-motion'

import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link } from 'react-router-dom'

import { smallImage } from '../utils'

export default function Game({ data }) {
	//Load detail handler
	const dispatch = useDispatch()

	const loadDetailhandler = () => {
		document.body.style.overflow = `hidden`
		dispatch(loadDetail(data.id, data.short_screenshots))
	}

	return (
		<StyledGame onClick={loadDetailhandler}>
			<Link to={`game/${data.id}`}>
				<h3>{data.name}</h3>
				<p>{data.released}</p>
				<img src={smallImage(data.background_image, 640)} alt={data.name} />
			</Link>
		</StyledGame>
	)
}

const StyledGame = styled(motion.div)`
	min-height: 30vh;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
	text-align: center;
	border-radius: 1rem;
	cursor: pointer;
	overflow: hidden;

	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`
