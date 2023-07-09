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
  const rangeElement = document.querySelector(".book-sales-percentage") as HTMLInputElement;
  if (rangeElement) {
    rangeElement.style.backgroundSize = Percentage(
      totalBookCount,
      availableBookCount
    );
  }
  return <input className="book-sales-percentage" type="range" disabled />;
}
