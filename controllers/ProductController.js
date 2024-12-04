const Products = require('../Models/ProductModal.js');

// posting products to the database
 const CreatProducts= async (req, res) => {
    try {
      const produdct = await Products.create(req.body);
      res.status(200).json(produdct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  
// fetching products from the database
const getProducts = async (req, res) => {
    try {
      const Getproducts = await Products.find({});
      res.status(200).json(Getproducts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // fetching a single product from the database
  const getProductsById = async (req, res) => {
    try {
      const id = req.params.id;
      const Getproduct = await Products.findById(id);
      res.status(200).json(Getproduct);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  //update single product by Iid
    const UpdateProducts = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Products.findByIdAndUpdate(id, req.body);
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Delete product by Id
  
  const DeleteProductsByid = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Products.findByIdAndDelete(id); // Await the deletion
  
      if (product) {
        return res.status(200).json({ message: "Product deleted successfully" });
      } else {
        return res.status(404).json({ message: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


  module.exports = {
    CreatProducts,
    getProducts,
    getProductsById,
    UpdateProducts,
    DeleteProductsByid,
  }