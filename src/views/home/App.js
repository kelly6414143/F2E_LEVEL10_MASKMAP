import React ,{useState, useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearhBox from '../searchBox/SearchBox'
import PharmacyList from '../pharmacyList/PharmacyList'
import Map from '../map/Map'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function App() {
  const classes = useStyles();
  const [storeList, setStorList] = useState([])
  const [searchStoreList, setSearchStoreList] = useState([])
  const getSearchStore = (storeList)=>{
    setStorList(storeList)
    setSearchStoreList(storeList)
  }
  const getStore = (storeData)=>{
    if(typeof storeData ==="string"){
      setStorList(searchStoreList)
      return
    }
    setStorList(storeData)
  }
  return (
      <div className={classes.root}>
        <div id="loading">
          <span className="loding-title">Loading...</span>
        </div>
        <Grid container style={{position:"absolute"}}>
          <Grid item>
            <SearhBox
                getStoreList = {(val)=>getSearchStore(val)}
            ></SearhBox>
            <PharmacyList storeList = {storeList}/>
          </Grid>
          <Grid item xs>
            <Map
                storeList = {storeList}
                getMarkerData = {(val)=>getStore(val)}
                resetSearchData = {(val)=>getStore(val)}
            ></Map>
          </Grid>
        </Grid>
      </div>
  );
}
