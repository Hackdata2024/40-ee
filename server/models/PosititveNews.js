// server/models/PositiveNews.js
const mongoose = require('mongoose');

const positiveNewsSchema = new mongoose.Schema({
  news_id: { type: Number, required: true, unique: true },
  title: { type: String },
  source: { type: String },
  url: { type: String },
  publish_date: { type: Date },
  positive_sentiment: { type: Number },
});

const PositiveNews = mongoose.model('PositiveNews', positiveNewsSchema);

module.exports = PositiveNews;
