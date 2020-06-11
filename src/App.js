import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core'
import Header from './components/Header';

function App() {
  

  return (
    <>
      <Grid container direction='column'>
        <Grid item>
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={8}>
              This is where the content will be
            </Grid>
          <Grid item xs={0} sm={2} />
        </Grid>
      </Grid>

    
    </>
  );
}

export default App;
