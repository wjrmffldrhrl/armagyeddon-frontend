import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import styles from '../../static/css/profile.css'
import AuthenticationService from '../../services/AuthenticationService.js'
import InfoService from '../../services/InfoService';
import ArmaTokenService from '../../services/ArmaTokenService';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
     
  }));




// const componentDidMount = () => {
//     InfoService.getUserInfo(this.state.loggedInUser)
//         .then(response => {
//             console.log(response.data);
//             this.setState({info : response.data});
//         }).catch(error => {
//             console.log(error);
//         });

//         this.getMyGyeList();
// }
                                                          

  
const MyProfileContent = () => {

    const [listItem, setListItem] = useState([])
    const [isGetGyeListFinish, setIsFinished]=useState(false);
    const getMyGyeList = () => {
        if(isGetGyeListFinish) return;
        AuthenticationService.getLoggedInUserEmail()
        InfoService.getMyGyeList(AuthenticationService.getLoggedInUserEmail())
            .then(response => {
                console.log("response: ",response.data);
                setListItem(response.data);
                setIsFinished(true);
            }).catch(error => {
                console.log(error);
            });
    }                                                               
    
    getMyGyeList();

    
    const classes = useStyles();

  return (
    <MDBCardGroup className="card_profile">
      <MDBCard>
        <MDBCardImage className="card_profile_img" src="images/cute.jpg" alt="MDBCard image cap" className="rounded-circle" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">참여중인 계</MDBCardTitle>          
          <MDBCardText>  
            {listItem.map((gye) =>{
                return (<a href={'/gye/' + gye.id} className="text-black">{gye.title}</a>)
            })}
            

            
          </MDBCardText>

          <MDBCardTitle tag="h5">계주</MDBCardTitle>          
          <MDBCardText>                      
          <div className={classes.root}>
            <Avatar alt="Remy Sharp" src="images/cute.jpg" />
         </div>
          </MDBCardText>

          <MDBCardTitle tag="h5">계원</MDBCardTitle>          
          <MDBCardText>                      
          <div className={classes.root}>
            <Avatar alt="Remy Sharp" src="images/soju.jpg" />
            <Avatar alt="Travis Howard" src="images/chippo.jpg" />
            <Avatar alt="Cindy Baker" src="/images/diet.jpg" />
         </div>
          </MDBCardText>

          <MDBCardTitle tag="h5">곗돈 납입일</MDBCardTitle>          
          <MDBCardText>                      
          <form className={classes.container} noValidate>
            <TextField
                id="date"                
                type="date"
                defaultValue="2021-01-07"
                className={classes.extField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </form>
          </MDBCardText> 

        </MDBCardBody>
      </MDBCard>

      
    </MDBCardGroup>
  );
}

export default MyProfileContent;