const express = require("express");
const router = express.Router();
const quizModel = require("../models/quizModel");


router.route("/quizzes")
    .post(async (req, res) => {

        try {
            const { question, options, rightAnswer, startDate, endDate } = req.body;
            const quiz = await quizModel.create({
                question,
                options,
                rightAnswer,
                startDate,
                endDate
            });

            if (!quiz) {
                return res.json("Plese enter all fields");
            }

            res.json({
                "message": "Quiz posted",
                "Quiz": quiz
            })

        } catch (error) {
            console.log(error);
            res.json(error);
        }
    });

router.route("/quizzes/active")
    .get(async (req, res) => {

        try {
            const activeQuizzes = await quizModel.find({ status: "active" });

            res.json({
                "message": "Follwing is the list of active quizzes",
                "List": activeQuizzes
            })

        } catch (error) {

            console.log(error);
            res.json(error);
        }

    });

router.route("/quizzes/:id/result")
    .get(async (req, res) => {

        try {
            const quiz = await quizModel.findById(req.params.id);
            //console.log(quiz);

            if (!quiz) {
                return res.json({
                    "message": "!!!Oops..Quiz not found"
                });
            }

            res.json({
                "result": quiz.rightAnswer
            });

        } catch (error) {
            console.log(error);
            res.json(error);
        }
    });

router.route("/quizzes/all")
    .get(async (req, res) => {

        try {
            const Quizzes = await quizModel.find();

            res.json({
                "message": "Follwing is the list of all quizzes",
                "List": Quizzes
            })

        } catch (error) {

            console.log(error);
            res.json(error);
        }

    });


module.exports = router;