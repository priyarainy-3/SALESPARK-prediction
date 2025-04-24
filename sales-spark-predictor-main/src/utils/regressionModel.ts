
import { dummyData, slope, intercept, rSquared, rmse } from './dummyData';

// Predict sales based on advertising spend
export const predictSales = (advertisingSpend: number): number => {
  return intercept + slope * advertisingSpend;
};

// Get model metrics
export const getModelMetrics = () => {
  return {
    intercept: parseFloat(intercept.toFixed(2)),
    slope: parseFloat(slope.toFixed(2)),
    rSquared: parseFloat(rSquared.toFixed(4)),
    rmse: parseFloat(rmse.toFixed(2)),
    equation: `Sales = ${intercept.toFixed(2)} + ${slope.toFixed(2)} × Advertising`,
    interpretation: `For every additional $1,000 spent on advertising, sales are expected to increase by approximately ${slope.toFixed(2)} thousand units.`
  };
};

// Get dataset for visualization
export const getDatasetForChart = () => {
  return dummyData;
};

// Generate prediction points for the regression line
export const getRegressionLine = () => {
  // Get min and max advertising values
  const minAd = Math.min(...dummyData.map(d => d.advertising));
  const maxAd = Math.max(...dummyData.map(d => d.advertising));
  
  // Create two points to draw the line
  return [
    { advertising: minAd, sales: predictSales(minAd) },
    { advertising: maxAd, sales: predictSales(maxAd) }
  ];
};
