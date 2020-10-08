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
            console.log(error)

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
                    </div>
                </section>         
                
                
            </div>
    
        );
    }
}

export default GyeListComponent;