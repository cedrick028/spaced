
import { PieChart, Pie, Cell, Label } from "recharts";
export default function Donut() {

  const data = [
    { name: "Expence", value: 60 },
    { name: "Availanle", value: 40 },
  ];

  const COLORS = ["#3B5BDB", "#E5E7EB"];

  return (
    <PieChart width={100} height={100}>
      <Pie
        data={data}
        dataKey="value"
        outerRadius={50}
        innerRadius={40}
        label={false}
        startAngle={90}
        endAngle={-270}
      >
        {data.map((entry, index) => (
          <Cell
            key={index}
            fill={COLORS[index]}
          />
        ))}

        <Label
          position="center"
          content={({ viewBox }) => {
            const cx = viewBox?.cx ?? 50;
            const cy = viewBox?.cy ?? 50;

            return (
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                <tspan
                  x={cx}
                  dy="-8"
                  fontSize="24"
                  fontWeight="bold"
                  fill="#3B5BDB"
                >
                  62%
                </tspan>

                <tspan
                  x={cx}
                  dy="20"
                  fontSize="10"
                  fill="#6B7280"
                >
                  budget used
                </tspan>
              </text>
            );
          }}
        />
      </Pie>
    </PieChart>
  )
}