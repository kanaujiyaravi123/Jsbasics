import { PieChart } from "react-minimal-pie-chart"

export function Chart({ data }) {
    const UPIvalue = data.filter(entry => entry.mode === "UPI").reduce((acc, curr) => acc + curr.amount, 0)
    const CASHvalue = data.filter(entry => entry.mode === "CASH").reduce((acc, curr) => acc + curr.amount, 0)
    return (
        <div className="chart">
            <PieChart data={[
                {title: "UPI", value: UPIvalue,color:"#669900"},
                {title: "CASH", value: CASHvalue,color:"#ff9900"}
            ]} />
        </div>
    )
}