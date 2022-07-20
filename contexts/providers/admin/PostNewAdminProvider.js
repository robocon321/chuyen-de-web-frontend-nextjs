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


import PostNewAdminReducer from "../../reducers/admin/PostNewAdminReducer";
import {
  setPostAction,
  setErrorAction,
  setLoadingAction,
  loadCategoriesAction,
  savePostAction
} from "../../actions/admin/PostNewAdminAction";

const storage = getStorage(app);

const initState = {
  post: {},
  categories: [],
  isLoading: true,
  error: null,
};

export const PostNewAdminContext = createContext();

const PostNewAdminProvider = (props) => {
  const router = useRouter();
  const [postNewAdminState, dispatch] = useReducer(
    PostNewAdminReducer,
    initState
  );

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    console.log(postNewAdminState);
  }, [postNewAdminState]);

  const loadData = async () => {
    if (!router.isReady) return;
    setLoading(true);
    await loadCategories();
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
          ...postNewAdminState.post,
          taxomonies: categories,
        });
      } else {
        setPost({
          ...postNewAdminState.post,
          [e.target.name]: e.target.value,
        });
      }
    } else {
      setPost({
        ...postNewAdminState.post,
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
                ...postNewAdminState.post,
                thumbnail: downloadURL
              });
            } else {
              gallery.push(downloadURL);
              if(gallery.length == files.length) {
                setPost({
                  ...postNewAdminState.post,
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
      await savePostAction(postNewAdminState.post)(dispatch);
      setLoading(false);
    }
  }

  const validate = () => {
    const {title, description, thumbnail, content, slug, taxomonies} = postNewAdminState.post;
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
        ...postNewAdminState.post,
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
    postNewAdminState,
    setError,
    setLoading,
    onChangePost,
    onChangeImagePost,
    onSubmit
  };

  return (
    <PostNewAdminContext.Provider value={value}>
      {props.children}
    </PostNewAdminContext.Provider>
  );
};

export default PostNewAdminProvider;
