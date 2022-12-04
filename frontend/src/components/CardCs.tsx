import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cs from "../images/cs.png";
import { CardActionArea } from '@mui/material';

export default function CardCs() {
    return (
        <Card sx={{ maxWidth: 200, maxHeight: 250}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    sx={{ height: 200, width:200 }}
                    image={cs}
                />
                <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="div">
                        C#
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
        </Card>
    );
}