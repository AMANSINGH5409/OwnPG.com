import express from "express";
import {
  getAllPgs,
  getPgBySearch,
  getPg,
  createPg,
  updatePg,
  deletePg,
  likePg,
  test,
} from "../controllers/pgController.js";
import { checkAuth, checkAuthAndIsOwner } from "../middleware/authenticate.js";
const router = express.Router();

router.get("/", getAllPgs);
router.get("/:id", getPg);
router.get("/search", getPgBySearch);
router.post("/", checkAuth, createPg);
router.patch("/:id", checkAuthAndIsOwner, updatePg);
router.delete("/:id", checkAuthAndIsOwner, deletePg);
router.patch("/:id/likePg", likePg);
router.post("/test", checkAuthAndIsOwner, test);

export default router;
