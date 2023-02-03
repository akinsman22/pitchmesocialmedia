import { RequestHandler } from "express";
import { User, IUser } from "../models/user";
import { comparePass, tknSignUser, hashedPass } from "../services/auth";

export const registerUser: RequestHandler = async (req, res, next) => {
    const newUser: IUser = new User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        age: req.body.age

    });
    try {
        if (newUser.email && newUser.password) {
            const hashPassword = await hashedPass(newUser.password)
            newUser.password = hashPassword;
            const create = await newUser.save();
            res.status(201).json({
                email: create.email,
                userId: create._id
            });
        }
        else {
            res.status(400).send('Email and password required.')
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
}

export const signedUser: RequestHandler = async ( req, res, next ) => {
    const validUser: IUser | null = await User.findOne(
        { email:req.body.email }
    );
    if (validUser) {
        const matchPass = await comparePass(req.body.password, validUser.password);

        if (matchPass) {
            const token = await tknSignUser(validUser);
            res.status(200).json({ token });
        }
        else {
            res.status(401).json('Password is not valid');
        }
    }
    else {
         res.status(401).json('Email is not valid');
    }
}
