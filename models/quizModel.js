const mongoose = require("mongoose");


const QuizSchema = mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: [{
        type: String,
        required: true
    }],
    rightAnswer: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    endDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        default: "inactive"
    }

});

const quizModel = mongoose.model("quizzes", QuizSchema);
module.exports = quizModel;