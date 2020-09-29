import React, {Component} from 'react';
import styles from '../../static/css/board.css';

class BoardComponent extends Component {

    state = {
        maxNo:3,
        boards : [
            {
                brdno :1,
                brdtitle: '제가 회원가입을....',
                brdwriter: 'Arma',
                brdcontent: '회원가입이 안됩니다',
                brddate: new Date()
            },
            {
                brdno :2,
                brdtitle: '낙찰계는 이자율이....',
                brdwriter: 'Gyeddon',
                brdcontent: '말도 안되는 군요',
                brddate: new Date()
            }
    
        ]
    }

    handleSaveData = (data) => {

        this.setState({
            maxNo : this.state.maxNo+1,
            boards : this.state.boards.concat({brdno: this.state.maxNo,
                
                brddate: new Date(), 
                brdtitle: data.brdtitle,
                brdwriter: data.brdwriter,
                brdcontent: data.brdcontent
             })
        });
    }
    
    
    render() {
        const {boards} = this.state;

        return(
            <div>
                <BoardForm onSaveData={this.handleSaveData}/>
                <tabel border="1" className="table table-striped">
                    <tbody>
                            <tr algin="center">
                                
                                <td>번호</td>                                
                                <td>제목</td>
                                <td>작성자</td>
                                <td>내용</td>
                                <td>작성일</td>
                                <hr></hr>
                            </tr>

                            {
                                boards.map(row =>
                                    (<BoardItem key={row.brdno} row={row}/>)
                                    )
                            }
                    </tbody>
                </tabel>
            </div>
            
        );

    }         

}

class BoardItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.brdtitle}</td>                
                <td>{this.props.row.brdwriter}</td>
                <td>{this.props.row.brdcontent}</td>
                <td>{this.props.row.brddate.toLocaleDateString('ko-KR')}</td>
            </tr>
        );
    }
}

class BoardForm extends Component {

    state = {}

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({});
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} className="board_first_title">
                제목: <input name="brdtitle" onChange={this.handleChange}></input>
                작성자: <input name="brdwriter" onChange={this.handleChange}></input>
                내용: <input name="brdcontent" onChange={this.handleChange}></input><br></br>
            
                <button type="submit">글쓰기</button>
                <hr></hr>
            </form>
        );
    }
}

export default BoardComponent;

    