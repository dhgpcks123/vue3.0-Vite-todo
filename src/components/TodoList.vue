<template>
    <main>
        <div>
            <div class="input-group my-2 input-group-sm">
                <div class="input-group-text">
                    <input
                        class="form-check-input mt-0"
                        type="checkbox"
                    >
                </div>
                <div class="input-group-text">
                    <input
                        class="form-input mt-0"
                        type="date"
                        disabled
                    >
                </div>
                <input type="text" class="form-control">
                <button
                    class="btn btn-outline-primary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                >
                    할일 관리
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                        <a class="dropdown-item"></a>
                    </li>
                </ul>
            </div>
            <div v-show="idx+1 < data.length" class="col border border-second" />
        </div>
    </main>
</template>

<script>
import { inject } from 'vue'
export default {
    name: 'TodoList',
    props: {
        data: {
            type: Array,
            default: [],
        },
    },
    setup() {
        const removeTodo = inject('removeTodo')
        const completeTodo = inject('completeTodo')
        const today = inject('today')
        const menu = [
            {
                str: 'delete todo',
                func: removeTodo,
            },
            {
                str: 'complete todo',
                func: completeTodo,
            },
        ]
        return {
            menu,
            today,
            completeTodo,
        }
    },
}
</script>
