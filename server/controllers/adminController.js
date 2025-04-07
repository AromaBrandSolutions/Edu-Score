const Admin = require("../models/admin");
const jwt = require("jsonwebtoken")
const zod = require("zod");

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const admin = await Admin.findOne({ email });
  
      if (!admin) {
        return res.status(400).json({ message: 'Admin not found' });
      }
  
      const isMatch = await admin.matchPassword(password);
  
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
  
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  

module.exports = loginAdmin

