import Product from "../../../../models/Product";
import db from "../../../../utils/db";

export default async function handler(req, res) {
  await db.connect();

  switch (req.method) {
    case "GET": {
      if (req.query.featured) {
        const featuredProducts = await Product.find({ featured: true });
        return res.status(200).json(featuredProducts);
      } else if (req.query.cat) {
        const catProducts = await Product.find({ category: req.query.cat });
        return res.status(200).json(catProducts);
      } else if (req.query.query) {
        // Handle search query
        const searchQuery = req.query.query;
        const searchResults = await Product.find({
          $text: { $search: searchQuery },
        });
        return res.status(200).json(searchResults);
      } else {
        const products = await Product.find({});
        return res.status(200).json(products);
      }
    }

    case "POST": {
      const product = await Product.create({ ...req.body });
      return res.status(201).json(product);
    }
  }
}
