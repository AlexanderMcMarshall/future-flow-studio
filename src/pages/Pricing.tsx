import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-8 md:px-16 lg:px-32">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Pricing & Estimates</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Understand our transparent pricing and get a clear estimate for your junk removal needs. We're committed to providing fair, value-driven services.
        </p>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Pricing Factors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-4 rounded-lg shadow">
              <div className="flex items-center mb-2"><span className="text-2xl mr-2">🚛</span><span className="font-semibold">Volume (How Much Space It Takes)</span></div>
              <p className="text-muted-foreground text-sm">This is the main factor. Pricing is often based on: Minimum load (very small jobs), ¼ truck, ½ truck, ¾ truck, Full truck. For example, a couch and a few boxes might be a ¼ load, while a full garage cleanout might be a ½ to full truck.</p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow">
              <div className="flex items-center mb-2"><span className="text-2xl mr-2">⚖️</span><span className="font-semibold">Weight of the Items</span></div>
              <p className="text-muted-foreground text-sm">Some materials are extra heavy, which can affect pricing: Concrete, Dirt, Bricks, Roofing shingles, Tile. These may cost more because dumping fees are based on weight at landfills.</p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow">
              <div className="flex items-center mb-2"><span className="text-2xl mr-2">🏠</span><span className="font-semibold">Labor & Difficulty</span></div>
              <p className="text-muted-foreground text-sm">Price can also change depending on: Stairs or multiple floors, Long walking distance, Disassembly (like sheds or furniture), Tight spaces or special equipment needed.</p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow">
              <div className="flex items-center mb-2"><span className="text-2xl mr-2">♻️</span><span className="font-semibold">Disposal Type</span></div>
              <p className="text-muted-foreground text-sm">Different materials cost different amounts to dispose of: Electronics, Mattresses, Appliances, Construction debris.</p>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">How to Get an Estimate</h2>
          <p className="mb-4 text-muted-foreground">
            The best way to get an estimate from Junk Jets is to contact us with a quick description of the items you need removed. Customers can call, text, or send photos of the junk, which helps us give a fast and accurate estimate before we arrive.
          </p>
          <p className="mb-4 text-muted-foreground">
            In many cases, sending pictures of the items or the space allows us to provide a rough price range right away. For larger jobs like garage cleanouts, property cleanups, or construction debris removal, we can also schedule a quick on-site estimate.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Choose your plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">Lite</h3>
              <div className="text-2xl font-semibold mb-2">$250.00 <span className="text-base font-normal">per month</span></div>
              <ul className="mb-4 text-muted-foreground text-sm list-disc list-inside">
                <li>Small offices, boutiques, or apartment complexes with minimal junk</li>
                <li>Pick ups per month: 1</li>
                <li>No Priority scheduling</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg shadow flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <div className="text-2xl font-semibold mb-2">$500.00 <span className="text-base font-normal">per month</span></div>
              <ul className="mb-4 text-muted-foreground text-sm list-disc list-inside">
                <li>Medium offices, retail spaces, or apartment complexes with regular junk</li>
                <li>Pick ups per month: 2</li>
                <li>Priority scheduling</li>
              </ul>
            </div>
            <div className="bg-card p-6 rounded-lg shadow flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <div className="text-2xl font-semibold mb-2">$1000.00 <span className="text-base font-normal">per month</span></div>
              <ul className="mb-4 text-muted-foreground text-sm list-disc list-inside">
                <li>Large offices, apartment complexes, or high-turnover commercial properties</li>
                <li>Pick ups per month: 4 (weekly if needed)</li>
                <li>Priority scheduling (same day service for urgent removals)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Optional Add-Ons</h2>
          <ul className="text-muted-foreground text-sm list-disc list-inside">
            <li>Extra truckload: <span className="font-semibold">$150/load</span></li>
            <li>Hazardous waste pickup: <span className="font-semibold">Custom pricing</span></li>
            <li>Bulk clean outs outside scheduled visits: <span className="font-semibold">Custom pricing</span></li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
