import { Grid } from "@mui/material"
import { CardHeaders } from "../../components/CardHeader"

export const Book=()=>{
    return(
        <Grid sx={{p:"25px"}}>
            <CardHeaders status={'save'} link={`/admin-dashboard/add-book`} name={"Kitoblar Saxifasi"}/>
        </Grid>
    )
}