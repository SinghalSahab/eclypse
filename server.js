import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3003;

app.use(cors());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Mock data for goods
const goods = [
  {
    id: '1',
    name: 'Silhouette No. 1 – Vermilion',
    price: 7999,
    shipping: 200,
    tax: 1400,
    image: '/images/silhouette1.jpg'
  },
  // Add more goods as needed
];

// Route to get details of a good by ID
app.get('/buy/:itemId', (req, res) => {
  const { itemId } = req.params;
  const item = goods.find(g => g.id === itemId);

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  // Calculate before tax
  const beforeTax = item.price - item.tax;

  res.json({
    name: item.name,
    price: item.price,
    shipping: item.shipping,
    beforeTax,
    tax: item.tax,
    image: item.image,
    orderTotal: item.price + item.shipping
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 