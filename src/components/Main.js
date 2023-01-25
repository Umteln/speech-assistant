import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import GridDisplay from './GridDisplay.jsx';

const Main = () => {
	const { speak } = useSpeechSynthesis();
	const [text, setText] = useState();

	const handleSpeech = (text) => {
		speak({ text: text });
	};

	return (
		<div>
			<GridDisplay
				text={text}
				speak={speak}
				setText={setText}
				handleSpeech={handleSpeech}
			/>
		</div>
	);
};

export default Main;
