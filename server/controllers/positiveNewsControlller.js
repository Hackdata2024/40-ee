// // server/controllers/positiveNewsController.js
// const PositiveNews = require('../models/PositiveNews');

// const getAllPositiveNews = async (req, res) => {
//     try {
//         const positiveNews = await PositiveNews.find();
//         res.json(positiveNews);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const getPositiveNewsById = async (req, res) => {
//     const newsId = parseInt(req.params.newsId);
//     try {
//         const positiveNews = await PositiveNews.findOne({ news_id: newsId });
//         if (!positiveNews) {
//             return res.status(404).json({ error: 'Positive news not found' });
//         }
//         res.json(positiveNews);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Add more positive news controllers as needed

// module.exports = {
//     getAllPositiveNews,
//     getPositiveNewsById,
//     // Add more exported functions as needed
// };
