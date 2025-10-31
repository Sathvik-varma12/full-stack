import express from "express";
import Order from "../models/Order.js";
import { authMiddleware } from "../middleware/auth.js";
import { adminOnly } from "../middleware/admin.js";

const router = express.Router();

// Place a new order (Customer)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { items, shippingAddress, total } = req.body;
    const order = new Order({
      userId: req.user.id,
      items,
      shippingAddress,
      total,
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to place order" });
  }
});

// Get logged-in user's orders
router.get("/my", authMiddleware, async (req, res) => {
  const orders = await Order.find({ userId: req.user.id }).populate("items.productId", "title price");
  res.json(orders);
});

// Get all orders (Admin only)
router.get("/", authMiddleware, adminOnly, async (req, res) => {
  const orders = await Order.find().populate("userId", "name email").sort({ createdAt: -1 });
  res.json(orders);
});

export default router;
