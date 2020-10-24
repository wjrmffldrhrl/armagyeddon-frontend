// import React from "react";
// import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
// "mdbreact";

// const AnimationComponent= () => {
//   return (
//     <MDBContainer>
//       <MDBCarousel
//         activeItem={1}
//         length={3}
//         showControls={true}
//         showIndicators={true}
//         className="z-depth-1"
//       >
//         <MDBCarouselInner className="feedback_users">
//           <MDBCarouselItem itemId="1">
//             <MDBView>
//               <img
//                 className="d-block w-100"
//                 // src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
//                 src="images/soju2.jpg"
//                 alt="First slide"
//               />            
//             </MDBView>
//           </MDBCarouselItem>
//           <MDBCarouselItem itemId="2">
//             <MDBView>
//               <img
//                 className="d-block w-100"
//                 // src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
//                 src="images/chippo1.jpg"
//                 alt="Second slide"
//               />
//             </MDBView>
//           </MDBCarouselItem>
//           <MDBCarouselItem itemId="3">
//             <MDBView>
//               <img
//                 className="d-block w-100"
//                 // src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                
//                 src="images/cute1.jpg"
//                 alt="Third slide"
//               />
//             </MDBView>
//           </MDBCarouselItem>
//         </MDBCarouselInner>
//       </MDBCarousel>
//     </MDBContainer>
//   );
// }


// export default AnimationComponent;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));



 const tileData = [
  {
     img: image,
     title: 'Image',
     author: 'author',
   },
  //  {
  //    [etc...]
  //  },
 ];
 
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
