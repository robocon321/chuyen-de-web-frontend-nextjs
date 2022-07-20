import { app } from "./firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const storage = getStorage(app);

//import firbase from your directory

class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }
  // Starts the upload process.
  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          if (file == null) return;
          const path = "posts/" + new Date().getTime() + "-" + file.name;

          const storageRef = ref(storage, path);

          const uploadTask = uploadBytesResumable(storageRef, file);

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
                resolve({
                  default: downloadURL,
                });
              });
            }
          );
        })
    );
  }
}

export default MyUploadAdapter;
