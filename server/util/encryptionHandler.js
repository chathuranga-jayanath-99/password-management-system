const crypto = require("crypto");
const secret = "pppppppppppppppppppppppppppppppp";

const encrypt = (text) => {
  const iv = Buffer.from(crypto.randomBytes(16));
  const cipher = crypto.createCipheriv("aes-256-ctr", Buffer.from(secret), iv);

  const encryptedText = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString("hex"),
    text: encryptedText.toString("hex"),
  };
};

const decrypt = (encryptedText) => {
  const decipher = crypto.createDecipheriv(
    "aes-256-ctr",
    Buffer.from(secret),
    Buffer.from(encryptedText.iv, "hex")
  );

  const decryptedText = Buffer.concat([
    decipher.update(Buffer.from(encryptedText.text, "hex")),
    decipher.final(),
  ]);

  return decryptedText.toString();
};

module.exports = { encrypt, decrypt };
