type StatBarProps = {
    label: string;
    value: number;
    max?: number
};

export default function StatBar ({ label, value, max = 225 }: StatBarProps) {
    const percentage = Math.min((value / max) * 100, 100);

    return (
            <div style={{ margin: "8px 0", textAlign: "center", alignItems: "center", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "10px;" }}>
                <strong>{label}</strong>
                <div style={{
                    height: "20px",
                    backgroundColor: "#eee",
                    borderRadius: "50px",
                    overflow: "hidden",
                    marginTop: "4px"
                }}>
                    <div style={{
                    width: `${percentage}%`,
                    height: "100%",
                    backgroundColor: "#42a2f6",
                    transition: "width 0.3s ease"
                    }} />
                </div>
                <span style={{ fontSize: "12px", color: "#333" }}>{value}</span>
                </div>
    );
}