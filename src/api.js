//Base URL
const base_url = `https://api.rawg.io/api/`

//Getting the date
const getCurrentDate = () => {
	let month = new Date().getMonth() + 1
	let day = new Date().getDate()
	let year = new Date().getFullYear()

	if (month < 10) {
		month = `0${month}`
	}

	if (day < 10) {
		day = `0${day}`
	}

	return { day, month, year }
}

const currentDate = `${getCurrentDate().year}-${getCurrentDate().month}-${
	getCurrentDate().day
}`
const lastYear = `${getCurrentDate().year - 1}-${getCurrentDate().month}-${
	getCurrentDate().day
}`
const nextYear = `${getCurrentDate().year + 1}-${getCurrentDate().month}-${
	getCurrentDate().day
}`

//Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${new_games}`

//Game details
export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}`

//Search game
export const searchGameUrl = (gameName) =>
	`${base_url}games?search=${gameName}&page_size=10`
