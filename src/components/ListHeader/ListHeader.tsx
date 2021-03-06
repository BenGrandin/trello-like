import React, { FC, useState } from 'react';
import './ListHeader.scss';


interface InputTitleProps {
	titleValue: string;
	className?: string;
	placeHolder?: string;
	onBlur?: () => void;
}


/*
	ToDo:
	 - Change input style,
 */

export const ListHeader: FC<InputTitleProps> = ({ titleValue, placeHolder, className = '', onBlur }) => {
	const [tempTitle, setTempTitle] = useState(titleValue);
	const [title, setTitle] = useState(titleValue);
	const [showInput, setShowInput] = useState(false);

	const onSubmitForm = () => {
		setShowInput(false);
		setTitle(tempTitle);
	};

	const onInputBlur = () => {
		onSubmitForm();
		if( onBlur ) {
			onBlur();
		}
	};

	const onInputChange: ({ target: { value } }: { target: { value: string } }) => void = ({ target: { value } }) => {
		setTempTitle(value);
	};

	const onEscapeInput = (e: any) => {
		if( e.key === 'Escape' ) {
			setTempTitle(title);
			setShowInput(false);
		}
		e.stopPropagation();
	};

	return <div className={`list-header ${className}`}>
		{ !showInput && <h4 className="list-title" onClick={() => setShowInput(true)}>{title}</h4>}

		{
			showInput &&
            <form onSubmit={onSubmitForm}>
                <input className='list-title'
                       value={tempTitle}
                       placeholder={placeHolder}
                       onChange={onInputChange}
                       autoFocus
                       onBlur={onInputBlur}
                       onKeyDown={onEscapeInput}
                />
            </form>
		}
	</div>;
};


