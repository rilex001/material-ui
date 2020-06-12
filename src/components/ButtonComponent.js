import React from 'react'
import Button from '@material-ui/core/Button';

function ButtonComponent() {
    return (
        <div>
            <Button variant="contained">Default</Button>
    <Button onClick={() => { alert("clicked") }} variant="contained" color="primary">
      Primary
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Button variant="contained" disabled>
      Disabled
    </Button>
    <Button variant="contained" color="primary" href="#contained-buttons" size='large'>
      Link
    </Button>
    <Button variant="contained" color="secondary">
      Red color 
    </Button>
        </div>
    )
}

export default ButtonComponent
