import React, { Component } from "react";
import styles from "./SearchBar.module.css";
import { toast } from "react-toastify";




export default class SearchBar extends Component {
    state = {
        nameImag: "",
    };

    handleNameImag = e => {
        this.setState({ nameImag: e.currentTarget.value.toLowerCase() })
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.nameImag.trim() === '') {            
            toast("Введите имя изображения!!!");
            return;
        }
        this.props.onSubmit(this.state.nameImag)
        this.setState({ nameImag: '' })
                
    }

   

    render() {
        const { nameImag } = this.state;
        return (
            
            <header className={styles.Searchbar}>
                <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
                    <button type="submit" className={styles.button}>
                        <span className="styles.SearchForm-button-label">Поиск</span>
                    </button>

                    <input
                       onChange={this.handleNameImag}
                       className={styles.input}
                       type="text"
                       autoComplete="off"
                       autoFocus
                       placeholder="Поиск изображения и фото"
                       value={nameImag}
                    />
                </form>
            </header>
        );
    }
}