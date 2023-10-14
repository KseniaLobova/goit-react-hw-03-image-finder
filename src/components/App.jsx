import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './api';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    gallery: [],
    page: 1,
    loader: false,
    query: '',
    error: false,
    totalPage: 0,
  };

  onchangeInput = inValue => {
    this.setState({ query: inValue, page: 1, gallery: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    console.log(page);
    console.log(query);
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loader: true });

        const images = await fetchImages(page, query);
        const totalPage = Math.floor(images.totalHits / 12);
        this.setState({ totalPage: totalPage });
        const imagesGallery = images.hits;
        console.log(imagesGallery);

        if (!imagesGallery.length) {
          this.setState({ error: true });
          toast.error(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }

        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...imagesGallery],
        }));
      } catch (error) {
        this.setState({ error: true });
        toast.error('Whoops! Error! Please reload this page!');
      } finally {
        this.setState({ loader: false });
      }
    }
  }

  render() {
    const { gallery, totalPage, page } = this.state;
    return (
      <div>
        <Searchbar onChange={this.onchangeInput} />
        {gallery.length > 0 && <ImageGallery images={gallery} />}
        {gallery.length > 0 && page < totalPage && (
          <Button loadMore={this.handleLoadMore} />
        )}
        {this.state.loader === true && <Loader />}
        {this.state.error === true && <Toaster />}
      </div>
    );
  }
}
