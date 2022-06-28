import React, { useContext } from 'react';

import { FavoriteBlogContext } from '../../../contexts/providers/FavoriteBlogProvider';
import FavoriteBlog from './FavoriteBlog';
import Loading from "../../common/Loading";
import { AuthContext } from '../../../contexts/providers/AuthProvider';

const Index = (props) => {
  const { favoriteBlogState, router } = useContext(FavoriteBlogContext);
  const { authState } = useContext(AuthContext);
  

  if(favoriteBlogState.isLoading) {
    return <Loading isLoading={true} />
  }

  if(!authState.isLoading && !authState.user) {
    router.push("/auth");
    return ;
  }

  return (
    <>
      <FavoriteBlog />
    </>
  )
}

export default Index;