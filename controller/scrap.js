const {
  handleAddScrap,
  handleGetScraps,
  handleRemoveScrap,
} = require("../services/scrap");

const AddScrap = async (req, res) => {
  const scrap = req.body;
  const result = await handleAddScrap(scrap);
  res.status(201).json({ result });
};

const GetScraps = async (req, res) => {
  const { location } = req.body;
  const result = await handleGetScraps(location);
  res.status(200).json({ result });
};

const RemoveScrap = async (req, res) => {
  const { id } = req.body;
  const result = await handleRemoveScrap(id);
  res.status(200).json({ result });
};

module.exports = { AddScrap, GetScraps, RemoveScrap };
