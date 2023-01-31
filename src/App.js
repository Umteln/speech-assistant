import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import { useSpeechSynthesis } from 'react-speech-kit';

function App() {
	const [show, setShow] = useState(false);
	const { speak } = useSpeechSynthesis();
	const [text, setText] = useState();

	const handleSpeech = () => {
		speak({ text: text });
	};

	return (
		<div className='App'>
			<h1> Speech Assistant</h1>
			<h3>Click An Image Below To Get Started</h3>
			<Main
				handleSpeech={handleSpeech}
				setTextMessage={setText}
			/>
		</div>
	);
}

export default App;
