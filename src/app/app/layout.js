import Header from "@/components/layout/header";

export default function App({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
