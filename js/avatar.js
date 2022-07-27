const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const selectAvatarFile = document.querySelector('.ad-form-header__input');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const resetAvatar = previewAvatar.src;
const selectHousingFile = document.querySelector('.ad-form__input');
const previewHousing = document.querySelector('.ad-form__photo');

selectAvatarFile.addEventListener('change', () => {
  const file = selectAvatarFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
});

const createImg = (pathToPhoto) => {
  const img = document.createElement('img');
  img.alt = 'Фотография жилья';
  img.style = 'width: 60px; height: 60px; object-fit: cover';
  img.src = pathToPhoto;

  previewHousing.appendChild(img);
};

selectHousingFile.addEventListener('change', () => {
  const file = selectHousingFile.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewHousing.innerHTML = '';
    createImg(URL.createObjectURL(file));
  }
});

const previewReset = () => {
  previewAvatar.src = resetAvatar;
  previewHousing.innerHTML = '';
};

export { previewReset };
