import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import styles from "../../static/css/friends.css";

const items = [
  {
    
    src: require("./diet.jpg"),
    altText: '',
    caption: '',
    header: '아마곗돈 통해서 다이어트 비용 모았어요. 계모임 하나 더 가입해서 아이돌 데뷔할거에요',
    
    
  }, 
  {
    
    src: require("./cute.jpg"),
    altText: '',
    caption: '',
    header: '아마곗돈을 통해서 목돈 마련했어요! 여행자금으로 모으고 있는데 코로나19 끝나면 유럽갈거에요.',
    
    
  }, 
  {
    src: require("./soju.jpg"),
    altText: '',
    caption: '',
    header: '연말모임 회식비용 모으는 데 아주 최고에요!! 저는 소주파거든요~ 함께해요 우리~'
  },
  {
    src: require("./chippo.jpg"),
    altText: '',
    caption: '',
    header: '돈 모으는 재미로 취준생활 이겨내고 있습니다. 취뽀해서 놀러갈거에요 ^__^'
  }
];


class FriendsComponent extends React.Component {
  render() {
    return (
        <div className="friends_container" >
          <div className="friends_card">
            <UncontrolledCarousel items={items}/>
            
          </div>
        </div>
    );
  }
}

export default FriendsComponent;