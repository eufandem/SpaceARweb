import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	root: {
		maxWidth: '100%'
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	cardActions: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	cardContent: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	button: {
		border: '1px solid green',
		backgroundColor: 'white',
		borderRadius: '4px',
		position: 'absolute',
		color: 'black',
		padding: '12px 6px',
		marginTop: '0px',
		marginLeft: '200px',
    fontSize: '13px'
	}
}));
