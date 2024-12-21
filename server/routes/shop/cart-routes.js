const express = require("express");
const router = express.Router();
const {
  fetchCartItems,
  addToCart,
  updateCartItemQty,
  deleteCartItem,
} = require("../../controllers/shop/cart-controller");

router.post("/add", addToCart);
router.get("/:userId", fetchCartItems);
router.patch("/update-cart", updateCartItemQty);
router.delete("/:userId/:productId", deleteCartItem);

module.exports = router;
