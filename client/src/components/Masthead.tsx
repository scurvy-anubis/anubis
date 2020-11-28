import React, {memo} from 'react';
import {Link, useLocation} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar/AppBar';
import blueGrey from '@material-ui/core/colors/blueGrey';
import Box from '@material-ui/core/Box/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export const Masthead = memo(() => {
	const useStyles = makeStyles((theme) => ({
		root: {
			position: 'relative',
			height: '100%',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-between',
			alignItems: 'center',
			backgroundColor: 'transparent',
		},
		content: {},
		navLinks: {},
		list: {
			height: 80,
			display: 'flex',
			alignItems: 'center',
		},
		listItem: {
			flex: '0 0 auto',
			width: 'auto',
			height: '1.5rem',
			borderLeft: `1px solid ${theme.palette.divider}`,
			'&:nth-of-type(1)': {
				paddingLeft: 0,
				borderLeft: 'none',
			},
		},
		currentPath: {
			textDecoration: 'none',
			userSelect: 'none',
			color: `${blueGrey[100]}`,
			'&:hover': {
				color: `${blueGrey[100]}`,
			},
			pointerEvents: 'none',
		},
		link: {
			textDecoration: 'none',
			userSelect: 'none',
			color: `${blueGrey[400]}`,
			'&:hover': {
				color: `${blueGrey[300]}`,
			},
		},
	}));
	const classes = useStyles();

	const pageLinks = [
		{text: 'Home', to: '/'},
		{text: 'Games', to: '/games'},
		{text: 'About', to: '/about'},
	];

	const myLocation = useLocation();

	return (
	<AppBar id="Masthead" position="static" className={classes.root}>
		<Box className={classes.content}>
			<Box className={classes.navLinks}>
				<List className={classes.list}>
					{pageLinks.map((link, index) => (
					<ListItem key={index} className={classes.listItem}>
						<Link to={link.to} className={link.to === myLocation.pathname ? classes.currentPath : classes.link}>
							<ListItemText primary={link.text} />
						</Link>
					</ListItem>
					))}
				</List>
			</Box>
		</Box>
	</AppBar>
	);
});
