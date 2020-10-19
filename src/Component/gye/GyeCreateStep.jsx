// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Stepper from '@material-ui/core/Stepper';
// import Step from '@material-ui/core/Step';
// import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//   },
//   backButton: {
//     marginRight: theme.spacing(1),
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
// }));

// function getSteps() {
//   return ['계 종류 선택', '세부정보 입력', '계모임 회칙 확인'];
// }

// function getStepContent(stepIndex) {
//   switch (stepIndex) {
//     case 0:
//       return '계 종류 선택...';
//     case 1:
//       return '세부정보 입력';
//     case 2:
//       return '계 모임 회칙';
//     default:
//       return 'Unknown stepIndex';
//   }
// }

// export default function HorizontalLabelPositionBelowStepper() {
//   const classes = useStyles();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const steps = getSteps();

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   return (
//     <div className={classes.root}>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
            
//           </Step>
//         ))}
//       </Stepper>
//       <div>
//         {activeStep === steps.length ? (
//           <div>
//             <Typography className={classes.instructions}>All steps completed</Typography>
//             <Button onClick={handleReset}>Reset</Button>
//           </div>
//         ) : (
//           <div>
//             <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
//             <div>
//               <Button
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 className={classes.backButton}
//               >
//                 Back
//               </Button>
//               <Button variant="contained" color="primary" onClick={handleNext}>
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
      
//     </div>
    
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MDBInput } from "mdbreact";
import GyeService from '../../services/GyeService';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Select Gye Type', 'Set your gye details', 'Agree our rules'];
}


export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [period, setPeriod] = React.useState(0);
  const [state, setState] = React.useState("wait");
  const [targetMoney, setTargetMoney] = React.useState(0);
  const [totalMember, setTotalMember] = React.useState(0);
  const [interest, setInterest] = React.useState(0);
  const [type, setType] = React.useState("저축계");
  const [turn, setTurn] = React.useState(0);


  const steps = getSteps();

  useEffect(function handleSubmit() {
    console.log(title, period, 
        state, targetMoney, 
        totalMember, interest, type, turn);

    GyeService
    .createGye(title, period,
        state, targetMoney, 
        totalMember, interest, type, turn)
    .then( response => {
        console.log(response.data);
        let id = response.data;
        this.props.history.push(`/gye/` + id);
        
    }).catch( error =>{
        
        console.log('register fail');
    });


    // e.preventDefault();
  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent=(step) => {
    

    const handleChange = (e) => {
        console.log(e)
        if(e.target.name === 'totalMember'){
            period = e.target.value;
            console.log(e.target.value)
        }
        if(e.target.name === 'period'){
            totalMember = e.target.value;
            console.log(e.target.value)
        }
        if(e.target.name === 'interest'){
            if(interest > 20 && interest < 1){
                alert("between 1 and 20!")
            }
        }
    }

  

    switch (step) {
    case 0:
        return <div> <div>
        <select className="browser-default custom-select">
        <option>Choose your gye</option>
        <option value="1">낙찰계</option>
        <option value="2">저축계</option>
        <option value="3">기부계</option>
        </select>
    </div></div>;
    case 1:
        return <div>Gye Title<MDBInput label="Gye Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        
    Gye Interests<MDBInput min="1" max="20" label ="Gye rates" type="number" value={interest} onChange={(e)=>{setInterest(e.target.value)}} />

    Period <MDBInput label="Gye Period" type="number" value={period} onChange={(e)=>{setPeriod(e.target.period)}}/>

    Target Money <MDBInput step="10000" label ="Target Money" type="number" value={targetMoney} onChange={(e) => {setTargetMoney(e.target.value)}} />

    Member <MDBInput min="3"  label ="Member" type="number" value={totalMember} onChange={(e)=>{setTotalMember(e.target.value)}}/>

    Turn <MDBInput min="1"  label ="Turn" type="number" value={turn} onChange={(e)=>{setTurn(e.target.value)}} />


        </div>;
    case 2:
        return <div> 
        <MDBInput label="I agreee to the Armagyeddon's rules" type="checkbox" id="checkbox"  />
        <MDBInput label="I want to receive Armagyeddon's newsletter" type="checkbox" id="checkbox2" /></div>;
    default:
        return 'Unknown step';
    }
}





  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>

                  
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - your gye is created!</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
          <Button onChange={(e)=>{handleSubmit(e.target.value)}}>Submit</Button>
        </Paper>
      )}
    </div>
  );
}
