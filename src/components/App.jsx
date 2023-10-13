import { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './api';

export class App extends Component {
  state = {
    gallery: [],
    page: '1',
    loader: false,
    query: '',
  };

  onchangeInput = inValue => {
    this.setState({ query: inValue });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== this.state.query) {
      console.log(query);
      try {
        const images = await fetchImages(page, query);
        const imagesGallery = images.hits;
        console.log(imagesGallery);
        this.setState({ gallery: imagesGallery });
      } catch (error) {}
    }
  }

  render() {
    const { gallery } = this.state;
    return (
      <div>
        <Searchbar onChange={this.onchangeInput} />
        <ImageGallery images={gallery} />
        {this.state.gallery.length > 0 && <Button />}
      </div>
    );
  }
}
