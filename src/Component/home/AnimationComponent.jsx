import React from "react";
// import {bounce} from 'react-animations';
// import {StyleSheet, css} from 'aphrodite';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';


// const styles = StyleSheet.create({
//     bounce: {
//         animationName: 'bounce',
//         animationDuration:'1s'
//     }
// })

const styles = {
    bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }

class AnimationComponent extends React.Component {
    render() {
        return(
            <StyleRoot>
                <div className="animationcomponent" >
                    예이예에
                </div>
            </StyleRoot>
        );
    }

}

export default AnimationComponent;