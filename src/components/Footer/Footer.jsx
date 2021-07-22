import React from 'react';
import { Container, Grid, Box, Link } from '@material-ui/core';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

import './styles.css';

const Footer = () => {
	return (
		<footer style={{ paddingTop: '20px' }}>
			<Box className='bg' color="white" px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}>
				<Container maxWidth="lg" className='links'>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={4}>
                        <Box borderBottom={2}>
								<h1>Socials</h1>
							</Box>
                            
							
							<br />
							<Box>
								<Link href="https://www.linkedin.com/in/nnasr/" color="inherit">
									<FaLinkedin/> LinkedIn
								</Link>
							</Box>
							<br />

							<Box>
								<Link href="https://twitter.com/Nader_Nasr" color="inherit">
									<FaTwitter/> Twitter
								</Link>
							</Box>
							<br />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Box borderBottom={2}>
								<h1>Technologies</h1>
							</Box>
							<br />
							<Box>
								<Link href="https://reactjs.org/" color="inherit">
									React Js
								</Link>
							</Box>
							<br />

							<Box>
								<Link href="https://commercejs.com/" color="inherit">
									Commerce Js
								</Link>
							</Box>
                            <br />
							<Box>
								<Link href="https://modelviewer.dev/" color="inherit">
									Google Model Viewer
								</Link>
							</Box>
                            <br />
							<Box>
								<Link href="https://stripe.com/" color="inherit">
									Stripe
								</Link>
							</Box>
							<br />
							<Box>
								<Link href="https://material-ui.com/" color="inherit">
									Material UI
								</Link>
							</Box>
							<br />
							<Box>
								<Link href="https://www.blender.org/" color="inherit">
									Blender
								</Link>
							</Box>
							
						</Grid>

						<Grid item xs={12} sm={4}>
							<Box borderBottom={2}>
								<h1>About</h1>
							</Box>
							<br />
							<Box>
								<Link href="https://www.nadernasr.ca/" color="inherit">
									Personal Website
								</Link>
							</Box>
                            <br />
							<Box>
								<Link href="https://www.wallpaperflare.com" color="inherit">
									Images Resources
								</Link>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</footer>
	);
};

export default Footer;
