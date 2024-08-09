import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let app: any | null = null;
function render(props: any = {}) {
    const { container } = props;
    app = createApp(App);
    app.use(router)
    app.use(store)
    app.mount(container ? container.querySelector('#JClub') : '#JClub');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log('Vue3 app bootstraped');
}

export async function mount(props: any) {
    console.log('Vue3 app mounted', props);
    render(props);
}

export async function unmount() {
    console.log('Vue3 app unmounted');
    app?.unmount();
    app = null;
}

export async function update(props: any) {
    console.log('Vue3 app updated', props);
}
