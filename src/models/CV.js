const mongoose = require("mongoose");

const basicDetailsSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pincode: {
    type: String,
  },
  introductoryParagraph: {
    type: String,
  },
});

const educationSchema = new mongoose.Schema({
  degreeName: {
    type: String,
  },
  institution: {
    type: String,
  },
  percentage: {
    type: String,
  },
  startYear: {
    type: Number,
  },
  endYear: {
    type: Number,
  },
});

const experienceSchema = new mongoose.Schema({
  organizationName: {
    type: String,
  },
  joiningLocation: {
    type: String,
  },
  position: {
    type: String,
  },
  ctc: {
    type: String,
  },
  joiningDate: {
    type: Date,
  },
  leavingDate: {
    type: Date,
  },
  technologies: {
    type: [String],
  },
});

const projectSchema = new mongoose.Schema({
  projectTitle: {
    type: String,
  },
  teamSize: {
    type: Number,
  },
  duration: {
    type: String,
  },
  technologies: {
    type: [String],
  },
  description: {
    type: String,
  },
});

const skillSchema = new mongoose.Schema({
  skillName: {
    type: String,
  },
  percentage: {
    type: Number,
  },
});

const socialProfileSchema = new mongoose.Schema({
  socialMediaName: {
    type: String,
  },
  socialMediaLink: {
    type: String,
  },
});

const cvSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  basicDetails: {
    type: basicDetailsSchema,
  },
  education: {
    type: [educationSchema],
  },
  experience: {
    type: [experienceSchema],
  },
  projects: {
    type: [projectSchema],
  },
  skills: {
    type: [skillSchema],
  },
  socialProfiles: {
    type: [socialProfileSchema],
  },
});

const CV = mongoose.model("CV", cvSchema);

module.exports = CV;
