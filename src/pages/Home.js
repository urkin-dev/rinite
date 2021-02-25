import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { loadGames } from '../actions/gamesAction'
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'

import styled from 'styled-components'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import { useLocation } from 'react-router-dom'

export default function Home() {
	const location = useLocation()
	const pathId = location.pathname.split('/')[2]
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(loadGames())
	}, [dispatch])

	const { popular, newGames, upcoming, searched } = useSelector(
		(state) => state.games
	)

	return (
		<GameList>
			{pathId && <GameDetail />}
			{searched.length ? (
				<div className="searched">
					<h2 className="section-title">Searched games</h2>
					<Games>
						{searched.map((game) => (
							<Game data={game} key={game.id} />
						))}
					</Games>
				</div>
			) : (
				''
			)}
			<h2 className="section-title">Upcoming games</h2>
			<Games>
				{upcoming.map((game) => (
					<Game data={game} key={game.id} />
				))}
			</Games>
			<h2 className="section-title">Popular games</h2>
			<Games>
				{popular.map((game) => (
					<Game data={game} key={game.id} />
				))}
			</Games>
			<h2 className="section-title">New games</h2>
			<Games>
				{newGames.map((game) => (
					<Game data={game} key={game.id} />
				))}
			</Games>
		</GameList>
	)
}

const GameList = styled(motion.div)`
	padding: 0rem 5rem;

	h2 {
		font-size: 2.5rem;
		padding: 3rem 0rem;
	}
`
const Games = styled(motion.div)`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-column-gap: 3rem;
	grid-row-gap: 5rem;
`
