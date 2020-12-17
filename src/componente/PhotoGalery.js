import "../App.css";
import React from "react";
import SearchBar from "./PhotoGaleryComponents/SearchBar";

import unsplash from "./PhotoGaleryComponents/unsplash";
import ImageList from "./PhotoGaleryComponents/ImageList";

class PhotoGalery extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default PhotoGalery;
