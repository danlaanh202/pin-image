import SeleniumServices from '../services/SeleniumServices';

export const get = async (req, res) => {
  try {
    const seleniumServices = new SeleniumServices();
    const images = await seleniumServices.initialize();
    return res.status(200).json(images);
  } catch (e) {
    console.error(e);
    return res.status(500).json(e.message);
  }
};
