import NextLink from 'next/link';

import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/' passHref>
                <Link display='flex' alignItems='center'>
                    <Typography variant='h6'>Deportivo Pereira |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Tienda Matecaña</Typography>
                </Link>  
            </NextLink>

            <Box flex={ 1 } />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <NextLink href='/category/men' passHref>
                    <Link>
                        <Button>Hombre</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/women' passHref>
                    <Link>
                        <Button>Mujer</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/kid' passHref>
                    <Link>
                        <Button>Niño</Button>
                    </Link>
                </NextLink>
            </Box>


            <Box flex={ 1 } />

            <IconButton>
                <SearchOutlined />
            </IconButton>

            <NextLink href="/cart" passHref>
                <Link>
                    <IconButton>
                        <Badge badgeContent={ 2 } color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>
            </NextLink>


            <Button>
                Menú
            </Button>

        </Toolbar>
    </AppBar>
  )
}
