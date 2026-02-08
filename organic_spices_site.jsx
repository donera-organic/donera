import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export default function OrganicSpicesSite() {
  const products = [
    { name: "Turmeric Powder", price: "₹320 / kg" },
    { name: "Organic Black Pepper", price: "₹780 / kg" },
    { name: "Cumin Seeds", price: "₹450 / kg" },
    { name: "Coriander Powder", price: "₹260 / kg" },
    { name: "Dry Ginger", price: "Bulk / Export" },
    { name: "Cardamom", price: "Bulk / Export" },

    { name: "Turmeric Powder", price: "₹320 / kg" },
    { name: "Organic Black Pepper", price: "₹780 / kg" },
    { name: "Cumin Seeds", price: "₹450 / kg" },
    { name: "Coriander Powder", price: "₹260 / kg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <Leaf className="w-8 h-8" />
          DONERA
        </div>
        <Button>Contact Us</Button>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">DONERA – Farm‑Fresh Organic Spices</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Premium organic spices sourced directly from Indian farmers — serving retail customers in India and wholesale buyers worldwide.
        </p>
      </motion.section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <Card key={i} className="rounded-2xl shadow-sm">
            <CardContent className="p-4">
              <div className="h-32 bg-gray-200 rounded-xl mb-4" />
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-gray-500">{p.price}</p>
              <Button className="mt-4 w-full">Enquire</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-6">
        <Card className="rounded-2xl"><CardContent className="p-6">🌍 Retail India + Wholesale Export</CardContent></Card>
        <Card className="rounded-2xl"><CardContent className="p-6">🌱 100% Organic & Chemical‑Free</CardContent></Card>
        <Card className="rounded-2xl"><CardContent className="p-6">🚜 Direct Farmer Sourcing</CardContent></Card>
        <Card className="rounded-2xl"><CardContent className="p-6">📦 Pan‑India Delivery</CardContent></Card>
      </section>

      <footer className="mt-20 text-center text-gray-500">
        © 2026 DONERA · India · Organic Spices · Retail & Export · WhatsApp: +91‑XXXXXXXXXX
      </footer>
    </div>
  );
}
