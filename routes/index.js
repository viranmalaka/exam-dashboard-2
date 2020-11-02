var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var JSZip = require('jszip');
const ExamModel = require('./models/exams');

/* GET home page. */
router.get('/get-configs/:id', function(req, res, next) {
  ExamModel.findOne({examId: req.params.id}, (err, data) => {
    if(err) {
      console.log('get config', {err});
      res.status(404).jsonp({success: false});
    } else {
      if (data) {
        res.status(200).jsonp({
          success: true,
          nameSelector: '.dropdown-item.text-username.menu-action',
          ...data._doc
        })
      } else {
        console.log('Exam Not found');
        res.status(404).jsonp({success: false});
      }
    }
  });
});

router.post('/push-images', function(req, res, next) {
  const ext = req.body.base64.split(';')[0].match(/jpeg|png|gif/)[0];
  const data = req.body.base64.replace(/^data:image\/\w+;base64,/, '');
  const name = req.body.name;

  fs.writeFile(path.join(__dirname, '../public/images/' + name + '.' + ext), data, 'base64', (err) => {
    if(err) {
      console.log('image save', {err});
    }
    console.log('image saved success');
  });
  res.jsonp({success: true});
});

router.post('/create-exam', (req, res, next) => {
  const exam = new ExamModel(req.body);
  ExamModel.find({examId: req.body.examId}, (err, data) => {
    if(err || data.length > 0) {
      console.log('Create exam', {err, length: data.length});
      res.status(400).jsonp({success: false, err, data});
    } else {
      exam.save((err, data) => {
        if(err) {
          console.log('Create Exam on save', {err});
          res.status(400).jsonp({success: false, err});
        } else {
          res.status(200).jsonp({success: true, newExam: data});
        }
      })
    }
  })
});

router.get('/get-exams', (req, res, next) => {
  ExamModel.find((err, data) => {
    if(err) {
      console.log('Get exams', {err});
      res.jsonp({success: false, data: []});
    } else {
      res.jsonp({success: true, data});
    }
  })
});

router.delete('/delete-exam/:id', (req, res, next) => {
  ExamModel.findByIdAndDelete(req.params.id, {}, (err, data)=> {
    if(err) {
      console.log('Delete exams', {err});
      res.status(400).jsonp({success: false});
    } else {
      res.status(200).jsonp({success: true});
    }
  } );
});

router.get('/all-images', (req, res, next) => {
  fs.readdir(path.join(__dirname, '../public/images/'), function(err, filenames) {
    if (err) {
      console.log('Get all images', {err});
      res.status(500).jsonp({success: false});
      return;
    }
    filenames.shift();
    res.status(200).jsonp({success: true, filenames})
  });
})

router.get('/download/:examId', (req, res, next) => {
  fs.readdir(path.join(__dirname, '../public/images/'), function(err, filenames) {
    if (err) {
      console.log('Download', {err});
      res.status(500).jsonp({success: false});
      return;
    }
    const zip = new JSZip();

    const examfiles = filenames.filter(name => name.startsWith(req.params.examId));
    examfiles.forEach(f => {
      zip.file(f, fs.readFileSync(path.join(__dirname, '../public/images/', f)));
    });

    const filename = req.params.examId + '_' + Date.now() + '-out.zip';
    zip
      .generateNodeStream({ streamFiles: true })
      .pipe(fs.createWriteStream(filename))
      .on('finish', function () {
        const filePath = path.join(__dirname, '../', filename);
        res.download(filePath);
        setTimeout(() => {
          fs.unlink(filePath, function (err) {
            if (!err) console.log('File deleted!');
          });
        }, 300000);
      });
  });
});

module.exports = router;