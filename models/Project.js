const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        targetGoal: {
            type: String,
            required: false,
        },

        categories: {
            type: Array,
            required: false,
        },

        deadline: {
            type: String,
            required: true,
        },

        profilePic:{
            type: String,
            default: ' '
        },

        story: {
            type: String,
            required: false,
        },

        
 
    },
  {timestamps: true}
);

module.exports = mongoose.model('Project', ProjectSchema); 