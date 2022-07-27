const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarPhotoSelect = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const resetAvatar = avatarPreview.src;
const housePhotoSelect = document.querySelector('.ad-form__input');
const housePreview = document.querySelector('.ad-form__photo');

avatarPhotoSelect.addEventListener('change', () => {
  const file = avatarPhotoSelect.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((fileType) => fileName.endsWith(fileType));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(file);
  }
});

const createImg = (pathToPhoto) => {
  const img = document.createElement('img');
  img.alt = 'Фотография жилья';
  img.style = 'width: 60px; height: 60px; object-fit: cover';
  img.src = pathToPhoto;

  housePreview.appendChild(img);
};

housePhotoSelect.addEventListener('change', () => {
  const file = housePhotoSelect.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((fileType) => fileName.endsWith(fileType));

  if (matches) {
    housePreview.innerHTML = '';
    createImg(URL.createObjectURL(file));
  }
});

const resetPreview = () => {
  avatarPreview.src = resetAvatar;
  housePreview.innerHTML = '';
};

export { resetPreview };
