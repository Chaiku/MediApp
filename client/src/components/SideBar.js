import React from 'react';
import axios from 'axios';

class SideBar extends React.Component {

    topTenSpend () {
        axios.get(`/api/drugs/topTen/${this.value}`)
    }

    render () {
        return(
    <div className="sideBarDiv">
    <h2>TOP TEN</h2>
        <h4 className="topTen">2015</h4>
            <button className="topTenBtn" onClick={this.topTenSpend} value="2015">Highest Spending</button>
            <button className="topTenBtn" onClick={this.topTenUser} value="2015">Highest Spending</button>
        <h4 className="topTen">2014</h4>
            <button className="topTenBtn" onClick={this.topTenSpend} value="2014">Highest Spending</button>
            <button className="topTenBtn" onClick={this.topTenUser} value="2014">Highest Spending</button>
        <h4 className="topTen">2013</h4>
            <button className="topTenBtn" onClick={this.topTenSpend} value="2013">Highest Spending</button>
            <button className="topTenBtn" onClick={this.topTenUser} value="2013">Highest Spending</button>
        <h4 className="topTen">2012</h4>
            <button className="topTenBtn" onClick={this.topTenSpend} value="2012">Highest Spending</button>
            <button className="topTenBtn" onClick={this.topTenUser} value="2012">Highest Spending</button>
        <h4 className="topTen">2011</h4>
            <button className="topTenBtn" onClick={this.topTenSpend} value="2011">Highest Spending</button>
            <button className="topTenBtn" onClick={this.topTenUser} value="2011">Highest Spending</button>
 
    </div>
        )
    }
}

export default SideBar;