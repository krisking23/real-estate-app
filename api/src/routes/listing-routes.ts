import express from "express";
import { signup, login } from "../controllers/user.controller";
import { saveUser, auth } from "../middleware/user-auth";
import { AppDataSource } from "../db/data-source";
import { User } from "../db/user-entity";
import { Listing } from "../db/listing-entity";
import { getListings } from "../controllers/listing.controller";

const router = express.Router();

//signup endpoint
//passing the middleware function to the signup

router.post("/", auth, async (req: any, res: any) => {
  const user = await AppDataSource.manager.findOneBy(User, {
    id: req.user.id,
  });

  const data = { ...req.body, userId: user.id };
  console.log(data);

  const listing = AppDataSource.manager.create(Listing, data);

  const newListing = await AppDataSource.manager.save(listing);

  // console.log(user);
  res.send(newListing);
});

router.get("/", getListings);

export default router;
