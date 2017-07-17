import React, {Component} from 'react';

import { AppRegistry, asset, Pano, View, Text } from 'react-vr';

export default class Basics extends Component {
  constructor() {
    super();
    this.state={
      fontSize: 0.1
    }
  }



  render(){
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}></Pano>
        <Text
          onEnter={() => this.setState({fontSize: 0.2})}
          onExit={() => this.setState({fontSize: 0.1})}
          style={{
            fontSize: this.state.fontSize,
            transform: [{translate: [0, 0, -2]}]
        }}>
          Hover over me!
        </Text>
      </View>
    )
  }
};

AppRegistry.registerComponent('Basics', () => Basics);



// import React, {Component} from 'react';
//
// import { AppRegistry, asset, Pano, View, Text, Box } from 'react-vr';
//
// export default class Basics extends Component {
//   render(){
//     return (
//       <View>
//         <Pano source={asset('starry-sky.jpg')}></Pano>
//         <Box
//           dimWidth={0.5}
//           dimHeight={0.5}
//           dimDepth={0.5}
//           wireframe={true}
//           style={{
//             color: '#d22',
//             transform: [
//               {translate: [0, 0, -3]},
//               {translateY: 1},
//               {translateX: -0.5},
//               {rotateY: 45},
//               {rotateZ: 45},
//
//             ]
//           }}
//         />
//       </View>
//
//     )
//   }
// };
//
// AppRegistry.registerComponent('Basics', () => Basics);
