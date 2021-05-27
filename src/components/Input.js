import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Input(props) {
    const classes = useStyles();
    const { click, checked } = props;

    return (
        <FormControl component="fieldset">
            <FormGroup color="white" aria-label="position" row>
                <FormControlLabel
                    id="myCheck"
                    value="start"
                    control={<Checkbox color="primary" />}
                    label="Completed?"
                    labelPlacement="top"
                    onClick={() => click()}
                    checked={checked}
                />
            </FormGroup>
        </FormControl>
    );
}