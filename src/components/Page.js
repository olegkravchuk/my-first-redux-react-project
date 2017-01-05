import React, {Component, PropTypes} from 'react'


export default class Page extends Component {
    onYearBtnClick(e){
        this.props.getPhotos(+e.target.innerText)
    }
    render(){
        const {year, photos, fetching, error} = this.props.data;
        const years = [2017, 2016,2015,2014,2013,2012,2011,2010];

        return (
            <div className='ib page'>
                <p>
                    {
                        years.map(
                            (item, index) => <button className='btn' key={index} onClick={::this.onYearBtnClick}>{item}</button>
                        )
                    }
                </p>
                <h3>{year} year</h3>
                {error ? <p className='error'> Loading photos failed</p>: ''}
                {
                    fetching ?
                        <p>Loading...</p>
                        :
                        photos.map((photo, index) =>
                            <div key={index} className='photo'>
                                <p><img src={photo.src} /></p>
                                <p>{photo.likes.count}</p>
                            </div>
                        )
                }
            </div>
        )
    }
}

Page.propTypes = {
    data: PropTypes.shape({
        year: PropTypes.number.isRequired,
        photos: PropTypes.array.isRequired,
        fetching: PropTypes.bool.isRequired,
        error: PropTypes.string.isRequired
    }),
    getPhotos: PropTypes.func.isRequired
};
