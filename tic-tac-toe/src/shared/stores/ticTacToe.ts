/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-ignore
import { TicTacToe } from 'tic-tac-toe'
import { create } from "zustand";
import { IField } from '../types/field';
import { IWinner } from '../types/winner';

const genBoard = (arr:string[][]) => arr.map((row, rowIndex) => {
    return row.map((field, colIndex) => {
        const coords:IField['coords'] = [rowIndex + 1, colIndex + 1]
        return {
            id: +`${coords[0]}${coords[1]}`,
            coords, 
            player: field ? field : undefined
        }
    })
})

export const useTicTacToe = create<{
    board: IField[][]
    currentPlayer: string
    instance:TicTacToe
    winners: IWinner[]
    play: VoidFunction
    print: (coords:IField['coords']) => void
    reset: VoidFunction
    cleanWinners: VoidFunction
    printResult: {
        error: {
            status:boolean,
            msg:string
        }
        tickResult: unknown
    } | undefined
}>((set) => {
    const setBoard = (board:string[][]) => {
        set({
            board: genBoard(board)
        })
    }
    const setCurrentPlayer = (player:string) => {
        set({
            currentPlayer: player
        })
    }
    const setWinners = (winners:IWinner[]) => {
        set({winners})
        localStorage.setItem('winners', JSON.stringify(winners))
    }
    const addWinner = (winner:IWinner) => {
        set(state => {
            const winners = [...state.winners, winner]
            localStorage.setItem('winners', JSON.stringify(winners))
            return {
                winners
            }
        })
    }
    const instance = new TicTacToe({
		on: {
			setBoard(instance:TicTacToe) {
                setBoard(instance.board)
			},
			setPlayer(instance:TicTacToe) {
				setCurrentPlayer(instance.currentPlayer)
			},
            draw(instance:TicTacToe, data: {
                next: VoidFunction
            }) {
                addWinner({
                    date: new Date,
                    board: genBoard(instance.board),
                    player: '<3'
                })
                data.next()
            },
            win(_instance:TicTacToe, data:{
                winner: string,
                board: string[][]
                next: VoidFunction
            }) {
                data.next()
                addWinner({
                    date: new Date,
                    board: genBoard(data.board),
                    player: data.winner
                })
            }
		}
	})
    return {
        board: [],
        currentPlayer: '',
        instance,
        printResult: undefined,
        winners: JSON.parse(localStorage.getItem('winners') || JSON.stringify([])),
        play: () => {
            instance.play()
            instance.reset()
            setBoard(instance.board)
            setCurrentPlayer(instance.currentPlayer)
        },
        print: ([row, col]) => {
            set({
                printResult: instance.print([row, col])
            }) 
        },
        cleanWinners() {
            setWinners([])
        },
        reset() {
            instance.reset()
            instance.play()
        }
    }
})