
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutSection = () => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle className="text-brand-600">About This Model</CardTitle>
        <CardDescription>
          Understanding Simple Linear Regression
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Simple Linear Regression?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 mb-2">
                Simple Linear Regression is a statistical method that models the relationship between two variables: 
                a dependent variable (y) and an independent variable (x).
              </p>
              <p className="text-gray-700 mb-2">
                It finds the best-fitting straight line through the data points, which is described by the equation:
              </p>
              <p className="font-medium text-center py-2">y = β₀ + β₁x + ε</p>
              <p className="text-gray-700">
                Where β₀ is the y-intercept, β₁ is the slope, and ε represents the error term.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>How to Interpret the Results?</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 mb-3">
                The key components to interpret are:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  <span className="font-medium">Slope (β₁):</span> Represents the change in sales for a one-unit increase in advertising spending.
                </li>
                <li>
                  <span className="font-medium">Intercept (β₀):</span> The expected sales when advertising spending is zero (theoretical).
                </li>
                <li>
                  <span className="font-medium">R-squared (R²):</span> The proportion of the variance in sales that is predictable from advertising spending. Higher values indicate a better fit (0-100%).
                </li>
                <li>
                  <span className="font-medium">RMSE:</span> Root Mean Square Error - measures the average deviation of predictions from actual values. Lower is better.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>Limitations of This Model</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>This model assumes a linear relationship between advertising and sales.</li>
                <li>It only considers advertising spend as a factor, ignoring other potential influences on sales.</li>
                <li>Correlation does not imply causation - other factors may be responsible for the observed relationship.</li>
                <li>The model is best used for interpolation rather than extrapolation (predictions within the range of observed data).</li>
                <li>The data used is simulated for demonstration purposes.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
