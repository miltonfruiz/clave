const Model = require('../models/Model');

const getAll = async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data' });
  }
};

const create = async (req, res) => {
  try {
    const model = new Model(req.body);
    await model.save();
    res.json(model);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating data' });
  }
};

const getById = async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching data' });
  }
};

const update = async (req, res) => {
  try {
    const data = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating data' });
  }
};

const deleteById = async (req, res) => {
  try {
    await Model.findByIdAndDelete(req.params.id);
    res.json({ message: 'Data deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting data' });
  }
};

module.exports = { getAll, create, getById, update, deleteById };