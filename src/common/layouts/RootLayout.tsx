import { Outlet } from "react-router-dom";
import { Provider } from "@/common/providers/provider";

export function RootLayout() {
  return (
    <Provider>
      <Outlet />
    </Provider>
  );
}
