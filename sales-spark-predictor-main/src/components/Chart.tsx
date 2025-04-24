
import { useMemo } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  ComposedChart
} from "recharts";
import { getDatasetForChart, getRegressionLine } from "@/utils/regressionModel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ChartProps {
  advertisingSpend: number | null;
  predictedSales: number | null;
}

const Chart = ({ advertisingSpend, predictedSales }: ChartProps) => {
  const data = useMemo(() => getDatasetForChart(), []);
  const regressionLine = useMemo(() => getRegressionLine(), []);

  // Create highlighted point if we have a prediction
  const highlightedPoint = useMemo(() => {
    if (advertisingSpend !== null && predictedSales !== null) {
      return [{ advertising: advertisingSpend, sales: predictedSales }];
    }
    return [];
  }, [advertisingSpend, predictedSales]);

  return (
    <Card className="animate-fade-in h-full">
      <CardHeader>
        <CardTitle className="text-brand-600">Data Visualization</CardTitle>
        <CardDescription>
          Scatter plot showing the relationship between advertising and sales
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[300px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="advertising" 
              name="Advertising ($1,000s)" 
              type="number"
              label={{ value: 'Advertising ($1,000s)', position: 'insideBottom', offset: -10 }}
              domain={['dataMin - 1', 'dataMax + 1']}
            />
            <YAxis 
              dataKey="sales" 
              name="Sales (1,000 units)" 
              label={{ value: 'Sales (1,000 units)', angle: -90, position: 'insideLeft', offset: -5 }}
              domain={['dataMin - 2', 'dataMax + 5']}
            />
            <Tooltip 
              formatter={(value: any) => [`${value}`, '']}
              labelFormatter={(value) => `Advertising: $${value}k`}
              cursor={{ strokeDasharray: '3 3' }}
            />
            <Legend />
            <Scatter name="Data Points" data={data} fill="#8884d8" />
            <Line
              name="Regression Line"
              data={regressionLine}
              type="monotone"
              dataKey="sales"
              stroke="#ff7300"
              strokeWidth={2}
              dot={false}
            />
            {highlightedPoint.length > 0 && (
              <Scatter
                name="Your Prediction"
                data={highlightedPoint}
                fill="#ff0000"
                shape="star"
                r={6}
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;
