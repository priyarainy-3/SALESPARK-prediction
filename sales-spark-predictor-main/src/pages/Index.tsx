
import { useState } from "react";
import { predictSales } from "@/utils/regressionModel";
import PredictionForm from "@/components/PredictionForm";
import ResultsPanel from "@/components/ResultsPanel";
import Chart from "@/components/Chart";
import AboutSection from "@/components/AboutSection";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [advertisingSpend, setAdvertisingSpend] = useState<number | null>(null);
  const [predictedSales, setPredictedSales] = useState<number | null>(null);

  const handlePredict = (value: number) => {
    const prediction = predictSales(value);
    setAdvertisingSpend(value);
    setPredictedSales(parseFloat(prediction.toFixed(2)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 sm:px-6">
      <header className="max-w-6xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold text-brand-700 mb-2">
          Sales Spark <span className="text-brand-500">Predictor</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Analyze the relationship between advertising spend and sales with simple linear regression
        </p>
      </header>
      
      <Separator className="max-w-6xl mx-auto mb-8" />
      
      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-1">
            <PredictionForm onPredict={handlePredict} />
          </div>
          <div className="lg:col-span-2">
            <Chart 
              advertisingSpend={advertisingSpend} 
              predictedSales={predictedSales}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div>
            <ResultsPanel 
              advertisingSpend={advertisingSpend}
              predictedSales={predictedSales} 
            />
          </div>
          <div>
            <AboutSection />
          </div>
        </div>
      </main>
      
      <footer className="max-w-6xl mx-auto mt-12 text-center text-sm text-gray-500">
        <p>Sales Spark Predictor © 2025 | A Simple Linear Regression Demonstration</p>
      </footer>
    </div>
  );
};

export default Index;
