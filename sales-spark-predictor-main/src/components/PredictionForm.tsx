
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface PredictionFormProps {
  onPredict: (value: number) => void;
}

const PredictionForm = ({ onPredict }: PredictionFormProps) => {
  const [advertisingSpend, setAdvertisingSpend] = useState<string>("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const value = parseFloat(advertisingSpend);
    
    if (isNaN(value) || value < 0) {
      toast.error("Please enter a valid positive number");
      return;
    }
    
    onPredict(value);
    toast.success("Prediction calculated!");
  };

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-brand-600">Predict Sales</CardTitle>
        <CardDescription>
          Enter your advertising budget to predict expected sales
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="advertisingSpend">Advertising Budget ($1,000s)</Label>
            <Input
              id="advertisingSpend"
              type="number"
              min="0"
              step="0.1"
              placeholder="Enter amount (e.g., 15 for $15,000)"
              value={advertisingSpend}
              onChange={(e) => setAdvertisingSpend(e.target.value)}
              className="focus:border-brand-400"
              required
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white"
          >
            Calculate Prediction
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PredictionForm;
