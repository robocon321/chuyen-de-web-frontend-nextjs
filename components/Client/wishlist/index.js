import React, { useContext } from 'react';

import Loading from '../../common/Loading';
import Wishlist from './Wishlist';
import { WishlistContext } from '../../../contexts/providers/WishlistProvider';
import { AuthContext } from '../../../contexts/providers/AuthProvider';

const Index = props => {
  const { favoriteProductState, router } = useContext(WishlistContext);
  const { authState } = useContext(AuthContext);

  if(favoriteProductState.isLoading) {
    return <Loading isLoading={true} />
  }

  if(!authState.isLoading && !authState.user) {
    router.push("/auth");
    return ;
  }
  return (
    <>
      <Wishlist />
    </>
  )
}

export default Index;