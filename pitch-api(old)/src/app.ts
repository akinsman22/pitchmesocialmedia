import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const mongodbString: string = 'mongodb://localhost:27017/pitchmeDB';

mongoose.connect(mongodbString).then(
    () => console.log('Database connected!'),
    err => console.log('Connection to database error.', err)
);

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/api/pitches');
app.use('/api/users', userRoutes);

// Middware


app.use((req, res, next ) => {
    res.status(404).end();
})

app.listen(3000);
