import React from "react";
import FavoriteBlog from "../../components/Client/blog-favorite/index";

import FavoriteBlogProvider from "../../contexts/providers/FavoriteBlogProvider";

const FavoriteBlogPage = (props) => {
  return (
    <FavoriteBlogProvider>
      <FavoriteBlog />
    </FavoriteBlogProvider>
  );
};

export default FavoriteBlogPage;
