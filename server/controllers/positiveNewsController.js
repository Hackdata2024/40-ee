// // server/controllers/positiveNewsController.js

const axios = require('axios');
const Sentiment = require('sentiment');


const sentiment = new Sentiment();
const API_KEY = 'b7484077c5bc40989fdd905d41cd3b1b';

const getPositiveNews = async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                apiKey: API_KEY,
                country: 'in',
                category: 'health',
            },
        });

        const articles = response.data.articles;
        const positiveNews = articles.filter(article => {
            const result = sentiment.analyze(article.title);
            return result.score > -0.1;
        }).map(article => ({
            title: article.title,
            url: article.url,
        }));
        
        res.json(positiveNews);
    } catch (error) {
        console.error('Error fetching positive news:', error);
        res.status(500).json({ message: 'Failed to fetch positive news' });
    }
};

module.exports = {
    getPositiveNews,
};