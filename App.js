
import React from 'react';
import Registration from './src/screens/Registration';
import StaticFlateList from './src/screens/StaticFlateList';

const App = () => {
    return <>
    <StaticFlateList/>
    </> 
}
export default App

// class App extends React.Component{
//     constructor(props){
//         super(props)
//         console.log('constructor is call/wp-content/uploads/lifecycle_reactjs.jpging');
//     }
    
//     componentDidMount(){
//         console.log('componentDidMount is calling');
//     }

//     render(){
//         console.log('render is calling');
//         return <>
//         <Registration/>
//         </>
//     }
// }
// export default App;