import React from 'react';
import GyeService from '../../services/GyeService';

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

        })
    }

    render() {
        let gyes = this.state.gyes;
        const listItem = gyes.map((gye) =>
            <div className="col-md-6 col-lg-4 mb-5" key={gye.id}>
                <a href={'/gye/' + gye.id}><img src="images/cute.jpg" alt="Image" className="img-fluid rounded mb-4"/></a>
                <h3><a href={'/gye/' + gye.id} className="text-black">{gye.title}</a></h3>
                <div>April 15, 2019 <span className="mx-2">|</span> <a href="#">2 Comments</a></div>
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

                        <div className="row pagination-wrap mt-5">
                        
                            <div className="col-md-12 text-center ">
                                <div className="custom-pagination ml-auto">
                                    <a href="#" className="prev">Prev</a>
                                        <div className="d-inline-block">
                                            <a href="#" className="active">1</a>
                                            <a href="#">2</a>
                                            <a href="#">3</a>
                                            <a href="#">4</a>
                                        </div>
                                    <a href="#" className="next">Next</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>         
                
                
            </div>
    
        );
    }
}

export default GyeListComponent;