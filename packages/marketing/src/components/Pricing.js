import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import { 
    Container, 
    Box,
    Button,
    Typography,
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Link } from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
    );
};

const useStyles = makeStyles(theme => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none'
        }
    },

    toolbar: {
        
    },

    toolbarTitle: {

    },

    link: {
        margin: theme.spacing(1, 1.5) 
    },

    heroContent: {
        padding: theme.spacing(8, 0, 6)
    },

    CardHeader: {
        backgroundColor: theme.palette.type === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[700]
    },

    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2)
    },

    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6)
        }
    }
}));

const tiers = [
    {
      title: 'Free',
      price: '0',
      description: [
        '10 users included',
        '2 GB of storage',
        'Help center access',
        'Email support',
      ],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro',
      subheader: 'Most popular',
      price: '15',
      description: [
        '20 users included',
        '10 GB of storage',
        'Help center access',
        'Priority email support',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: '30',
      description: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },
];

const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Resources',
      description: [
        'Resource',
        'Resource name',
        'Another resource',
        'Final resource',
      ],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
];

const Pricing = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container className={classes.heroContent} maxWidth='sm' component='main'>
                <Typography
                    component='h1'
                    variant='h2'
                    align='center'
                    color='textPrimary'
                    gutterBottom
                >
                    Pricing
                </Typography>
                <Typography
                    component='p'
                    variant='h5'
                    align='center'
                    color='textSecondary'
                >
                Quickly build an effective pricing table for your potential customers
                 with this layout. It&apos;s built with default Material-UI components
                 with little customization.
                </Typography>
            </Container>

            <Container component='main' maxWidth='md'>
                <Grid container spacing={5} alignItems='flex-end'>
                    {tiers.map(tier => (
                        <Grid 
                            key={tier.title}
                            item
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader 
                                    className={classes.CardHeader}
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{align: 'center'}}
                                    subheaderTypographyProps={{align: 'center'}}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                />
                                
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography
                                            component='h2'
                                            variant='h3'
                                            color='textPrimary'
                                        >${tier.price}</Typography>
                                        <Typography
                                            variant='h6'
                                            color='textSecondary'
                                        >/mo</Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map(line => (
                                            <Typography 
                                                key={line}
                                                component='li'
                                                variant='subtitle1'
                                                align='center'
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                
                                <CardActions>
                                    <Button 
                                        component={RouterLink}
                                        to='/auth/signup'
                                        color='primary'
                                        fullWidth
                                    >{tier.buttonText}</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container className={classes.footer} maxWidth='md' component='footer'>
                <Grid container spacing={4} justify='space-evenly'>
                    {footers.map(footer => (
                        <Grid key={footer.title}>
                            <Typography
                                className={classes.footer}
                                component='footer'
                                variant='h6'
                            >
                                {footer.title}
                            </Typography>
                            
                            <ul>
                                {footer.description.map(line => (
                                    <li key={line}>
                                        <Link
                                            href='#'
                                            variant='subtitle1'
                                            color='textSecondary'
                                        >{line}</Link>
                                    </li>
                                ))}
                            </ul>
                    </Grid>
                    ))}
                </Grid>

                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
    );
};


export default Pricing;