const jwt = require("jsonwebtoken");
const db = require("../util/database");
const config = require("config");

class Admin {
  constructor(adminDetails) {
    (this.id = adminDetails.id), (this.name = adminDetails.name);
    this.email = adminDetails.email;
    this.password = adminDetails.password;
  }

  static async findAll() {
    const sql = "select * from admin";
    const [admins, _] = await db.execute(sql);

    const adminsObjs = [];

    if (admins.length > 0) {
      admins.forEach((adminDetails) => {
        adminsObjs.push(new Admin(adminDetails));
      });

      return adminsObjs;
    }

    return false;
  }

  static async findByEmail(email) {
    const sql = `select * from admin where email=?;`;
    const [admins, _] = await db.execute(sql, [email]);

    if (admins.length > 0) return new Admin(admins[0]);

    return false;
  }

  static async findById(id) {
    const sql = `select * from admin where id=?;`;
    const [admins, _] = await db.execute(sql, [id]);

    if (admins.length > 0) return new Admin(admins[0]);

    return false;
  }

  // without password and email
  static async findByIdAndUpdate(id, newAdmin) {
    const admin = Admin.findById(id);
    if (!admin) return false;

    const sql = `update admin set name=? where id=?`;
    const res = await db.execute(sql, [newAdmin.name, id]);

    console.log(res);
    //TODO: return accrding to result
  }

  async save() {
    let sql = "insert into admin (name,email,password) values (?,?,?);";

    await db.execute(
      sql,
      [this.name, this.email, this.password],
      (err, results) => {
        if (err) {
          throw err;
        } else {
          console.log(results);
        }
      }
    );
    this.id = (await Admin.findByEmail(this.email)).id;
  }

  generateAuthToken() {
    const token = jwt.sign(
      { id: this.id, name: this.name, email: this.email, role: "admin" },
      config.get("jwtPrivateKey")
    );
    return token;
  }
}

function validateAdmin(admin) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().min(5).max(255).required(),
    password: Joi.string().min(5).max(1024).required(),
  });

  return schema.validate(admin);
}

module.exports.Admin = Admin;
module.exports.validate = validateAdmin;
