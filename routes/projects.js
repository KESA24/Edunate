
const router = require('express').Router();
const User = require('../models/User');
const Project = require('../models/Project');

// Create New Project
router.post('/', async (req, res) => {
    const newProject = new Project (req.body);
    try {
        const savedProjet = await newProject.save();
        res.status(200).json(savedProject)
    } catch (error) {
        res.status(500).json(error);
    }

});


// Update Project
router.put('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
         if (project.username === req.body.username) {
             try {
                const updatedProject = await Project.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body,
                    },
                    {new: true}
                );
                res.status(200).json(updatedProject);
             } catch (error) {
                 res.status(500).json(error);
             }
         } else {
             res.status(401).json('You can only update your projects')
         }

    } catch (error) {
        res.status(500).json(error);
    }

});

// Delete Project
router.delete('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
         if (project.username === req.body.username) {
             try {
                await project.delete();
                res.status(200).json('Project deleted successfully');
             } catch (error) {
                 res.status(500).json(error);
             }
         } else {
             res.status(401).json('You can only delete your projects')
         }

    } catch (error) {
        res.status(500).json(error);
    }

});

// Get Project

router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        res.status(200).json(post);

    } catch (error) {
        res.status(500).json(error);
    }

});


// Get All projects
router.get('/', async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let projects;
        if (username) {
            projects = await Project.find({username});            
        } else if (catName){
            projects = await Project.find({
                categories: {
                    $in: [catName],
                },
            });
            
        } else {
            projects = await Project.find();
        }
        res.status(200).json(projects);

    } catch (error) {
        res.status(500).json(error);
    }

});

module.exports = router