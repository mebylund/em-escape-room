import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Theme, makeStyles, createStyles } from '@material-ui/core';
// import { createMuiTheme } from '@material-ui/core/styles'



interface State {
    input: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 200,
        },
        color: {
            color: 'green',
        },
        color2: {
            color: 'black'
        },
        color3: {
            backgroundColor: 'green'
        }
    }),
);
// const theme = createMuiTheme({
//     palette: {
//       action: {
//         disabledBackground: 'green'
//       }
//     }
//   });


export default function PianoTab() {

    const classes = useStyles();

    const [value1, setValue1] = React.useState<State>({ input: '' })
    const [value2, setValue2] = React.useState<State>({ input: '' })
    const [value3, setValue3] = React.useState<State>({ input: '' })
    const [value4, setValue4] = React.useState<State>({ input: '' })
    const [value5, setValue5] = React.useState<State>({ input: '' })
    const [value6, setValue6] = React.useState<State>({ input: '' })
    const [value7, setValue7] = React.useState<State>({ input: '' })

    const [correct, showCorrect] = React.useState(false)
    const [again, tryAgain] = React.useState(false)
    const [none, noneCorrect] = React.useState(false)

    const correctAnswers = 'GAEDFBC';
    var allInput = value1.input + value2.input + value3.input + value4.input + value5.input + value6.input + value7.input;


    const handleChange1 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue1({ ...value1, [input]: event.target.value.toUpperCase() });
    };
    const handleChange2 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue2({ ...value2, [input]: event.target.value.toUpperCase() });
    };
    const handleChange3 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue3({ ...value3, [input]: event.target.value.toUpperCase() });
    };
    const handleChange4 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue4({ ...value4, [input]: event.target.value.toUpperCase() });
    };
    const handleChange5 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue5({ ...value5, [input]: event.target.value.toUpperCase() });
    };
    const handleChange6 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue6({ ...value6, [input]: event.target.value.toUpperCase() });
    };
    const handleChange7 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue7({ ...value7, [input]: event.target.value.toUpperCase() });
    };
    var splitAnswers = correctAnswers.split('');

    const checkAnswers = () => {
        var i = 0;
        var countCorrect = 0;
        splitAnswers.forEach(e => {
            if (e === allInput[i]) {
                countCorrect++;

            }
            i++;
            if (countCorrect > 0 && countCorrect < 7) {
                tryAgain(true)
                noneCorrect(false)
            }

        })
        if (correctAnswers === allInput) {
            tryAgain(false)
            noneCorrect(false)
            showCorrect(true)
        }
        if (countCorrect === 0) {
            noneCorrect(true)
        }
    }
    const isValueCorrect = (num: number) => {
        var i = 0;
        const correctArray = splitAnswers.map(e => {
            if ((allInput[i] === correctAnswers[i] && again === true) || correct === true) {
                i++;
                return true;
            }
            i++;
        })
        return correctArray[num];
    }

    return (
        <div className={classes.container} >
            <TextField
                id="#1"
                label="#1"
                placeholder="Type here"
                className={classes.textField}
                value={value1.input}
                onChange={handleChange1('input')}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: isValueCorrect(0) ? classes.color : classes.color2,
                    readOnly: isValueCorrect(0),
                    maxLength: 1
                }}
            />

            <TextField
                id="filled-name"
                label="#2"
                placeholder="Type here"
                className={classes.textField}
                value={value2.input}
                onChange={handleChange2('input')}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: isValueCorrect(1) ? classes.color : classes.color2,
                    readOnly: isValueCorrect(1),
                    maxLength: 1
                }}
            />

            <TextField
                id="filled-name"
                label="#3"
                placeholder="Type here"
                className={classes.textField}
                value={value3.input}
                onChange={handleChange3('input')}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: isValueCorrect(2) ? classes.color : classes.color2,
                    readOnly: isValueCorrect(2),
                    maxLength: 1
                }}
            />

            <TextField
                id="filled-name"
                label="#4"
                placeholder="Type here"
                className={classes.textField}
                value={value4.input}
                onChange={handleChange4('input')}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: isValueCorrect(3) ? classes.color : classes.color2,
                    readOnly: isValueCorrect(3),
                    maxLength: 1
                }}
            />

            <TextField
                id="filled-name"
                label="#5"
                placeholder="Type here"
                className={classes.textField}
                value={value5.input}
                onChange={handleChange5('input')}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: isValueCorrect(4) ? classes.color : classes.color2,
                    readOnly: isValueCorrect(4),
                    maxLength: 1
                }}
            />

            <TextField
                id="filled-name"
                label="#6"
                placeholder="Type here"
                className={classes.textField}
                value={value6.input}
                onChange={handleChange6('input')}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: isValueCorrect(5) ? classes.color : classes.color2,
                    readOnly: isValueCorrect(5),
                    maxLength: 1
                }}
            />

            <TextField
                id="filled-name"
                label="#7"
                placeholder="Type here"
                className={classes.textField}
                value={value7.input}
                onChange={handleChange7('input')}
                margin="normal"
                variant="filled"
                inputProps={{
                    className: isValueCorrect(6) ? classes.color : classes.color2,
                    readOnly: isValueCorrect(6),
                    maxLength: 1
                }}
            />

            {!correct && (
                <Button onClick={checkAnswers} variant="contained" size='large' color="secondary" >
                    SUBMIT
            </Button>
            )}

            {again && (
                <p>Some of your answers were right! Just gotta fix a few.</p>
            )}

            {none && (
                <p>Sorry, none of those are right. Please try again</p>
            )}

            {correct && (
                <div>
                    <h1>CORRECT!</h1>
                    <p>You may now open the _____________ to receive one of the words for the final clue.</p>
                </div>
            )}
        </div>
    );
}