const { Router } = require("express");
const {
  phonesGet,
  phonesPut,
  phonesPost,
  phonesDelete,
  phonesPatch,
} = require("../controllers/phones.controller");

const router = Router();

router.get("/", phonesGet);

router.post("/", phonesPost);

router.put("/:id", phonesPut);

router.patch("/", phonesPatch);

router.delete("/", phonesDelete);

module.exports = router;
