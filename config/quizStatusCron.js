const cron = require("node-cron");
const quizModel = require("../models/quizModel");

cron.schedule('* * * * *', async () => {
    const currentTime = new Date();

    try {
        // Find quizzes that need their status updated
        const quizzes = await quizModel.find();

        // Update the status of each quiz
        quizzes.forEach(async (quiz) => {
            if (currentTime < quiz.startDate) {
                quiz.status = 'inactive';
            } else if (currentTime >= quiz.startDate && currentTime <= quiz.endDate) {
                quiz.status = 'active';
            } else {
                quiz.status = 'finished';
            }
            await quiz.save();
        })

    }
    catch (error) {
        console.error('Error updating quiz status:', error);
    }
});