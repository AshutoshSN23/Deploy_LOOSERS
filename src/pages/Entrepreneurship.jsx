import React, { useState } from 'react';
import IdeaCard from '../components/IdeaCard';
import IdeaModal from '../components/IdeaModal';
import '../styles/Entrepreneurship.css';
import defaultImg1 from '../assets/practices/B1.jpg';
import defaultImg2 from '../assets/practices/B2.jpg';
import defaultImg3 from '../assets/practices/B3.jpeg';
import defaultImg4 from '../assets/practices/B4.jpg';
import defaultImg5 from '../assets/practices/B5.jpg';
import defaultImg6 from '../assets/practices/B6.jpg';
import defaultImg7 from '../assets/practices/B7.jpg';
import defaultImg8 from '../assets/practices/B8.jpeg';
import defaultImg9 from '../assets/practices/B9.jpg';
import defaultImg10 from '../assets/practices/B10.jpg';

const entrepreneurshipIdeas = [
  {
    id: "tailoring",
    title: "Tailoring / Sewing Unit",
    image: defaultImg1,
    tools: ["Sewing machine", "Thread", "Cloth"],
    steps: [
      "Buy or borrow a basic sewing machine.",
      "Practice with simple designs.",
      "Offer mending and basic stitching in your locality.",
      "Start stitching blouses, petticoats, salwar.",
      "Create samples and promote through WhatsApp groups."
    ],
    income: "₹5000–8000/month"
  },
  {
    id: "pickle_papad",
    title: "Pickle & Papad Making",
    image: defaultImg2,
    tools: ["Mixing tools", "Jars", "Spices"],
    steps: [
      "Choose recipes like mango pickle, rice papad.",
      "Buy raw ingredients locally.",
      "Maintain hygiene and consistency.",
      "Package in reused glass jars.",
      "Sell via word-of-mouth and fairs."
    ],
    income: "₹3000–6000/month"
  },
  {
    id: "tiffin_service",
    title: "Home Tiffin Service",
    image: defaultImg3,
    tools: ["Utensils", "Stove", "Packaging containers"],
    steps: [
      "Decide a fixed menu with 1 sabzi, 1 dal, rice, and roti.",
      "Buy basic containers or banana leaves.",
      "Tie up with workers, students, or office goers.",
      "Charge per meal or per week.",
      "Use WhatsApp/leaflets to promote."
    ],
    income: "₹6000–9000/month"
  },
  {
    id: "mushroom_farming",
    title: "Mushroom Farming",
    image: defaultImg4,
    tools: ["Mushroom spawn", "Straw", "Dark room"],
    steps: [
      "Learn oyster mushroom basics (YouTube).",
      "Get mushroom spawn from Krishi Kendra.",
      "Prepare straw beds and humid environment.",
      "Harvest in 15–20 days.",
      "Sell to local markets or hotels."
    ],
    income: "₹5000–7000/month"
  },
  {
    id: "goat_rearing",
    title: "Goat Rearing",
    image: defaultImg5,
    tools: ["Shed", "Fodder", "Vaccination help"],
    steps: [
      "Start with 2–3 local breed goats.",
      "Keep clean shelter and grazing space.",
      "Contact vet for deworming and vaccines.",
      "Sell milk or kids (baby goats) for profit.",
      "Use manure for kitchen garden."
    ],
    income: "₹4000–8000/month"
  },
  {
    id: "soap_candle",
    title: "Homemade Soaps & Candles",
    image: defaultImg6,
    tools: ["Moulds", "Oils", "Wax"],
    steps: [
      "Attend a free online course or demo.",
      "Buy small quantities of soap base or wax.",
      "Experiment with essential oils.",
      "Make gift packs for festivals.",
      "Sell locally and online."
    ],
    income: "₹3000–6000/month"
  },
  {
    id: "leaf_plate",
    title: "Leaf Plate or Cup Making",
    image: defaultImg7,
    tools: ["Leaf press", "Sal/siali leaves"],
    steps: [
      "Collect large leaves like sal or banana.",
      "Stitch manually or use hand press.",
      "Bundle into 100s and sell to caterers.",
      "Eco-friendly option = high demand.",
      "Contact temples or functions."
    ],
    income: "₹4000–7000/month"
  },
  {
    id: "mehendi_beautician",
    title: "Mehendi / Beautician Services",
    image: defaultImg8,
    tools: ["Mehendi cones", "Basic makeup kit"],
    steps: [
      "Practice designs on paper or friends.",
      "Offer bridal or festival mehendi service.",
      "Learn threading, basic facials.",
      "Set up a home corner or visit clients.",
      "Word-of-mouth is key."
    ],
    income: "₹3000–7000/month"
  },
  {
    id: "nursery_plants",
    title: "Nursery & Plant Selling",
    image: defaultImg9,
    tools: ["Pots", "Soil", "Seeds"],
    steps: [
      "Start with tulsi, money plant, aloe vera.",
      "Reuse containers or coconut shells.",
      "Propagate and decorate.",
      "Sell as gift plants.",
      "Add painted pots for more income."
    ],
    income: "₹3000–6000/month"
  },
  {
    id: "tuition_classes",
    title: "Tuition or Spoken English Class",
    image: defaultImg10,
    tools: ["Books", "Board", "Phone or internet"],
    steps: [
      "Start teaching kids from your area.",
      "Focus on Kannada/English/Math basics.",
      "Use your phone to get simple materials.",
      "Expand to adult learners or spoken English.",
      "Charge ₹200–500 per month per student."
    ],
    income: "₹4000–9000/month"
  }
];

const Entrepreneurship = () => {
  const [selectedIdea, setSelectedIdea] = useState(null);

  return (
    <div className="entrepreneurship-page">
      <div className="entrepreneurship-container">
        <h1 className="entrepreneurship-title">🌱 Micro-Entrepreneurship Ideas</h1>
        <p className="entrepreneurship-subtitle">
          Practical income opportunities for rural girls. Click on any to learn how to get started.
        </p>
        <div className="entrepreneurship-grid">
          {entrepreneurshipIdeas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} onClick={() => setSelectedIdea(idea)} />
          ))}
        </div>
        {selectedIdea && (
          <IdeaModal idea={selectedIdea} onClose={() => setSelectedIdea(null)} />
        )}
      </div>
    </div>
  );
};

export default Entrepreneurship;