import { AppProvider } from "@/providers/app";
import { AppRoutes } from "@/routes";
import { DesktopNav } from "./components/DesktopNav";
// import { AppNav } from "./components/AppNav";
import { MobileNav } from "./components/MobileNav";
import { Footer } from "./components/Footer";

function App() {
  return (
    <AppProvider>
      <DesktopNav />
      <MobileNav />
      <AppRoutes />
      <Footer />
      {/* <AppNav /> */}
    </AppProvider>
  );
}

export default App;
