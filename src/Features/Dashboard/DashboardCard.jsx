// components/DashboardCard.jsx
function DashboardCard({ color, title, value, note, icon }) {
  return (
    <div className={`rounded-xl text-white p-4 flex flex-col ${color}`}>
      <div className="text-2xl">{icon}</div>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
      <span className="text-sm opacity-80">{note}</span>
    </div>
  );
}

export default DashboardCard;
