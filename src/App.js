import React, { Component } from 'react';
import { ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getImages } from "./components/api-service";
import  Loader  from 'react-loader-spinner';


import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import Placeholder from './components/Placeholder';
import Container from './components/Container'




export default class App extends Component {
  state = {
    status: "idel",
    nameImag: '',
    page: 1,
    images: [],
    loader: false,
    showModal: false,
    modalContent: null,

  };
  componentDidUpdate(prevProps, prevState) {
    const { page, nameImag } = this.state;
    if (nameImag !== prevState.nameImag || page !== prevState.page) {
      if (page === 1) {
            this.resetImages()
      }
      this.setState({ loader: true });
            
      getImages(page, nameImag)
        .then((data) => {
          if (data.hits.length < 12) {
            toast("Больше нет изображений для загрузки((")
          }

          this.setState((prevState) => ({
            images: [...prevState.images, ...data.hits],
            status: "resolved",
          }))
        })
        .catch(() => this.setState({ status: "rejected" }))
        .finally(() => {
          this.setState({ loader: false });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        });
    }
    
  }

  setNameImage = (val) => {
    this.setState((prevState) => {
      if (prevState.nameImag === val.toLowerCase()) {
        toast("Попробуйте что-то другое");
        return;
      }
      return { nameImag: val.toLowerCase(), page: 1,}
    })
  }

  setPage = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1
      };
    });
  };

 

  resetImages = () => {
    this.setState({ images: []})
  }

  onImgClick = (id) => {
    const modalImg = this.state.images.find((img) => img.id === id);
    this.setState({ modalContent: modalImg });
    this.showModal();
  }
  
  showModal = () => {
    this.setState((prevState) => {
      return { showModal: !prevState.showModal };
    });
   }




  render() {
    const { status, showModal, images, loader, modalContent} = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.setNameImage} />
        {status === "resolved" ? (
          <>
            <ImageGallery images={images} onImgClick={this.onImgClick} />
            <Button onClick={this.setPage} />
          </>
        ) : null}
        {loader && (
          <Loader
            className="Loader"
            type="Grid"
            color="#9900cc"
            height={180}
            width={180}
          />
        )}
        {status === "rejectid" ? (
          <Placeholder text="Произошла ошибка при получении изображения" />
        ) : null}
        {showModal && (
          <Modal showModal={this.showModal}>
            <img src={modalContent.largeImageURL} alt={modalContent.tags} />
          </Modal>
        )}
        

        <ToastContainer autoClose={3000}/>
      </Container>
    );

   }

}