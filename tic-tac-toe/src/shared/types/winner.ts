import { IField } from "./field"

export interface IWinner {
    date:Date,
    player:string
    board: IField[][]
}