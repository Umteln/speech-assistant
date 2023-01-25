import { Grid } from '@mui/material';
import React from 'react';
import Card from './Card';
import { data } from '../data.js';

const GridDisplay = ({ handleSpeech }) => {
	return (
		<Grid
			container
			spacing={1}
		>
			{data.map((item, index) => {
				return (
					<Grid
						item
						xs={4}
						key={index}
					>
						<Card
							item={item}
							handleSpeech={handleSpeech}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default GridDisplay;
