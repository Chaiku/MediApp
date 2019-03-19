import React from 'react';
import Header from '../Header';
import Graph from './Graph';
import axios from 'axios';

class Results extends React.Component {

    render() {
        return (
            <div className="resultPage">
                <Header user={this.props.user} handleClick={this.props.signOut} />
                <h2>Results Page</h2>
                <p>Name:<strong>{this.props.location.state.drug.drugname_brand}</strong></p>
                <p>User Count:<strong> {this.props.location.state.drug.user_count} users</strong></p>
                <p>Total Spending Per User:<strong>${this.props.location.state.drug.total_spending_per_user}</strong></p>
                <p>Claim Count:<strong> {this.props.location.state.drug.claim_count} claims</strong></p>
                <p>Unit Count:<strong> {this.props.location.state.drug.unit_count} units</strong></p>
                <p>Total Spending: <strong>${this.props.location.state.drug.total_spending}</strong></p>
                <p>Out of Pocket Average for Low Income:<strong>${this.props.location.state.drug.out_of_pocket_avg_lowincome}</strong></p>
                <p>Out of Pocket Average Non-Low Income:<strong>${this.props.location.state.drug.out_of_pocket_avg_non_lowincome}</strong></p>

                <Graph drugName={this.props.location.state.drug.drugname_brand} />
            </div>
        )
    }
}

export default Results;
