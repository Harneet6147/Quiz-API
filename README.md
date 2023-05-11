# Quiz-API
In this API , I created 4 routes:->

POST -> To create a quiz (/quizzes)
GET  -> To get active quizzes (/quizzes/active)
GET  -> To get all quizzes (/quizzes/all)
GET  -> To get result of quiz by id (/quizzes/:id/result)

Apart from this, I have used node-cron which automatically updates the status of each quiz in the database every 1 minute to check whether the time to attempt the quiz has passed or
quiz is yet to start i.e ->

if(time to start the quiz > current time) ->>> status:inactive
if(time to start the quiz < current time && cuurent time< end time of quiz) ->>> status:active
if(current time > end time of quiz) ->>> status:finished
