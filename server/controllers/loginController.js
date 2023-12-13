const db = require("../models");
const jwt = require('jsonwebtoken');
const employee =db.employee;


const Login= async (req, resp) => {
    try {
      const employees = await employee.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (employees) {
        if (req.body.password === employees.password) {
          const employeeId = employees.employee_id;
          const name = employees.name;
          const token = jwt.sign({ name }, "jwt-secret-key", { expiresIn: '1d' });
  
          resp.cookie('token', token);
          return resp.json({ Status: "Success", token: token, id: employeeId });
        } else {
          return resp.json({ Error: "Password not match" });
        }
      } else {
        return resp.json({ Error: "Login error" });
      }
    } catch (err) {
      console.error(err);
      return resp.json({ Error: "Login error" });
    }
  };
  
  
module.exports = {
    Login
  };