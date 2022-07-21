import React, { useReducer, createContext, useEffect } from "react";
import { useRouter } from "next/router";

import { app } from "../../../utils/firebase";
import { validateSlug } from "../../../utils/validate";
import { convertToSlug } from "../../../utils/convert";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";


import PostUpdateAdminReducer from "../../reducers/admin/PostUpdateAdminReducer";
import {
  setPostAction,
  setErrorAction,
  setLoadingAction,
  loadCategoriesAction,
  updatePostAction,
  loadPostAction
} from "../../actions/admin/PostUpdateAdminAction";

const storage = getStorage(app);

const initState = {
  post: {},
  categories: [],
  isLoading: true,
  error: null,
};

export const PostUpdateAdminContext = createContext();

const PostUpdateAdminProvider = (props) => {
  const router = useRouter();
  const [postUpdateAdminState, dispatch] = useReducer(
    PostUpdateAdminReducer,
    initState
  );

  useEffect(() => {
    if (!router.isReady) return;
    loadData();
  }, [router.query]);

  useEffect(() => {
    console.log(postUpdateAdminState);
  }, [postUpdateAdminState]);

  const loadData = async () => {
    setLoading(true);
    await loadCategories();
    await loadPost(router.query.slug);
    setLoading(false);
  };

  const setLoading = (isLoading) => {
    setLoadingAction(isLoading)(dispatch);
  };

  const setError = (error) => {
    setErrorAction(error)(dispatch);
  };

  const setPost = (post) => {
    setPostAction(post)(dispatch);
  };

  const loadCategories = async () => {
    await loadCategoriesAction()(dispatch);
  };

  const loadPost = async (slug) => {
    await loadPostAction(slug)(dispatch);
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
          ...postUpdateAdminState.post,
          taxomonies: categories,
        });
      } else {
        setPost({
          ...postUpdateAdminState.post,
          [e.target.name]: e.target.value,
        });
      }
    } else {
      setPost({
        ...postUpdateAdminState.post,
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
                ...postUpdateAdminState.post,
                thumbnail: downloadURL
              });
            } else {
              gallery.push(downloadURL);
              if(gallery.length == files.length) {
                setPost({
                  ...postUpdateAdminState.post,
                  galleryImage: `${gallery}`
                });
              }
            }
          });
        }
      );
  
    }
  };

  const onSubmit = async () => {
    if(validate()) {
      setLoading(true);
      await updatePostAction(postUpdateAdminState.post)(dispatch);
      setLoading(false);
    }
  }

  const validate = () => {
    const {title, description, thumbnail, content, slug, taxomonies} = postUpdateAdminState.post;
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

    if(!slug || slug.length == 0) {
      setPost({
        ...postUpdateAdminState.post,
        slug: convertToSlug(title)
      });
      slugEle.setCustomValidity('Slug is null. We will get your title and convert to slug');
      slugEle.reportValidity();
      return false;
    }

    if(!validateSlug(slug)) {
      slugEle.setCustomValidity('Format slug incorrect');
      slugEle.reportValidity();
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

  const value = {
    router,
    postUpdateAdminState,
    setError,
    setLoading,
    onChangePost,
    onChangeImagePost,
    onSubmit
  };

  return (
    <PostUpdateAdminContext.Provider value={value}>
      {props.children}
    </PostUpdateAdminContext.Provider>
  );
};

export default PostUpdateAdminProvider;
