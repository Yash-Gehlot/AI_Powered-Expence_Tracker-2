import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ForgotPasswordRequests = sequelize.define("ForgotPassword", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
export default ForgotPasswordRequests;
