import React from 'react'
import {Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';


const Cats = ({filterTagged}) => {
    return (
        <FormControl component="fieldset" >
      <FormLabel component="legend" row style={{paddingLeft: '20px'}}>Categories</FormLabel>
      <FormGroup aria-label="position" row style={{position: 'relative', paddingLeft: '20px'}}>
        
        <button onClick={() => filterTagged('art')}>
          Poster
          
        </button>
        <button onClick={() => filterTagged('Status')}>
          Status
          
        </button>
        
        
      </FormGroup>
    </FormControl>
    )
}

export default Cats
