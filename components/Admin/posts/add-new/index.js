import { Grid } from "@mui/material";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./index.module.css";
import Input from "../../../common/Input";
import AutoCompleteTag from "../../../common/AutoCompleteTag";
import Breadcrumb from "../../../common/Breadcrumb";
import Loading from "../../../common/Loading";
import Notification from "../../../common/Notification";

import { PostNewAdminContext } from "../../../../contexts/providers/admin/PostNewAdminProvider";
import { AuthContext } from "../../../../contexts/providers/AuthProvider";

const Index = (props) => {
  const {
    postNewAdminState,
    onChangePost,
    onChangeImagePost,
    onSubmit,
    setError,
  } = useContext(PostNewAdminContext);
  const { authState, t } = useContext(AuthContext);

  const tags = [
    {
      id: 0,
      name: "tag 1",
    },
    {
      id: 1,
      name: "tag 2",
    },
    {
      id: 2,
      name: "tag 3",
    },
  ];

  if (postNewAdminState.isLoading || authState.isLoading) {
    return <Loading isLoading={true} />;
  }

  return (
    <div className={styles["add-new"]}>
      <Notification
        title="Error"
        content={postNewAdminState.error}
        open={postNewAdminState.error != null}
        onClose={() => setError(null)}
      />
      <div className={styles.head}>
        <Breadcrumb links={[t('home_brum_admin'), t('post_brum_admin'), t('add_new_brum_admin')]} />
        <Grid container spacing={2} columns={12}>
          <Grid item xs={12} lg={8}>
            <Grid container spacing={2} columns={12}>
              <Grid item xs={12}>
                <Input
                  id="title"
                  title={t('post_name_admin')}
                  placeholder={t('post_name_placeholder_admin')}
                  isRequire={"true"}
                  name="title"
                  defaultValue={postNewAdminState.post.title}
                  onChange={onChangePost}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="content"
                  title={t('post_detail_admin')}
                  placeholder={t('post_detail_admin')}
                  isRequire={"true"}
                  name="content"
                  defaultValue={postNewAdminState.post.content}
                  onChange={onChangePost}
                  type="ckeditor"
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="description"
                  title={t('short_description_admin')}
                  placeholder={t('short_description_placeholder')}
                  name="description"
                  defaultValue={postNewAdminState.post.description}
                  onChange={onChangePost}
                  isRequire="true"
                  type="textarea"
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="slug"
                  title={t('slug_admin')}
                  placeholder={t('slug_placeholder_admin')}
                  name="slug"
                  defaultValue={postNewAdminState.post.slug}
                  onChange={onChangePost}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="meta_title"
                  title={t('meta_title_admin')}
                  placeholder={t('meta_title_placeholder_admin')}
                  name="meta_title"
                  defaultValue={postNewAdminState.post.meta_title}
                  onChange={onChangePost}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  id="meta_description"
                  title={t('meta_description_admin')}
                  placeholder={t('meta_description_placeholder_admin')}
                  name="meta_description"
                  defaultValue={postNewAdminState.post.meta_description}
                  onChange={onChangePost}
                  type="textarea"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className={styles.group}>
              <h4>{t('choose_category_admin')}</h4>
              <div className={styles.categories}>
                {postNewAdminState.categories.map((item) => (
                  <div className={styles.category} key={item.id}>
                    <input
                      type="checkbox"
                      id={"cate-" + item.id}
                      name="categories"
                      onChange={onChangePost}
                      value={item.id}
                    />
                    <label htmlFor={"cate-" + item.id}> {item.name}</label>
                    <br />
                  </div>
                ))}
                <Link href="/admin/posts/category">
                  <a>
                    <span>
                      <i className="fa-solid fa-plus"></i>
                    </span>{" "}
                    <span>{t('add_category_admin')}</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.group}>
              <h4>{t('choose_tag_admin')}</h4>
              <div className={styles.tags}>
                <AutoCompleteTag arrayObj={tags} valueObj={"name"} />
                <div className={styles.choose}>
                  {t('choose_most_tag_admin')}
                </div>
                <div className={styles["most-tag"]}>
                  <span>tag 1</span> <span>tag 2</span>
                </div>
              </div>
            </div>
            <div className={styles.group}>
              <h4>{t('choose_thumbnail_admin')}</h4>
              <div className={styles.image}>
                <div>
                  {postNewAdminState.post.thumbnail && (
                    <Image
                      className={styles["image-post"]}
                      alt="Not found"
                      src={postNewAdminState.post.thumbnail}
                      width="200"
                      height="200"
                    />
                  )}
                </div>
                <input
                  type="file"
                  id="thumbnail"
                  name="thumbnail"
                  accept="image/*"
                  onChange={onChangeImagePost}
                />
              </div>
            </div>
            <div className={styles.group}>
              <h4>{t('choose_gallery_admin')}</h4>
              <div className={styles.image}>
                <div>
                  {postNewAdminState.post.galleryImage &&
                    postNewAdminState.post.galleryImage.split(',').map((item, index) => (
                      <Image
                        key={index}
                        className={styles["image-post"]}
                        alt="Not found"
                        src={
                          item
                            ? item
                            : "https://template.hasthemes.com/alula/alula/assets/img/products/medium6.webp"
                        }
                        width="200"
                        height="200"
                      />
                    ))}
                </div>
                <input
                  type="file"
                  name="gallery_image"
                  accept="image/*"
                  multiple
                  onChange={onChangeImagePost}
                />
              </div>
            </div>
            <button className={styles.complete} onClick={onSubmit}>
            {t('submit_admin')}
            </button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Index;
