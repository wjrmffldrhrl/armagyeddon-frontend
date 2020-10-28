import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import AuthenticationService from '../../services/AuthenticationService';
import InfoService from '../../services/InfoService';
import styles from '../../static/css/login.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  
}));

const componentDidMount = () => {
    InfoService.getUserInfo(this.state.loggedInUser)
    .then(response => {
        console.log(response.data);
        this.setState({info : response.data});
    }).catch(error => {
        console.log(error);
    });

     
}



export default function LoginSuccess() {
    
    const classes = useStyles();
    
    const isLoggedIn = AuthenticationService.isUserLoggedIn();
    const [userInfo, setuserInfo] = React.useState(0);

    if(userInfo == 0){
        InfoService.getUserInfo(AuthenticationService.getLoggedInUserEmail())
        .then( (respons) => {
            console.log(respons);
            setuserInfo(respons.data);
        });
    }
    const successlogin = (e) => (         
        
        <div>   
                          
             {/* <Alert variant="filled" severity="success">
                 { userInfo && <div> {userInfo.name} 님이 접속중입니다!</div>
                 }
             </Alert> */}
         </div>
        
    );

    console.log(userInfo);
    
  return (
    <div className="font-weight-bold">  
      <div className="alert">
         {isLoggedIn ? <div className={classes.root}>
             
                <Alert variant="filled" severity="success" >
                         
                    { userInfo && <div> {userInfo.name} 님이 접속중입니다!</div>
                    }
                </Alert>
            </div> : ""   } 
            </div>
    </div>

  );
}
