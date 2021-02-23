import axios from 'axios'
import { gameDetailsUrl } from '../api'

export const loadDetail = (id, screens) => async (displatch) => {
	displatch({
		type: 'LOADING_DETAIL',
	})

	const detailData = await axios.get(gameDetailsUrl(id))

	displatch({
		type: 'GET_DETAIL',
		payload: {
			game: detailData.data,
			screens: screens,
		},
	})
}
