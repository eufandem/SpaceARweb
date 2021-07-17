import React, {useState, useEffect}from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import {useForm, FormProvider} from 'react-hook-form'
import FormInput from './CustomTextField'
import {commerce} from '../../lib/commerce'
import {Link} from 'react-router-dom'

const AddressForm = ({checkoutToken, next}) => {
    const [ShippingCountries, setShippingCountries] = useState([])
    const [ShippingCountry, setShippingCountry] = useState('')
    const [ShippingSubdivisions, setShippingSubdivisions] = useState([])
    const [ShippingSubdivion, setShippingSubdivision] = useState('')
    const [ShippingOptions, setShippingOptions] = useState([])
    const [ShippingOption, setShippingOption] = useState('')

    const methods = useForm();
    //object to array
    const countries = Object.entries(ShippingCountries).map(([code, name]) => ({id:code, label:name}))
    const subdivisions = Object.entries(ShippingSubdivisions).map(([code, name]) => ({id:code, label:name}))
    const options = ShippingOptions.map((shipOpt) =>({id: shipOpt.id, label: `${shipOpt.description} - (${shipOpt.price.formatted_with_symbol})`}) )

    
    // console.log(options)
    // console.log(countries)

    const fetchShippingCountries = async(checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId)
        //console.log(countries) shipped to countries
        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    }

    const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
        //console.log(subdivisions)

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };
    

    const fetchShippingOptions = async(checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region})
        setShippingOptions(options)
        setShippingOption(options[0].id)
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [])

    useEffect(() => {
        if(ShippingCountry) fetchSubdivisions(ShippingCountry)
    }, [ShippingCountry])

    useEffect(() => {
        
        if(ShippingSubdivion) fetchShippingOptions(checkoutToken.id, ShippingCountry, ShippingSubdivion)
    }, [ShippingSubdivion])

    return (
        <>
         <Typography variant="h6" gutterBottom>Shipping Address</Typography>
         <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => next({ ...data, ShippingCountry, ShippingSubdivion, ShippingOption }) )}>
                <Grid container spacing={3}>
                    <FormInput required name='firstName' label='First Name'/>
                    <FormInput required name='lastName' label='Last Name'/>
                    <FormInput required name='address1' label='Address'/>
                    <FormInput required name='email' label='E-mail'/>
                    <FormInput required name='city' label='City'/>
                    <FormInput required name='postalCode/zip' label='Postal Code/ZIP Code'/>
                    
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Country</InputLabel>
                        <Select value={ShippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                        {countries.map((country) => (
                            <MenuItem key={country.id} value={country.id}>
                                {country.label}
                            </MenuItem>
                            ))}
                        </Select>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Subdivision</InputLabel>
                        <Select value={ShippingSubdivion} fullWidth onChange={(e) => setShippingSubdivisions(e.target.value)}>
                        {subdivisions.map((subdivision) => (
                            <MenuItem key={subdivision.id} value={subdivision.id}>
                                {subdivision.label}
                            </MenuItem>
                            ))}
                        </Select>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Options</InputLabel>
                        <Select value={ShippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                        {options.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.label}
                            </MenuItem>
                            ))}
                        </Select>
                    </Grid>

                </Grid>
                <br />  
                <br />
                <br />

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button component={Link} to="/cart" variant='outlined' color="secondary">Back to cart</Button>
                        <Button type="submit" color="primary" variant='contained'>Proceed to Payment</Button>

                </div>
            </form>
         </FormProvider>   
        </>
    )
}

export default AddressForm
