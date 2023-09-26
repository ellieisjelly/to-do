import SidebarLabel from "./SidebarLabel";
import { For, createSignal } from "solid-js";
function addTodo() {
    // to-do: add todo
    console.log("Adding todo");
}
export default function () {
    const [labels, setLabels] = createSignal<string[]>(["ur mom", "ur dad"]);
    return (
        <div class="flex flex-col bg-slate-900 w-[30vw] h-[100vh] max-w-[400px]">
            <For each={labels()}>
                {(label) => <SidebarLabel label={label} />}
            </For>
            <button onClick={addTodo}>Add To-Do</button>
        </div>
    );
}
