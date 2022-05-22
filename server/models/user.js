const jwt = require('jsonwebtoken');
const Joi = require('joi');
const db = require('../util/database');
const config = require('config');

class User{
    constructor(userDetails) {
        this.name = userDetails.name;
        this.email = userDetails.email;
        this.password = userDetails.password;
        this.gender = userDetails.gender;
        this.id = userDetails.id;
    }

    static async fetchAll() {
        return db.execute('select * from user;');
    }

    static async findById(id) {
        const sql = `select * from user where id=?;`;
        const [users, _] = await db.execute(sql, [id]);

        if (users.length > 0) return users[0];

        return false;
    }

    static async findByEmail(email) {
        let sql = `select * from user where email=?;`;
        const [users, _] = await db.execute(sql, [email]);

        if (users.length > 0) {
            return new User(users[0]);
        }
        return false;
    }
    
    // without password and email
    static async findByIdAndUpdate(id, newUser) {
        const user = User.findById(id);
        if (!user) return false;

        const sql = `update user set name=?,gender=? where id=?`;
        const res = await db.execute(sql, [newUser.name,newUser.gender,id]);

        console.log(res);
        //TODO: return accrding to result
    }

    async save() {
        let sql = 'insert into user (name,email,password,gender) values (?,?,?,?);';

        await db.execute(sql, [this.name,this.email,this.password,this.gender], (err, results) => {
            if (err) {
                throw err;
            }
            else {
                console.log(results);
            }
        });
        this.id = (await User.findByEmail(this.email)).id;
    }

    generateAuthToken(){
        const token = jwt.sign({ id: this.id, name: this.name, email: this.email, gender: this.gender, role: 'user' }, config.get('jwtPrivateKey'));
        return token;
    }
};

function validateUser(user){
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
        email: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(1024).required(),
        gender: Joi.string().required()
    });

    return schema.validate(user);
}

module.exports.User = User;
module.exports.validate = validateUser;