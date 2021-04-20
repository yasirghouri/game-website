import React, { ReactElement } from 'react'
import axios from 'axios'
import GameListRender from './GameList.render'

const GameList = (): ReactElement => {
	return (
		<div>
			<GameListRender />
		</div>
	)
}

export default GameList
