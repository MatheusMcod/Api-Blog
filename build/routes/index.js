"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_controller_1 = __importDefault(require("../controllers/api_controller"));
const router = express_1.default.Router();
router.get('/api', async (req, res) => {
    const apiController = new api_controller_1.default();
    const response = await apiController.getMessage();
    return res.send(response);
});
exports.default = router;
