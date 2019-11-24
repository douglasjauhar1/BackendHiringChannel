const express = require('express')
const Route = express.Router()
const getCompany = require('../controller/company')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './src/assets/image/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 5
  // },
  fileFilter: fileFilter
});
Route

  .get('/', getCompany.companyPromise)
  .post('/', upload.single('logo'),getCompany.companyPost)
  .put('/:id', getCompany.companyPatch)
  .delete('/:id', getCompany.companyDelete)
  .get('/page', getCompany.companyPage)

module.exports = Route
