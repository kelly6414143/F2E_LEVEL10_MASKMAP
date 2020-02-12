import React,{ useState, useEffect } from 'react'
import { getParmacyList } from '../../apis/api'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import ShareIcon from '@material-ui/icons/Share'
import HomeIcon from '@material-ui/icons/Home'
import PhoneIcon from '@material-ui/icons/Phone'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import StarRateIcon from '@material-ui/icons/StarRate';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        boxShadow: 'none',
        borderRadius: '0px',
        position: 'relative',
    },
    content: {
        padding: '0px',
        backgroundColor: 'rgb(238, 238, 236)',
        height: 'calc(100vh - 240px)',
        overflowY: 'scroll'
    },
    title: {
        fontSize: 12,
        padding: '10px',
        marginBottom: 0,
        backgroundColor: 'rgb(238, 238, 236)'
    },
    subRoot: {
        position: 'relative',
        margin: '15px auto',
        backgroundColor: 'rgb(224, 226, 224)',
        maxWidth: 350
    },
    lists: {
        display: 'flex',
        alignItems: 'center',
        wordSpace: 'wrap'
    },
    icon: {
        marginRight: 5
    },
    operateTime: {
        fontSize: 12
    },
    subFooter: {
        paddingLeft: 16,
        backgroundColor: '#d3dedc'
    },
    settingIcon: {
        position: 'absolute',
        bottom: 0,
        right: 16,
        height: 32,
        cursor: "pointer"
    },
    modal: {
        position: 'absolute',
        height: 260,
        overflowY: 'scroll',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    table: {
        // minWidth: 100,
    },
}))

export default function PharmacyList (props) {
    const classes = useStyles()
    const [open, setOpen] = useState(false);
    const [currentStore, setCurrentStore] = useState({})
    const [modelPos, setModelPos] = useState({})
    const [tableRow, setTableRow] = useState([])

    const createData = (name,mon, tus, web, thur, fri, sat, sun) =>{
        return { name,mon, tus, web, thur, fri, sat, sun };
    }

    const showDetail = (e,store)=>{
        setTableRow((row)=>{
            let arr = []
            let availTime = store.available.split('、')
            let timeArr = availTime.map(time=>{
                if(time.indexOf('看')>-1){
                    return 'O'
                }
                return 'X'
            })

            for(let i = 0; i<timeArr.length; i = i+7){
                let time = '上午'
                if(i>=14){
                    time = '晚上'
                }else if(i>=7){
                    time = '中午'
                }
                arr.push(createData(time,timeArr[i],timeArr[i+1],timeArr[i+2],timeArr[i+3],timeArr[i+4],timeArr[i+5],timeArr[i+6]))
            }
            // console.log(row)
            return arr
        })

        let y = window.screen.height<e.clientY+390?
            'calc(100vh - 270px)':e.clientY
        setOpen(true);
        setCurrentStore(store)
        // console.log(window.screen.width)
        if(window.screen.width<500){
            setModelPos({x:'calc(50% - 125px)',y:'calc(100vh - 270px)',width: '250px'})
            return
        }
        setModelPos({x:e.clientX-20,y:y, width: '500px'})
    }

    const hideDetail = () => {
        setOpen(false);
    };

    // console.log(props.storeList)
    return (
        <>
        <Card className={ classes.root }>
            {/*<Typography className={ classes.title } gutterBottom> 更新時間 2020/2/6 16:50 </Typography>*/}
            <CardContent className={ classes.content }>
                {
                    props.storeList.map(({properties},idx)=>{
                     return(
                         <Card key={idx} className={ classes.subRoot }>
                             <CardContent className={ classes.subRootContent }>
                                 <Typography style={{fontSize:12, color: 'grey',textAlign: 'right'}} color="textSecondary" variant="body1" gutterBottom>
                                     更新時間 : {properties.updated}
                                 </Typography>
                                 <Typography variant="h5" component="h2">
                                     {properties.name} &nbsp;
                                 </Typography>
                                 <Typography className={ classes.operateTime } color="textSecondary" variant="body1" gutterBottom>
                                     營業時間 : 請點擊
                                     <ShareIcon style={{fontSize:12}}/>查看詳細
                                 </Typography>
                                 <Typography className={ classes.lists } variant="body2">
                                     <HomeIcon className={ classes.icon } /> {properties.address}
                                 </Typography>
                                 <Typography className={ classes.lists } variant="body2">
                                     <PhoneIcon className={ classes.icon } /> {properties.phone}
                                 </Typography> </CardContent>
                             <CardActions
                                 className={ classes.subFooter }
                                 style={
                                     properties['mask_adult'] + properties['mask_child']<100?
                                         properties['mask_adult'] + properties['mask_child'] === 0?
                                             {
                                                 backgroundColor:'rgb(202, 201, 199)'
                                             }
                                             :
                                         {
                                             backgroundColor:'rgb(221, 125, 90)'
                                         }:{}
                                 }>
                                 <Typography
                                     className={ classes.lists }
                                     variant="body2"
                                 >
                                     {
                                         properties['mask_adult'] + properties['mask_child'] === 0
                                             ?<>已售完</>
                                             :<>剩餘 {properties['mask_adult'] + properties['mask_child']}，成人{properties['mask_adult']} / 兒童{properties['mask_child']}</>
                                     }

                                     <ShareIcon className={ classes.settingIcon } onClick={(e)=>showDetail(e,properties)} />
                                 </Typography>
                             </CardActions>
                         </Card>
                     )
                    })
                }
            </CardContent>
        </Card>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={hideDetail}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                style={{
                    top: modelPos.y,
                    left: modelPos.x,
                    maxWidth: modelPos.width
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">
                            {currentStore.name} &nbsp;
                            <span style={{fontSize:12, color: 'grey'}}>(更新時間 : {currentStore.updated})</span>
                        </h2>
                        <p id="transition-modal-description">營業時間 : </p>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>營業時間</TableCell>
                                        <TableCell align="right">一</TableCell>
                                        <TableCell align="right">二</TableCell>
                                        <TableCell align="right">三</TableCell>
                                        <TableCell align="right">四</TableCell>
                                        <TableCell align="right">五</TableCell>
                                        <TableCell align="right">六</TableCell>
                                        <TableCell align="right">日</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {tableRow.map(row => (
                                        <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.mon}</TableCell>
                                            <TableCell align="right">{row.tus}</TableCell>
                                            <TableCell align="right">{row.web}</TableCell>
                                            <TableCell align="right">{row.thur}</TableCell>
                                            <TableCell align="right">{row.fri}</TableCell>
                                            <TableCell align="right">{row.sat}</TableCell>
                                            <TableCell align="right">{row.sun}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <p>
                            <StarRateIcon style={{color:"gold",fontSize:12}}/>
                            <span> 憑健保卡向健保特約藥局購買</span>
                        </p>
                        <p>
                            <StarRateIcon style={{color:"gold",fontSize:12}}/>
                            <span> 依身分證末一碼，購買日期規定如下：</span>
                        </p>
                        <p>奇數 : 星期一、三、五、日</p>
                        <p>偶數 : 星期二、四、六、日</p>
                    </div>
                </Fade>
            </Modal>
            </>
    )

}



