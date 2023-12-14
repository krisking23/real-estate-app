import { Listing } from "db/listing-entity";
import { AppDataSource } from "db/data-source";

export const createListing = async (req: any, res: any) => {
  try {
    const listing = AppDataSource.manager.create(Listing, req.body);
    const newListing = await AppDataSource.manager.save(listing);

    return res.status(201).send(newListing);
  } catch (err) {
    return res.status(409).send("Error creating listing");
  }
};
