import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ImageGallery } from 'components/imageGallery';
import { Searchbar } from 'components/searchbar';
import { Button } from 'components/button';
import { Loader } from 'components/loader';
import { Error } from 'components/error';
import { FetchFotos, per_page } from '../../servises/FetchFotos';
import css from './App.module.css';

export class App extends Component {
  state = {
    textSearch: '',
    photos: [],
    loading: false,
    error: null,
    page: 1,
    endPhotos: false,
  };

  componentDidUpdate = (_, prevState) => {
    const { textSearch, page, photos } = this.state;

    if (prevState.textSearch !== textSearch || prevState.page !== page) {
      this.setState({ loading: true });

      FetchFotos(textSearch, page)
        .then(responce => {
          if (responce.hits.length === 0) {
            return toast.error(`There is no photos with ${textSearch}`);
          }

          this.setState({
            photos: [...photos, ...responce.hits],
            endPhotos: responce.totalHits <= per_page * page,
          });

          // this.setState({
          //   photos: [...photos, ...responce.hits],
          // });

          // const totalHits = per_page * page;
          // if (responce.totalHits <= totalHits) {
          //   this.setState({
          //     endPhotos: true,
          //   });
          // }
        })
        .catch(error => {
          this.setState({
            error: error.message,
          });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  };

  handleSubmit = value => {
    if (value !== this.state.textSearch) {
      this.setState({
        textSearch: value,
        photos: [],
        page: 1,
        endPhotos: false,
      });
    }
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { photos, loading, endPhotos, error } = this.state;

    return (
      <div className={css.App}>
        <Searchbar onSearch={this.handleSubmit} />

        {error && <Error error={error} />}

        {loading && <Loader />}

        {photos.length > 0 && <ImageGallery photos={photos} />}

        {photos.length > 0 && !endPhotos && (
          <Button onClick={this.handleLoadMore} />
        )}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
          }}
        />
      </div>
    );
  }
}
