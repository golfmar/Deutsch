export const loadImage = async (Path, Url) => {
  try {
    const imageReference = storageRef(storage, Path);
    Url.value = await getDownloadURL(imageReference);
  } catch (err) {
    console.error("Ошибка загрузки изображения:", err);
  }
};
