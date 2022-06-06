const Joi = require("joi");
const db = require("../util/database");

class Password {
  constructor(passwordDetails) {
    (this.id = passwordDetails.id),
      (this.userId = passwordDetails.userId),
      (this.title = passwordDetails.title),
      (this.password = passwordDetails.password),
      (this.iv = passwordDetails.iv);
  }

  static async findAll() {
    const [passwords, _] = await db.execute("select * from password;");

    if (passwords.length > 0) return passwords;

    return false;
  }

  static async findAllByUser(userId) {
    const [passwords, _] = await db.execute(
      "select * from password where user_id=? order by id desc",
      [userId]
    );

    if (passwords.length > 0) return passwords;

    return false;
  }

  static async findById(id) {
    const sql = `select * from password where id=?;`;
    const [passwords, _] = await db.execute(sql, [id]);
    passwords[0].userId = passwords[0].user_id;

    if (passwords.length > 0) return new Password(passwords[0]);

    return false;
  }

  // without password and userId
  static async findByIdAndUpdate(id, newPassword) {
    const password = Password.findById(id);
    if (!password) return false;

    const sql = `update password set title=? where id=?`;
    const res = await db.execute(sql, [newPassword.title, id]);

    console.log(res);
    //TODO: return accrding to result
  }

  async save() {
    let sql =
      "insert into password (user_id,title,password,iv,strength) values (?,?,?,?,?);";

    await db.execute(
      sql,
      [this.userId, this.title, this.password, this.iv, this.strength],
      (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log(results);
        }
      }
    );
  }

  addPasswordStrength() {
    this.strength = this.measureStrength(this.password);
  }

  measureStrength() {
    // [a-z] 0.25
    // [A-Z] 0.25
    // [1-9] 0.25
    // [!@] 0.25

    const lengths = [
      (this.password.match(/[0-9]/g) || []).length,
      (this.password.match(/[A-Z]/g) || []).length,
      (this.password.match(/[a-z]/g) || []).length,
      (this.password.match(/[^A-Za-z0-9]/g) || []).length,
    ];
    console.log(lengths);
    const strengths = [];

    lengths.forEach((length) => {
      const strength = length >= 3 ? 0.25 : (length / 3) * 0.25;
      strengths.push(strength);
    });

    return strengths.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  }
}

function validatePassword(password) {
  const schema = Joi.object({
    userId: Joi.string().required(),
    title: Joi.string().min(3).required(),
    password: Joi.string().min(5).max(1024).required(),
  });

  return schema.validate(password);
}

module.exports.Password = Password;
module.exports.validate = validatePassword;
