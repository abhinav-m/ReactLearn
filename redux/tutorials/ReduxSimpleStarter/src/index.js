import React, {Component} from 'react'; //React is based on two libraries <- making components
import ReactDOM from 'react-dom'; ///Rendering components to the browser.
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Create a new component , produce some HTML.
const  API_KEY = 'AIzaSyCNHxbJ0sEJyNO-wtbSaWTi-8HpqnAQO2o';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

    this.videoSearch('surfboards');
   

  
    }

      videoSearch(term) {
          YTSearch({key:API_KEY,term:term}, videos => {
        this.setState({ 
            videos:videos,
            selectedVideo: videos[0] });
        });
      }

    render() {
        const videoSearch = _.debounce( term => {this.videoSearch(term)},300 )
  return (
    <div > 
         <SearchBar onSearchTermChange = { videoSearch }/>
         <VideoDetail video = {this.state.selectedVideo} />
         <VideoList
          onVideoSelect = { selectedVideo => this.setState( {selectedVideo} ) }
          videos={this.state.videos}/>
    </div>
    );
    }
}


//Put the component on the DOM.
ReactDOM.render(<App/> , document.querySelector('.container'));