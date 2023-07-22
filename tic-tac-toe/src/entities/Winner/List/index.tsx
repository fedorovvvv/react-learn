import * as React from 'react';
import { IWinner } from '../../../shared/types/winner';
import Board from '../../Board';
import './index.sass'

interface IWinnerListProps {
    winners:IWinner[]
}

const WinnerList: React.FunctionComponent<IWinnerListProps> = ({winners}) => {
  return (
        <ul className='WinnerList'>
            {winners.map(winner => (
                <li key={+new Date(winner.date)}>
                    <h4>{winner.player}</h4>
                    <small>{new Date(winner.date).toLocaleString()}</small>
                    <Board disabled={true} rows={winner.board} size='s'/>
                </li>
            ))}
        </ul>
  );
};

export default WinnerList;
