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
      "insert into password (user_id,title,password,iv) values (?,?,?,?);";

    await db.execute(
      sql,
      [this.userId, this.title, this.password, this.iv],
      (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log(results);
        }
      }
    );
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
