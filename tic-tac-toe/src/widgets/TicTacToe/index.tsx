/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from "react";
import Board from "../../entities/Board";
//@ts-ignore
import {TicTacToe} from 'tic-tac-toe'
import { IField } from "../../shared/types/field";
import { useTicTacToe } from "../../shared/stores/ticTacToe";
import './index.sass'

interface ITicTacToeWidgetProps {}


const TicTacToeWidget: React.FunctionComponent<ITicTacToeWidgetProps> = () => {

	const {board, play, print, printResult, currentPlayer} = useTicTacToe()
	
	React.useEffect(() => {
		play()
	}, [])

	const handler = {
		onFieldClick(field:IField) {
			print(field.coords)
		}
	}

    return (
		<div className="TicTacToe">
			<h2>{currentPlayer}</h2>
			<Board onFieldClick={handler.onFieldClick} rows={board}/>
			{printResult?.error.msg && (
				<div className="TicTacToe__error">
					<h4>Error!</h4>
					<span>{JSON.stringify(printResult?.error.msg)}</span>
				</div>
			)}
		</div>
	);
};

export default TicTacToeWidget;
