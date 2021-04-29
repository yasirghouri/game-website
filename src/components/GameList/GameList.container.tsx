import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios'
import GameListRender from './GameList.render'
import { API_HOST, API_KEY } from './constants'
import { Game } from 'types'

const GameList = (): ReactElement => {
	const [games, setGames] = useState<Game[]>([])
	const [error, setError] = useState<string>('')
	useEffect(() => {
		axios
			.get('/games', {
				baseURL: `https://${API_HOST}/api`,
				headers: {
					'x-rapidapi-key': API_KEY,
					'x-rapidapi-host': API_HOST,
				},
				params: {
					platform: 'browser',
				},
			})
			.then(res => setGames(res.data))
			.catch(e => setError(e.message))
	}, [])
	return <GameListRender games={games} err={error} />
}

export default GameList
