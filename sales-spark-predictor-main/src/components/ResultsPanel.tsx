
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getModelMetrics } from "@/utils/regressionModel";

interface ResultsPanelProps {
  advertisingSpend: number | null;
  predictedSales: number | null;
}

const ResultsPanel = ({ advertisingSpend, predictedSales }: ResultsPanelProps) => {
  const metrics = getModelMetrics();

  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-brand-600">Prediction Results</CardTitle>
        <CardDescription>
          Analyzing the relationship between advertising and sales
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {advertisingSpend !== null && predictedSales !== null ? (
          <div className="p-4 bg-brand-50 border border-brand-200 rounded-md animate-slide-in">
            <h3 className="font-medium text-lg mb-2">Your Prediction:</h3>
            <p className="mb-1">
              <span className="font-medium">Advertising Budget:</span> ${(advertisingSpend * 1000).toLocaleString()}
            </p>
            <p className="mb-1">
              <span className="font-medium">Predicted Sales:</span>{" "}
              {predictedSales.toLocaleString()} units
            </p>
          </div>
        ) : (
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-md text-gray-500">
            Enter an advertising amount to see prediction results
          </div>
        )}

        <div>
          <h3 className="font-medium text-lg mb-3">Model Details:</h3>
          <div className="grid gap-3">
            <div className="flex justify-between p-2 border-b">
              <span className="text-gray-600">Model Equation:</span>
              <span className="font-medium">{metrics.equation}</span>
            </div>
            <div className="flex justify-between p-2 border-b">
              <span className="text-gray-600">R² (Accuracy):</span>
              <span className="font-medium">{(metrics.rSquared * 100).toFixed(2)}%</span>
            </div>
            <div className="flex justify-between p-2 border-b">
              <span className="text-gray-600">RMSE:</span>
              <span className="font-medium">{metrics.rmse}</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Interpretation:</span>{" "}
            {metrics.interpretation}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultsPanel;
