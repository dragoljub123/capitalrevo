import { useState } from "react";
import CurrencyCalculator from "../components/CurrencyCalculator";
import FibonacciCalculator from "../components/Fibonacci";
import PivotPoint from "../components/PivotPoint";
import CfdCalculator from "../components/CfdCalculator";
import StopLossLimit from "../components/StopLossLimit";
import MarginCalculator from "../components/MarginCalculator";
import PipValue from "../components/PipValue"; 
import Heatmap from "../components/Heatmap";

const MobileWidgetsCalculators = () => {
    const [activeWidgetIndex, setActiveWidgetIndex] = useState(0);

    const tabs = [
        { id: "advancedWidget", label: "Currency Converter", component: <CurrencyCalculator /> },
        { id: "symbolOverviewWidget", label: "Fibonacci Calculator", component: <FibonacciCalculator /> },
        { id: "pivotCalculator", label: "Pivot Calculator", component: <PivotPoint /> },
        { id: "cfdCalculator", label: "CFD Profit/Loss Calculator", component: <CfdCalculator /> },
        { id: "marginCalculator", label: "Margin Calculator", component: <MarginCalculator /> },
        { id: "stopLossLimit", label: "Stop Loss Limit", component: <StopLossLimit /> },
        { id: "pipValue", label: "Pip Value", component: <PipValue /> },
        { id: "heatmap", label: "Heatmap", component: <Heatmap /> },
    ];

    return (
        <div className="flex flex-col items-center">
            {/* Dugmad za widgete */}
            <ul className="flex overflow-x-auto hide-scroll-bar mb-4 w-full">
                {tabs.map((tab, index) => (
                    <li key={tab.id} className={`flex-shrink-0`}>
                        <button
                            className={`px-4 py-2 mx-1 rounded-lg ${activeWidgetIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-200'} ${index === 0 ? 'ml-4' : ''}`}
                            onClick={() => setActiveWidgetIndex(index)}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>
            {/* Prikaz aktivnog widgeta */}
            <div className="w-full">
                {tabs[activeWidgetIndex].component}
            </div>
        </div>
    );
};

export default MobileWidgetsCalculators;
