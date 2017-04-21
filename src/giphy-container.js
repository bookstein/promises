import React, { Component } from 'react';

class GiphyContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            loading: true,
            img: null,
        }
    }

    componentDidMount = () => {
        fetch(`http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC`)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            const { url, id } = json.data
            this.setState({
                loading: false,
                img: {
                    url,
                    id
                }
            })
        })
    }

    render () {
        const {loading, img} = this.state
        return (
            <div>
                { loading && <div><img src='./giphy-downsized.gif' alt='loading' width='400' height='400' /></div> }
                { !loading &&
                    <div>
                        <iframe src={`//giphy.com/embed/${img.id}`} width="500" height="500" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
                        <a href={img.url}>{img.url}</a>
                    </div>
                }
            </div>
        )
    }
}

export default GiphyContainer