import { useState, useRef } from "react";
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
    const tabListRef = useRef<HTMLUListElement | null>(null);

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

    const handlePrev = () => {
        if (!tabListRef.current) return;
        const newIndex = activeWidgetIndex === 0 ? tabs.length - 1 : activeWidgetIndex - 1;
        setActiveWidgetIndex(newIndex);
        const child = tabListRef.current.children[newIndex] as HTMLElement;
        tabListRef.current.scrollLeft = child.offsetLeft; // Pomeri na novo aktivno dugme
    };

    const handleNext = () => {
        if (!tabListRef.current) return;
        const newIndex = activeWidgetIndex === tabs.length - 1 ? 0 : activeWidgetIndex + 1;
        setActiveWidgetIndex(newIndex);
        const child = tabListRef.current.children[newIndex] as HTMLElement;
        tabListRef.current.scrollLeft = child.offsetLeft; // Pomeri na novo aktivno dugme
    };

    return (
        <div className="flex flex-col items-center">
            <ul ref={tabListRef} className="flex overflow-x-auto hide-scroll-bar mb-4 w-full">
                {tabs.map((tab, index) => (
                    <li key={tab.id} className={`flex-shrink-0`}>
                        <button
                            className={`px-4 py-2 mx-1 rounded-lg ${activeWidgetIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                            onClick={() => {
                                setActiveWidgetIndex(index);
                                if (tabListRef.current) {
                                    const child = tabListRef.current.children[index] as HTMLElement;
                                    tabListRef.current.scrollLeft = child.offsetLeft; // Pomeri na aktivno dugme
                                }
                            }}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="flex justify-between w-full mb-2 px-4">
                <button onClick={handlePrev} className="px-2 py-1 bg-gray-300 rounded-lg">
                    &#9664; 
                </button>
                <button onClick={handleNext} className="px-2 py-1 bg-gray-300 rounded-lg">
                    &#9654; 
                </button>
            </div>

            <div className="w-full">
                {tabs[activeWidgetIndex].component}
            </div>
        </div>
    );
};

export default MobileWidgetsCalculators;
