const Joi = require('joi');
const db = require('../util/database');

class Image {
    constructor (imageDetails) {
        this.id = imageDetails.id,
        this.userId = imageDetails.userId,
        this.title = imageDetails.title,
        this.image = imageDetails.image
        this.iv = imageDetails.iv;
    } 

    static async findAll() {
        return db.execute('select id,user_id,title from image;');
    }

    static async findAllByUser(userId) {
        const images = await db.execute(
          "select id,user_id,title from image where user_id=? order by id desc",
          [userId]
        );
        return images;
      }

    static async findById(id) {
        const sql = `select * from image where id=?;`;
        const [images, _] = await db.execute(sql, [id]);
        return images[0]
        if (images.length > 0) return images[0];

        return false;
    }

    // without image and userId
    static async findByIdAndUpdate(id, newImage) {
        const image = Image.findById(id);
        if (!image) return false;

        const sql = `update image set title=? where id=?`;
        const res = await db.execute(sql, [newImage.title, id]);

        console.log(res);
        //TODO: return accrding to result
    }

    async save() {
        let sql = 'insert into image (user_id,title,encrypted_image,iv) values (?,?,?,?);';

        await db.execute(sql, [this.userId,this.title,this.image,this.iv], (err, results) => {
            if (err) {
                throw err;
            }
            else {
                console.log(results);
            }
        });
    }

    static async deleteById(id) {
        const sql = "delete from image where id = ?;";
        const res = await db.execute(sql, [id]);

        console.log(res);
    } 

}

function validateImage(image){
    const schema = Joi.object({
        userId: Joi.string().required(),
        title: Joi.string().min(3).required(),
        image: Joi.string().required(),
        // image: Joi.string().min(5).max(1024).required(),
    });

    return schema.validate(image);
}

module.exports.Image = Image;
module.exports.validate = validateImage;