import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
export default function Horizontal() {
  const data = [
  {
    name: "Budget",
    spent: 60,
    remaining: 40,
  },
];
  return (
    <ResponsiveContainer width="100%" height={20}>
      <BarChart
        data={data}
        layout="vertical"
        stackOffset="expand" // makes it behave like 100%
      >
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" hide />

        <Tooltip />

        {/* Spent */}
        <Bar dataKey="spent" stackId="a" fill="#3B5BDB" radius={10} />

        {/* Remaining */}
        <Bar dataKey="remaining" stackId="a" fill="#E5E7EB" radius={[0, 10, 10, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}