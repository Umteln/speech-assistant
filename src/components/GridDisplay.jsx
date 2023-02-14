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
						lg={4}
						md={6}
						xs={8}
						sx={{
							justifyContent: 'center',
							alignItems: 'center',
							margin: 'auto',
						}}
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
