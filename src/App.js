import logo from './logo.svg';
import './App.css';
import { Button, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  buttonStyle: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  
})

function App() {
  const classes = useStyles();

  return (
    <div>
      
    </div>
  );
}

export default App;
