
// Generate synthetic data for advertising spend vs sales
export type DataPoint = {
  advertising: number;
  sales: number;
};

// Generate 40 data points with a positive linear relationship plus some noise
const generateDummyData = (): DataPoint[] => {
  const data: DataPoint[] = [];
  
  // Base coefficient and intercept for our "true" model
  const trueIntercept = 20; // Base sales with no advertising
  const trueCoefficient = 5; // For each $1000 in advertising, sales increase by 5 units
  
  // Generate data points with some random noise
  for (let i = 0; i < 40; i++) {
    // Random advertising value between 1 and 30 (representing $1,000 to $30,000)
    const advertising = 1 + Math.random() * 29;
    
    // Calculate the "true" sales based on our model
    const trueSales = trueIntercept + (trueCoefficient * advertising);
    
    // Add noise to make it realistic (-10% to +10% variation)
    const noise = (Math.random() - 0.5) * 0.2 * trueSales;
    const sales = Math.max(0, Math.round((trueSales + noise) * 10) / 10);
    
    data.push({ advertising, sales });
  }
  
  return data;
};

export const dummyData = generateDummyData();

// Calculate the actual coefficients through simple linear regression
export const calculateCoefficients = (data: DataPoint[]) => {
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumXX = 0;
  const n = data.length;
  
  for (const point of data) {
    sumX += point.advertising;
    sumY += point.sales;
    sumXY += point.advertising * point.sales;
    sumXX += point.advertising * point.advertising;
  }
  
  const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX) / n;
  
  return { slope, intercept };
};

// Calculate the sample stats
export const { slope, intercept } = calculateCoefficients(dummyData);

// Helper to calculate R-squared (coefficient of determination)
export const calculateRSquared = (data: DataPoint[], slope: number, intercept: number) => {
  const meanY = data.reduce((sum, point) => sum + point.sales, 0) / data.length;
  
  let ssTot = 0; // Total sum of squares
  let ssRes = 0; // Residual sum of squares
  
  for (const point of data) {
    const yPred = intercept + slope * point.advertising;
    ssTot += Math.pow(point.sales - meanY, 2);
    ssRes += Math.pow(point.sales - yPred, 2);
  }
  
  return 1 - (ssRes / ssTot);
};

// Calculate the R-squared value
export const rSquared = calculateRSquared(dummyData, slope, intercept);

// Root Mean Squared Error calculation
export const calculateRMSE = (data: DataPoint[], slope: number, intercept: number) => {
  let sumSquaredErrors = 0;
  
  for (const point of data) {
    const yPred = intercept + slope * point.advertising;
    sumSquaredErrors += Math.pow(point.sales - yPred, 2);
  }
  
  return Math.sqrt(sumSquaredErrors / data.length);
};

// Calculate RMSE
export const rmse = calculateRMSE(dummyData, slope, intercept);
