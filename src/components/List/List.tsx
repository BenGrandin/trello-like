import React, { EventHandler, FC } from 'react';
import { ListHeader } from '../ListHeader/ListHeader';
import './List.scss';
import { Card } from '../Card/Card';
import { InputAdder } from '../InputAdder/InputAdder';


interface ListProps {
	title: string;
	toggleModal: EventHandler<any>
}


const List: FC<ListProps> = ({ title, toggleModal }) => {

	return (
		<div className="list">
			<ListHeader titleValue={title}/>

			<div className="list-card-container">
				{
					[{ title: 'Card 1' }, { title: 'Card 2' }]
						.map(({ title }) => <Card toggleModal={toggleModal} key={title} title={title}/>)
				}
			</div>

			<InputAdder>Ajouter une carte</InputAdder>
		</div>);

};

export { List };