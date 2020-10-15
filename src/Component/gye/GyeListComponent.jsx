import React from 'react';
import GyeService from '../../services/GyeService';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class GyeListComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gyes : []
        };
    }

    componentDidMount() {
        GyeService.getGyeList()
        .then(response => {
            this.setState({gyes: response.data});
        })
        .catch(error => {
            console.log(error)

        })
    }

    render() {
        let gyes = this.state.gyes;

        
        const listItem = gyes.map((gye) =>
            <div className="col-md-6 col-lg-4 mb-5" key={gye.id}>
                <MDBContainer className="mt-5">
  
                <MDBRow className="mt-4">
                    <MDBCol md="10">
                    <MDBView hover zoom>
                    <a ><img src="images/cute.jpg" alt="Image" className="img-fluid rounded mb-4"/></a>
                
                        <MDBMask className="flex-center">
                        <p className="white-text">
                        <p>Type : {gye.type}</p>
                        <p>Target Money : {gye.targetMoney}</p>
                        <p>Total Member : {gye.totalMember}</p>
                        <p>Period : {gye.period} month</p>
                        </p>
                        </MDBMask>
                    </MDBView>
                    <h3><a href={'/gye/' + gye.id} className="text-black">{gye.title}</a></h3>
                    <div>April 15, 2019 <span className="mx-2">|</span> <a href="#">2 Comments</a></div>
                    </MDBCol>
                    
                </MDBRow>
                </MDBContainer>

               
            </div>
        );

        
        //<li key={gye.id}><a href={'/gye/' + gye.id}>{gye.title}</a></li>


        return(
            <div>
                <section className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            {listItem}
                        </div>                        
                    </div>
                </section>         
                
                
            </div>
    
        );
    }
}

export default GyeListComponent;