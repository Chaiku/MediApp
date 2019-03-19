import React from 'react';
import { Link } from 'react-router-dom'
import '../../App.scss'
import axios from 'axios';
import Header from '../Header';

class Landing extends React.Component {
    state = {
        searchText: "",
        results: []
    }

    search = (e) => {
        e.preventDefault();
        axios.get(`/api/drugs?name=${this.state.searchText}`)
        .then((response) => {
            this.setState({results: response.data})
        })
        .catch(function(error){
            console.log(error)
        })
    }


    handleChange = (event) => {
        this.setState({ searchText: event.target.value })
    }

    render() {
        return (
            <div className='page landing'>
                <Header user={this.props.user} handleClick={this.props.signOut} />
                <div className='flexLeft'>
                    <h1 className='landingTitle'>MediApp</h1>
                </div>

                <div className='flexLeft'>
                    <form className='flexLeft'>
                        <input value={this.state.searchText} className="searchBoxLanding" onChange={this.handleChange} />
                        <button onClick={this.search} className='whiteBtnLanding' >Search</button>
                    </form>
                </div>
                <div className='flexLeft'>
                    <div className='listDiv'>
                    <ul>
                        {this.state.results.map(result => (
                        <li className="resultItem" key={result.id}>
                            <Link to={{ pathname: '/results', state: { drug: result } }}>
                            {result.drugname_brand}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Landing;
