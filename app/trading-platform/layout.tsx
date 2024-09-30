import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trading Platform | CapitalRevo",
  description:
    "Experience seamless trading with Capital Revo's platform. Access advanced tools and insights to enhance your trading strategy today.",
};

export default function TradingPlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
