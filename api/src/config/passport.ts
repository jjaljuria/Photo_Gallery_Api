const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/User').default;
const IUser = require('../lib/IUser');


passport.use(new localStrategy({
	usernameField: 'email',
}, async (email: string, password: string, done: Function) =>{
	const user = await User.findOne({email}).select('password');
	if(!user){
		return done(null, false, {message: 'Not User found'});
	}else{
		const match = await user.matchPassword(password);
		if(match){
			user.password = undefined;
			return done(null, user);
		}else{
			return done(null, false, {message: 'Incorrect Password'});
		}
	}

}));

passport.serializeUser((user: { id: string; }, done: Function) =>{
	done(null, user.id);
})

passport.deserializeUser((id: any, done: (arg0: any, arg1: any) => void) =>{
	User.findById(id, (err: any, user: any) =>{
		user.passoword = undefined;
		done(err, user);
	})
});
