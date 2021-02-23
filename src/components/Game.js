import styled from 'styled-components'
import { motion } from 'framer-motion'

import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/detailAction'
import { Link } from 'react-router-dom'

export default function Game({ data }) {
	//Load detail
	const dispatch = useDispatch()

	const loadDetailhandler = () => {
		dispatch(loadDetail(data.id, data.short_screenshots))
	}

	return (
		<StyledGame onClick={loadDetailhandler}>
			<Link to={`game/${data.id}`}>
				<h3>{data.name}</h3>
				<p>{data.released}</p>
				<img src={data.background_image} alt={data.name} />
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

	h3 {
		font-size: 1.3rem;
		color: #333;
		padding: 1.5rem 1rem;
		height: 90px;
	}

	p {
		font-size: 1.2rem;
		line-height: 200%;
		color: #696969;
	}

	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
	}
`
