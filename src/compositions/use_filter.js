import { inject } from 'vue'

export const useFilter = () => {
    const today = inject('today')
    const fnSort = (a, b) => {
        const a_date = Date.parse(a.date)
        const b_date = Date.parse(b.date)
        if(a_date > b_date) return 1
        else if(a_date < b_date) return 0
        else return (a.id - b.id)
    }

    const getPendingTodos = (todos) => {
        return todos.value.filter((todo) => todo.date < today && !todo.completed)
            .slice()
            .sort(fnSort)
    }
    const getActiveTodayTodos = (todos) => {
        return todos.value
            .filter((todo) => todo.date == today && !todo.completed)
            .slice()
            .sort(fnSort)
    }
    // 요즘편지에서 데이터 가져올 때 1.기간지난 거 2.안 지난거 3. 참여한 거 이렇게 db에서 다 가져왔는데...
    // 커버도 가져오고, 편지도 가져오고 뭐랄까 db 연결 부담 * 99였는데 이런 식으로 front영역으로 넘기면 훨씬 깔끔하긴 하겠네.
    // 첫 화면에 보여지는 것만 쪼개서 화면에 보여주고 나머지는 이후에 쪼개서 넣어두면 클라이언트 입장에서는 알 수 없지.
    // 내 아이디에 연결 되어 있는 내용 다 가져와서 이런 식으로 모듈만들어서 나눠서 뿌려줘도 되겠다.
    // 다만 useYn N 같은 건 꼭 걸러서 꺼내오긴 해야겠다.
    const getCompletedTodayTodos = (todos) => {
        return todos.value
            .filter((todo) => todo.date == today && todo.completed)
            .slice()
            .sort(fnSort)
    }

    const getAllTodayTodos = (todos) => {
        return getActiveTodayTodos(todos)
            .concat(getCompletedTodayTodos(todos))
            .slice()
            .sort(fnSort)
    }

    const getAllTodos = (todos) => {
        return todos.value.slice().sort(fnSort)
    }

    return {
        getPendingTodos,
        getActiveTodayTodos,
        getCompletedTodayTodos,
        getAllTodayTodos,
        getAllTodos,
    }
}