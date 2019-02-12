
import React from 'react';
import MenuBar from './Component/MenuBar';
import { Route } from 'react-router-dom';
import AddRestaurant from './Component/Restaurant/AddRestaurant';
import Login from './Component/Common/Login';
import Footer from '../src/Component/Bottom';
import Confetti from '../src/Component/Common/Confetti';

class App extends React.Component {

    render () {
        return (
            <div className="whole-page-background-color">
                <MenuBar />
                    <div className="confetti-div">
                        <Confetti displayNumberOfConfettiDiv='13'/>
                        <Route exact path="/" component={Login} />
                        <Route path="/login" component={Login} />
                        <Route path="/addRestaurant" component={AddRestaurant} />
                    </div>
                <Footer />
            </div>
        );
    }
}

export default App;
