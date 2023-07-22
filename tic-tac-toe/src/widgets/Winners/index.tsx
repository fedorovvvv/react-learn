import * as React from "react";
import WinnerList from "../../entities/Winner/List";
import { useTicTacToe } from "../../shared/stores/ticTacToe";
import './index.sass'

interface IWinnersProps {}

const Winners: React.FunctionComponent<IWinnersProps> = () => {
    const {winners, cleanWinners} = useTicTacToe()
    return (
        <>
            {winners.length && (
                <aside className="Winners">
                    <button className="Winners__button" onClick={() => cleanWinners()}>Clean</button>
                    <WinnerList winners={winners.sort((a,b) => +new Date(b.date) - +new Date(a.date))} />
                </aside>
            )}
        </>
    );
};

export default Winners;
