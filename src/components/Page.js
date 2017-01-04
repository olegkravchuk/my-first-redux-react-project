import React, {Component, PropTypes} from 'react'


export default class Page extends Component {
    onYearBtnClick(e){
        this.props.selectYear(+e.target.innerText)
    }
    render(){
        const {year, photos} = this.props.data;
        return (
            <div>
                <p>
                    <button onClick={::this.onYearBtnClick}>2017</button>
                    <button onClick={::this.onYearBtnClick}>2016</button>
                    <button onClick={::this.onYearBtnClick}>2015</button>
                    <button onClick={::this.onYearBtnClick}>2014</button>
                </p>
                <p>You have {photos.length} in {year} year</p>
            </div>
        )
    }
}

Page.propTypes = {
    data: PropTypes.shape({
        year: PropTypes.number.isRequired,
        photos: PropTypes.array.isRequired
    }),
    selectYear: PropTypes.func.isRequired
};
