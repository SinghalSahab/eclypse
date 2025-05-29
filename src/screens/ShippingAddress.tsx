import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MOCK_USER = {
  firstName: 'John',
  lastName: 'Doe',
  street: '123 Main St',
  apt: '4B',
  state: 'CA',
  zip: '90001',
};

export default function ShippingAddress() {
  const { itemId } = useParams();
  const location = useLocation();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [form, setForm] = useState(() => (location.state && location.state.user) ? location.state.user : MOCK_USER);

  useEffect(() => {
    fetch(`/buy/${itemId}`)
      .then(async res => {
        const text = await res.text();
        try {
          const data = JSON.parse(text);
          if (data.error) setError(data.error);
          else setItem(data);
        } catch (e) {
          setError('Could not fetch product details. Please ensure the backend is running and reachable.');
        }
      })
      .catch(err => setError(err.message));
  }, [itemId]);

  if (error) return <div className="text-red-500 p-8">Error: {error}</div>;
  if (!item) return <div className="p-8">Loading...</div>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-8">
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl">
        {/* Address Form */}
        <div className="bg-white rounded-xl shadow p-8 flex-1 min-w-[350px] border border-gray-200">
          <div className="flex items-center mb-6">
            <span className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center mr-2">
              <span className="w-3 h-3 bg-red-500 rounded-full block"></span>
            </span>
            <span className="text-lg font-semibold text-red-600">Add New Address</span>
          </div>
          <form className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="First Name" title="First Name" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Last Name" title="Last Name" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Street Address</label>
              <input name="street" value={form.street} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Street Address" title="Street Address" />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Apt Number</label>
                <input name="apt" value={form.apt} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Apt Number" title="Apt Number" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">State</label>
                <input name="state" value={form.state} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="State" title="State" />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Zip</label>
                <input name="zip" value={form.zip} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Zip" title="Zip" />
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button type="button" className="flex-1 border rounded py-2 text-gray-700">cancel</button>
              <button type="submit" className="flex-1 bg-black text-white rounded py-2 font-semibold">Save This Address</button>
            </div>
          </form>
        </div>
        {/* Order Summary */}
        <div className="bg-gray-100 rounded-xl shadow p-8 flex-1 min-w-[350px] border border-gray-200">
          <div className="mb-4 text-sm text-gray-600">
            By placing your order, you agree to our company <span className="underline cursor-pointer">Privacy policy</span> and <span className="underline cursor-pointer">Conditions of use</span>.
          </div>
          <hr className="mb-4" />
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            <div className="flex justify-between text-gray-700 mb-1">
              <span>Items - {item.name}</span>
              <span>{item.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-1">
              <span>Shipping and handling:</span>
              <span>{item.shipping.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-1">
              <span>Before tax:</span>
              <span>{item.beforeTax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-1">
              <span>Tax Collected:</span>
              <span>{item.tax.toLocaleString()}</span>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between items-center text-lg font-bold mb-6">
            <span>Order Total:</span>
            <span>{item.orderTotal.toLocaleString()}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded font-semibold text-lg">Place Order</button>
        </div>
      </div>
    </div>
  );
} 