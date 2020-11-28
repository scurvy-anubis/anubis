import React, { memo } from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';

interface VideoLoopProps {
	videoName: string;
}

export const VideoLoop = memo(({ videoName }: VideoLoopProps) => {
	const useStyles = makeStyles((/*theme*/) => ({
		root: {
			position: 'absolute',
			left: 0,
			top: 0,
			minWidth: '100vw',
			minHeight: '100vh',
			overflow: 'hidden',
			pointerEvents: 'none',
		},
		video: {
			position: 'absolute',
			width: '177.77777778vh' /* 100 * 16 / 9 */,
			minWidth: '100vw',
			height: '100vh',
			minHeight: '56.25vw' /* 100 * 9 / 16 */,
		},
	}));
	const classes = useStyles();

	return (
		<Box id="VideoLoop" className={classes.root}>
			<video autoPlay={true} loop={true} muted={true} playsInline={true} className={classes.video}>
				<source type="video/mp4" src={`./videos/${videoName}.mp4`} />
			</video>
		</Box>
	);
});
