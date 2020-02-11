import React, { useState, useEffect, useRef } from 'react'
import { getParmacyList } from '../../apis/api'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        boxShadow: 'none',
        borderRadius: '0px'
    },
    content: {
        padding: '0px',
        backgroundColor: 'rgb(224, 226, 224)'
    },
    title: {
        fontSize: 16,
        backgroundColor: 'rgb(172, 189, 188)',
        padding: '10px'
    },
    formControl: {
        margin: theme.spacing(1.5),
        minWidth: 200
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}))

export default function SearhBox (props) {
    const classes = useStyles()
    const [ allList, setAllList ] = useState([])
    const [ areaList, setAreaList ] = useState([])
    const [ area, setArea ] = useState('')
    const [ cityList, setCityList] = useState([])
    const [ city, setCity] = useState("")
    const defaultDelay = 50000
    const [currentStores, setCurrentStores] = useState([])

    // const [count, setCount] = useState(0)
    // const [delay, setDelay] = useState(1000)
    //
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCount(c => c + 1)
    //     }, delay)
    //     return () => clearInterval(timer)
    // }, [delay])
    //
    // const handelDelayChange = e => setDelay(+e.target.value)


    useEffect(() => {
        getParmacyList().then(response => {
            const { data: res } = response
            let areaList = []
            // let cityList = []
            setAllList(res.features)
            res.features.forEach(store => {
                if(store.geometry){
                    store.geometry.position = { lat: store.geometry.coordinates[1], lng: store.geometry.coordinates[0]}
                }
                areaList.push(store.properties.county)
                // cityList.push(store.properties.town)
            })
            areaList = areaList.filter(
                (area, index) => areaList.indexOf(area) === index
            )
            // cityList = cityList.filter(
            //     (area, index) => areaList.indexOf(area) === index
            // )
            setAreaList(areaList)
            // setCityList(cityList)

            setArea(area=>{
                area = area || areaList[0]
                getCurrentStore(res.features, area)
                return area
            })


        })
        const intervalId = setInterval(() => {
            getParmacyList().then(response => {
                const { data: res } = response
                let areaList = []
                setAllList(res.features)
                res.features.forEach(store => {
                    if(store.geometry){
                        store.geometry.position = { lat: store.geometry.coordinates[1], lng: store.geometry.coordinates[0]}
                    }
                    areaList.push(store.properties.county)
                })
                areaList = areaList.filter(
                    (area, index) => areaList.indexOf(area) === index
                )
                setAreaList(areaList)
                setArea(area=>{
                    area = area || areaList[0]
                    getCurrentStore(res.features, area)
                    return area
                })

            })
        }, defaultDelay)
        return () => clearInterval(intervalId);
    }, [])


    useEffect(()=>{
        let cityList = []
        currentStores.forEach(store => {
            cityList.push(store.properties.town)
        })
        cityList = cityList.filter(
            (city, index) => cityList.indexOf(city) === index
        )
        setCityList(cityList)
        if(cityList.length<1)return
        setCity(cityList[0])
        let currentPharmacyList = allList.filter(
            area => area.properties.town === cityList[0])
        props.getStoreList(currentPharmacyList)
    },[area])

    const getCurrentStore = (allList, value) => {
        let currentPharmacyList = allList.filter(
            area => area.properties.county === value)
        setCurrentStores(currentPharmacyList)
        setArea(value)
    }

    const getFilterCityStores = (allList, value) => {
        let currentPharmacyList = allList.filter(
            city => city.properties.town === value)
        props.getStoreList(currentPharmacyList)
        // setArea(value)
    }

    const handleAreaChange = event => {
        let value = event.target.value
        setArea(value)
        getCurrentStore(allList, value)
    }

    const handleCityChange = event => {
        let value = event.target.value
        setCity(value)
        getFilterCityStores(allList,value)
    }

    return (
        <Card className={ classes.root }>
            <CardContent className={ classes.content }>
                <Typography className={ classes.title } align="center" gutterBottom> 健保特約機構口罩剩餘數量明細清單 資料來源:衛服部 </Typography>
                <Typography variant="h5" component="h2" align="center">
                    <FormControl className={ classes.formControl }>
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">縣市</InputLabel>
                        <Select
                            labelId="demo-simple-select-placeholder-label-label"
                            id="demo-simple-select-placeholder-label"
                            value={ area }
                            onChange={ handleAreaChange }
                            displayEmpty
                            className={ classes.selectEmpty }
                        >
                            {
                                areaList.map((item, idx) =>
                                    <MenuItem key={ idx } value={ item }>{ item }</MenuItem>)
                            }
                        </Select> </FormControl>
                </Typography>
               <Typography variant="h5" component="h2" align="center">
                    <FormControl className={ classes.formControl }>
                        <InputLabel shrink id="demo-simple-select-placeholder-label-label">區域</InputLabel>
                        <Select
                            labelId="demo-simple-select-placeholder-label-label"
                            id="demo-simple-select-placeholder-label"
                            value={ city }
                            onChange={ handleCityChange }
                            displayEmpty
                            className={ classes.selectEmpty }
                        >
                            {
                                cityList.map((item, idx) =>
                                    <MenuItem key={ idx } value={ item }>{ item }</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Typography>
            </CardContent>
        </Card>
    )
}



