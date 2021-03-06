import axios from 'axios'
import {
	popularGamesURL,
	upcomingGamesURL,
	newGamesURL,
	searchGameUrl,
} from '../api'

export const loadGames = () => async (dispatch) => {
	//FETCH AXIOS
	const popularData = await axios.get(popularGamesURL())
	const upcomingData = await axios.get(upcomingGamesURL())
	const newData = await axios.get(newGamesURL())

	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results,
			newGames: newData.data.results,
		},
	})
}

export const fetchSearched = (gameName) => async (displatch) => {
	const searchedGames = await axios.get(searchGameUrl(gameName))

	displatch({
		type: 'FETCH_SEARCHED',
		payload: {
			searched: searchedGames.data.results,
		},
	})
}
