const Joi = require('joi');
const db = require('../util/database');

class Image {
    constructor (imageDetails) {
        this.id = imageDetails.id,
        this.userId = imageDetails.userId,
        this.title = imageDetails.title,
        this.encryptedImage = imageDetails.encryptedImage
    } 

    static async findAll() {
        return db.execute('select * from image;');
    }

    static async findById(id) {
        const sql = `select * from image where id=?;`;
        const [images, _] = await db.execute(sql, [id]);

        if (images.length > 0) return images[0];

        return false;
    }

    // without password and userId
    static async findByIdAndUpdate(id, newImage) {
        const image = Image.findById(id);
        if (!image) return false;

        const sql = `update image set title=? where id=?`;
        const res = await db.execute(sql, [newImage.title, id]);

        console.log(res);
        //TODO: return accrding to result
    }

    async save() {
        let sql = 'insert into image (user_id,title,encrypted_image) values (?,?,?);';

        await db.execute(sql, [this.userId,this.title,this.encryptedImage], (err, results) => {
            if (err) {
                throw err;
            }
            else {
                console.log(results);
            }
        });
    }

}

function validateImage(image){
    const schema = Joi.object({
        userId: Joi.string().required(),
        title: Joi.string().min(3).required(),
        image: Joi.string().required(),
        // password: Joi.string().min(5).max(1024).required(),
    });

    return schema.validate(image);
}

module.exports.Image = Image;
module.exports.validate = validateImage;