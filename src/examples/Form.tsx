import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl
} from '@material-ui/core'
import { Slider } from '@material-ui/lab';

import styled from 'styled-components'

interface Props {};

interface State {
  open: boolean;
  sliderValue: number;
  age?: number;
};

/**
 * Example of a dorm witha a slider, input, button, and modal dialog
 */
class Form extends React.Component<Props, State> {
  state: State = {
    open: false,
    sliderValue: 50.
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  };

  handleClick = () => {
    this.setState({
      open: true,
    })
  };

  handleSliderChange = (event: React.ChangeEvent<{}>, sliderValue: number) => {
    this.setState({ sliderValue });
  };

  handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const age = Number(event.target.value);
    this.setState({ age });
  };


  render() {
    const { open } = this.state

    return (
      <Root>
        <Typography id="label">Slider label</Typography>
        <SliderWithRoom
          value={this.state.sliderValue}
          aria-labelledby="label"
          onChange={this.handleSliderChange}
        />

      <StyledFormControl>
        <InputLabel shrink={!!this.state.age} htmlFor="age-simple">Age</InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleAgeChange}
            inputProps={{
              name: 'age',
              id: 'age-simple'
            }}
          >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </StyledFormControl>

      <Dialog open={open} onClose={this.handleClose}>
        <DialogTitle>Super Secret Password</DialogTitle>
        <DialogContent>
          <DialogContentText>1-2-3-4-5</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={this.handleClose}>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Button variant="contained" color="primary" onClick={this.handleClick}>
        Super Secret Password
      </Button>
    </Root>
    );
  };
}

const Root = styled.form`
  margin-top: ${props => `${props.theme.spacing.unit * 1}px`};
`;

const SliderWithRoom = styled(Slider)`
  padding: 22px 0px;
`;

const StyledFormControl = styled(FormControl)`
  && {
    margin: ${props => `${props.theme.spacing.unit}px`};
    min-width: 120px;
  }
`;

export default Form;
