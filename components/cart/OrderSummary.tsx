import { Grid, Typography } from "@mui/material"


export const OrderSummary = () => {
  return (
    <Grid container>
        
        <Grid item xs={6}>
            <Typography>Cantidad de Productos</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>3 items</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>SubTotal</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{ `$${ 200.000 }` }</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>Iva (15%)</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            <Typography>{ `$${ 20.000 }` }</Typography>
        </Grid>

        <Grid item xs={6} sx={{ mt:2 }}>
            <Typography variant="subtitle1">Total:</Typography>
        </Grid>
        <Grid item xs={6} sx={{ mt:2 }} display='flex' justifyContent='end'>
            <Typography variant="subtitle1">{ `$${ 220.000 }` }</Typography>
        </Grid>

    </Grid>
  )
}
