"use client";
interface BookSalesPercentageProps {
  totalBookCount: number;
  availableBookCount: number;
}

function Percentage(totalBookCount: number, availableBookCount: number) {
  const salesPercentage = (availableBookCount / totalBookCount) * 100;
  return salesPercentage.toFixed(2) + "%";
}
export default function BookSalesPercentage(props: BookSalesPercentageProps) {
  const { totalBookCount, availableBookCount } = props;
  return <input className="book-sales-percentage" style={{
    backgroundSize: Percentage(totalBookCount, availableBookCount)
  }} type="range" disabled />;
}
