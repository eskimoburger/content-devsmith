import LuckyCard from "./components/LuckyCard";
import "./App.css";

const prizes = [
  "🥤 แก้ว Devsmith",
  "🎫 คูปองพัฒนา Odoo กับ Devsmith",
  "💬 สติ๊กเกอร์ Devsmith",
  "🎁 ขอบคุณที่ร่วมสนุก!",
];

export default function App() {
  return (
    <main className="app-container">
      <h1 className="app-title">🎉 Devsmith Lucky Draw 🎉</h1>

      <LuckyCard prizes={prizes} />

      <footer className="app-footer">
        <p>Powered by Devsmith</p>
      </footer>
    </main>
  );
}
