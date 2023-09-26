import { createSignal } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";
import Sidebar from "./components/Sidebar";
function App() {
    return (
        <div>
            <Sidebar />
        </div>
    );
}

export default App;
