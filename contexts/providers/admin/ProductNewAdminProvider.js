import React, { useReducer, createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductNewAdminReducer from '../../reducers/admin/ProductNewAdminReducer'
import{ 
    setLoadingAction,
    setErrorAction,
    setProductAction,
    setPostAction,
    loadCategoriesAction,
    saveProductAction,
    savePostAction} from '../../actions/admin/ProductNewAdminAction'
import { async } from "@firebase/util";
import { app } from "../../../utils/firebase";
import { validateSlug } from "../../../utils/validate";
import { convertToSlug } from "../../../utils/convert";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

    export const ProductNewAdminContext = createContext();
    const storage = getStorage(app);
    const initState = {
        product: {},
        post:{},
        categories: [],  
        isLoading: true,
        error: null

      }
const ProductNewAdminProvider = (props)=>{
    const router = useRouter();
    const [productNewAdminState,dispatch] = useReducer(ProductNewAdminReducer,initState)

    useEffect(()=>{
        loadData()
    },[])
    useEffect(()=>{
        console.log(productNewAdminState)
    },[productNewAdminState])

    const loadData = async()=>{
        if(!router.isReady) return;
        setLoading(true)
        await loadCategories();
        setLoading(false);
    }
    const setLoading = (isLoading) => {
        setLoadingAction(isLoading)(dispatch);
      };
      const setProduct = (product) => {
        setProductAction(product)(dispatch);
      };
      const setPost = (post) => {
        setPostAction(post)(dispatch);
      };
      const setError = (error) => {
        setErrorAction(error)(dispatch);
      };
    const loadCategories = async () => {
        await loadCategoriesAction()(dispatch);
    };
    const onChangeProduct=(e)=>{
        if(e.target){
          setProduct({
            ...productNewAdminState.product,
            [e.target.name]:parseInt(e.target.value),
            post:productNewAdminState.post
          })
        }
      }

    const onChangePost = (e) => {
        if (e.target) {
          if (e.target.name == "categories") {
            const categoryEles = document.getElementsByName("categories");
            const categories = [];
            for (var i = 0; i < categoryEles.length; i++) {
              if (categoryEles[i].checked) {
                categories.push({ id: categoryEles[i].value });
              }
            }
            setPost({
              ...productNewAdminState.post,
              taxomonies: categories,
            });
          } else {
            setPost({
              ...productNewAdminState.post,
              [e.target.name]: e.target.value,
            });
          }
        } else {
          setPost({
            ...productNewAdminState.post,
            content: e.getData(),
          });
        }
      };
      const onChangeImagePost = async (e) => {
        const files = e.target.files;
        const gallery = [];
        for(var i = 0 ; i < files.length ; i ++) {
          const image = files[i];
          if (image == null) return;
          const path = "posts/" + new Date().getTime() + "-" + files[i].name;
      
          const storageRef = ref(storage, path);
      
          const uploadTask = uploadBytesResumable(storageRef, image);
      
          uploadTask.on(
            "state_changed",
            async (snapshot) => {
              switch (snapshot.state) {
                case "paused":
                  console.log("Upload is paused");
                  break;
                case "running":
                  console.log("Upload is running");
                  break;
              }
            },
            (error) => {
              console.log("Upload image fail", error);
            },
            () => {
             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                if(e.target.name == "thumbnail") {
                  setPost({
                    ...productNewAdminState.post,
                    thumbnail: downloadURL
                  });
                } else {
                  gallery.push(downloadURL);
                  if(gallery.length == files.length) {
                    setPost({
                      ...productNewAdminState.post,
                      galleryImage: `${gallery}`
                    });
                  }
                }
              });
            }
          );
      
        }
           setProduct({
            ...productNewAdminState.product,
            post:productNewAdminState.post
          })
      };
      const onSubmit = async () => {
        if(validate()) {
          setLoading(true);
        //   await savePostAction(productNewAdminState.post)(dispatch);
          await saveProductAction(productNewAdminState.product)(dispatch)
          setLoading(false);
        }
      }
    const validate=()=>{
        const {title, description, thumbnail, content, slug, taxomonies} = productNewAdminState.post;
        const {post,minPrice,maxPrice,stockQuantity,weight,width,height} = productNewAdminState.product;
        
        const titleEle = document.getElementById("title");
        const descriptionEle = document.getElementById("description");
        const slugEle = document.getElementById("slug");

        if(title == null || title.length == 0) {
            titleEle.reportValidity();
            return false;
          }
      
          if(content == null || content.length == 0) {
            setError('Content not null');
            return false;
          }
      
          if(description == null || description.length == 0) {
            descriptionEle.reportValidity();
            return false;
          }

          if(!taxomonies || taxomonies.length == 0) {
            setError('you must choose at least 1 category');
            return false;
          }
          if(thumbnail == null || thumbnail.length == 0) {
            setError('Thumbnail not null');
            return false;
          }
          
          return true;
    }
    const value ={
        router,
        productNewAdminState,
        setError,
        setLoading,
        onChangePost,
        onChangeProduct,
        onChangeImagePost,
        onSubmit
    }
    return(
        <ProductNewAdminContext.Provider value={value}>
            {props.children}
        </ProductNewAdminContext.Provider>
    )
}
export default ProductNewAdminProvider;