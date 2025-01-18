

import{ AppBar, Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)`
     background: #060606;
     height: 9vh;
`
const Header = () => {
    return (
       <Container>
           <Toolbar>
            Hello World!
           </Toolbar>
       </Container>
    )
}

export default Header;