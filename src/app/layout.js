import "./globals.css";

export const metadata = {
  title: "Town Riddles Online - Jeu Multijoueur Virtuel",
  description: "Rejoignez la ville virtuelle, rencontrez d'autres joueurs, affrontez-les à des mini-jeux et résolvez les 5 maisons de devinettes !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
