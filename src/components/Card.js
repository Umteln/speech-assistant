import React, { useState } from 'react';

const Card = ({ item, handleSpeech }) => {
	const [speaking, setIsSpeaking] = useState(false);

	const handleClick = () => {
		handleSpeech(item.text);
		setIsSpeaking(true);
	};

	return (
		<div
			className='gridItem'
			onClick={handleClick}
		>
			<div
				style={{ backgroundImage: `url(${item.image})`, cursor: 'pointer' }}
				className={speaking ? 'border: 1px solid green' : ''}
			></div>

			<h1>{item.text}</h1>
		</div>
	);
};

export default Card;
