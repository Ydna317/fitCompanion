// const router = require('express').Router();
// const Workout = require('../models/workout.js');

// router.post('/api/workouts', (req, res) => {
//   Workout.create({})
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// router.put('/api/workouts/:id', ({ body, parameters }, res) => {
//   Workout.findByIdAndUpdate(
//     parameters.id,
//     { $push: { exercises: body } }
//   )
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// router.get('/api/workouts', (req, res) => {
//   Workout.combinedWorkouts([
//     {
//       $addFields: {
//         totalDuration: {
//           $sum: '$exercises.duration',
//         },
//       },
//     },
//   ])
//     .then((dbWorkouts) => {
//       res.json(dbWorkouts);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// router.get('/api/workouts/range', (req, res) => {
//   Workout.combinedWorkouts([
//     {
//       $addFields: {
//         totalDuration: {
//           $sum: '$exercises.duration',
//         },
//       },
//     },
//   ])
//     .sort({ _id: -1 })
//     .limit(7)
//     .then((dbWorkouts) => {
//       console.log(dbWorkouts);
//       res.json(dbWorkouts);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// router.delete('/api/workouts', ({ body }, res) => {
//   Workout.deletebyID(body.id)
//     .then(() => {
//       res.json(true);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// module.exports = router;
