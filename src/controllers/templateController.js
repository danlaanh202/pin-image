export const save = async (req, res) => {
  try {
    const {imageList, templateNumber} = req.body;
    const savedData = await db.template.save({
      imageList,
      templateNumber
    });
    return res.status(200).json(savedData);
  } catch (e) {
    return res.status(500).json(e.message);
  }
};

export const get = async (req, res) => {
  try {
  } catch (e) {
    return res.status(500).json(e.message);
  }
};
